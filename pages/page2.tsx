import { usePolkadotExtensionWithContext } from "@/context/polkadot-extension-context";
import { useState } from "react";

export default function Page2() {
  const {
    accounts,
    actingAccount,
    error: extensionError,
    injector,
  } = usePolkadotExtensionWithContext();
  const [signature, setSignature] = useState<String>("");

  const signAMessage = async () => {
    const signRaw = injector?.signer?.signRaw;

    if (!!signRaw && !!actingAccount) {
      try {
        const data = await signRaw({
          address: actingAccount.address,
          data: "simple test message",
          type: "bytes",
        });
        setSignature(data.signature);
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <div>
      <h1>Page 2 - context + signing </h1>
      <p>
        This page uses the Context Provider (which uses the{" "}
        <code>usePolkadotExtension</code> hook) to get its data. It also shows
        how to sign a message.
      </p>
      <pre>accounts: {JSON.stringify(accounts, null, 2)}</pre>
      {!extensionError && (
        <>
          <button onClick={signAMessage}>Sign message with accounts[0]</button>
          <p>{signature}</p>
        </>
      )}
    </div>
  );
}

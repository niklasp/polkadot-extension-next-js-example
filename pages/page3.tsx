import { usePolkadotExtensionWithContext } from "@/context/polkadot-extension-context";
import { useState } from "react";

export default function Page3() {
  const {
    accounts,
    actingAccount,
    setActingAccountIdx,
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

  const onSelectAccount = (address: string) => {
    const accountIdx = accounts?.findIndex((a) => a.address === address);
    setActingAccountIdx(accountIdx || 0);
  };

  return (
    <div>
      <h1>Page 3 - context + signing + account select</h1>
      <p>
        This page uses the Context Provider (which uses the{" "}
        <code>usePolkadotExtension</code> hook) to get its data. It also shows
        how to sign a message.
      </p>
      <pre>acting Account: {JSON.stringify(actingAccount, null, 2)}</pre>
      {!extensionError && (
        <>
          <label htmlFor="select-polkadot-account">
            Select the account you want to use
          </label>
          <select
            id="select-polkadot-account"
            className="p-3 m-3 border-2 border-green-500"
            onChange={(event) => {
              console.log(event);
              onSelectAccount(event.target.value);
            }}
          >
            {accounts?.map((a) => (
              <option key={a.address} value={a.address}>
                {a.address} [{a.meta.name}]
              </option>
            ))}
          </select>
          <button onClick={signAMessage}>
            Sign message with {actingAccount?.meta.name}
          </button>
          <p>{signature}</p>
        </>
      )}
    </div>
  );
}

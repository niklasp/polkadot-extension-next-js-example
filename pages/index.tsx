import { usePolkadotExtension } from "@/hooks/use-polkadot-extension";

export default function Home() {
  const { accounts, error: extensionError, injector } = usePolkadotExtension();

  return (
    <div>
      <h1>Polkadod Extension Demo</h1>
      <pre>accounts: {JSON.stringify(accounts, null, 2)}</pre>
      {extensionError && <p className="error">{extensionError.message}</p>}
      <p>
        <a href="https://github.com/niklasp/polkadot-extension-next-js-example">
          -&gt; Github Repo &lt;-
        </a>
      </p>
    </div>
  );
}

import { usePolkadotExtension } from "@/hooks/use-polkadot-extension"

export default function Home() {

  const { accounts, error: extensionError } = usePolkadotExtension()

  return (
    <div>
      <pre>accounts: { JSON.stringify( accounts, null, 2 ) }</pre>
      { extensionError && <p>{ extensionError.message }</p> }
      <p>
        <a 
          href="https://github.com/niklasp/polkadot-extension-next-js-example"
        >
          -&gt; Github Repo &lt;-
        </a>
      </p>
    </div>
  )
}

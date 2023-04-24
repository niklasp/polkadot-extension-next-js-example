import { usePolkadotExtensionWithContext } from "@/context/polkadot-extension-context"

export default function Page2() {
    const { accounts, error: extensionError } = usePolkadotExtensionWithContext()

  return (
    <div>
      <h1>Page 2</h1>
      <pre>accounts: { JSON.stringify( accounts, null, 2 ) }</pre>
    </div>
  )
}

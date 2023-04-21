import { usePolkadotExtension } from "@/hooks/use-polkadot-extension"

export default function Home() {

  const { accounts, error: extensionError } = usePolkadotExtension()

  return (
    <>
      accounts: { JSON.stringify( accounts ) }
      error: { extensionError && <p>{ extensionError.message }</p> }
    </>
  )
}

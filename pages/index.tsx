import { usePolkadotExtension } from "@/hooks/use-polkadot-extension"

export default function Home() {

  const { accounts, error: extensionError } = usePolkadotExtension()

  return (
    <>
      { JSON.stringify( accounts ) }
      { extensionError && <p>{ extensionError.message }</p> }
    </>
  )
}

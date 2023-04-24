import { PolkadotExtensionContextProvider } from '@/context/polkadot-extension-context'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PolkadotExtensionContextProvider>
      <Component {...pageProps} />
    </PolkadotExtensionContextProvider>
  )
}

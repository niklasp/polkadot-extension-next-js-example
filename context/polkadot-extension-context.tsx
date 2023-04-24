// component that returns a context provider for the polkadot extension
// this component is used in _app.tsx
// 
// Path: context/polkadot-extension-context.tsx
import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { InjectedAccountWithMeta } from "@polkadot/extension-inject/types"
import { usePolkadotExtension } from "@/hooks/use-polkadot-extension"

interface PolkadotExtensionContextProps {
  accounts: InjectedAccountWithMeta[] | null
  error: Error | null
}

const PolkadotExtensionContext = createContext<PolkadotExtensionContextProps>({
  accounts: [],
  error: null,
})

export const usePolkadotExtensionWithContext = () => useContext( PolkadotExtensionContext )

export const PolkadotExtensionContextProvider = ( { children }: { children: ReactNode } ) => {
  const { accounts, error } = usePolkadotExtension()

  return (
    <PolkadotExtensionContext.Provider value={ { accounts, error } }>
      { children }
    </PolkadotExtensionContext.Provider>
  )
}

// component that returns a context provider for the polkadot extension
// this component is used in _app.tsx
// 
// Path: context/polkadot-extension-context.tsx
// import { createContext, ReactNode, useContext, useEffect, useState } from "react"
// import { web3Accounts, web3Enable } from "@polkadot/extension-dapp"
// import { InjectedAccountWithMeta } from "@polkadot/extension-inject/types"
// 
// interface PolkadotExtensionContextProps {
//   accounts: InjectedAccountWithMeta[]
//   error: Error | null
// }
// 
// const PolkadotExtensionContext = createContext<PolkadotExtensionContextProps>({
//   accounts: [],
//
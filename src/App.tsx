import Layout from './layouts'

import {
  createWeb3Modal,
  defaultWagmiConfig,
  useWeb3ModalTheme,
} from '@web3modal/wagmi/react'
import { useEffect } from 'react'
import { WagmiConfig } from 'wagmi'
import { useAppSelector } from './store'
import appConfig from './configs/app.config'

// const chains = [polygonMumbai]

// const projectId = import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID || ''

// const metadata = {
//   name: 'Alienz Studio',
//   description: 'Alienz Studio Description',
//   url: 'https://web3modal.com',
//   icons: ['https://avatars.githubusercontent.com/u/37784886'],
// }

// const wagmiConfig = defaultWagmiConfig({
//   chains,
//   projectId,
//   metadata,
// })

// createWeb3Modal({
//   wagmiConfig,
//   projectId,
//   chains,
//   themeMode: 'light',
// })

const chains = [appConfig.chain]

const projectId = import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID || ''

const metadata = {
  name: 'Alienz Studio',
  description: 'Alienz Staking App',
  url: 'https://alienz-web.vercel.app',
  icons: [import.meta.env.VITE_DOMAIN + '/img/logo/logo.png'],
}

const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
})

createWeb3Modal({
  wagmiConfig,
  projectId,
  chains,
  themeMode: 'light',
})

function App() {
  const { mode } = useAppSelector((state) => state.theme)
  const { setThemeMode } = useWeb3ModalTheme()

  useEffect(() => {
    setThemeMode(mode)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode])

  return (
    <WagmiConfig config={wagmiConfig}>
      <Layout />
    </WagmiConfig>
  )
}

export default App

import { polygonMumbai } from 'viem/chains'
import type { Chain } from 'wagmi'

export type AppConfig = {
  apiPrefix: string
  authenticatedEntryPath: string
  unAuthenticatedEntryPath: string
  chain: Chain
}

const appConfig: AppConfig = {
  apiPrefix: import.meta.env.VITE_PUBLIC_API,
  authenticatedEntryPath: '/',
  unAuthenticatedEntryPath: '/sign-in',
  chain: polygonMumbai,
}

export default appConfig

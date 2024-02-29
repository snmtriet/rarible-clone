export type AppConfig = {
  apiPrefix: string
  authenticatedEntryPath: string
  unAuthenticatedEntryPath: string
}

const appConfig: AppConfig = {
  apiPrefix: import.meta.env.VITE_PUBLIC_API,
  authenticatedEntryPath: '/',
  unAuthenticatedEntryPath: '/sign-in',
}

export default appConfig

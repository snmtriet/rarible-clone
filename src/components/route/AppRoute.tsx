import type { ComponentType } from 'react'

export type AppRouteProps<T> = {
  component: ComponentType<T>
}

const AppRoute = <T extends Record<string, unknown>>({
  component: Component,
  ...props
}: AppRouteProps<T>) => {
  return <Component {...(props as T)} />
}

export default AppRoute

import type { LazyExoticComponent, ReactNode } from 'react'

export interface Meta {
  header?: string | ReactNode
  headerContainer?: boolean
  extraHeader?: LazyExoticComponent<() => JSX.Element>
  footer?: boolean
}

export type Route = {
  key: string
  path: string
  component: LazyExoticComponent<<T extends Meta>(props: T) => JSX.Element>
  authority: string[]
}

export type Routes = Route[]

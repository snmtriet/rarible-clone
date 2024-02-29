/* eslint-disable @typescript-eslint/no-namespace */
import { ReactNode, CSSProperties } from 'react'

export declare namespace TypeAttributes {
  type Size = 'lg' | 'md' | 'sm' | 'xs'
  type Shape = 'round' | 'circle' | 'none'
  type Status = 'success' | 'warning' | 'danger' | 'info'
  type FormLayout = 'horizontal' | 'vertical' | 'inline'
  type ControlSize = 'lg' | 'md' | 'sm'
  type MenuVariant = 'light' | 'dark' | 'themed' | 'transparent'
  type Direction = 'ltr' | 'rtl'
}

export interface CommonProps {
  className?: string
  children?: ReactNode
  style?: CSSProperties
}

export type TableQueries = {
  total?: number
  pageIndex?: number
  pageSize?: number
  query?: string
  sort?: {
    order: 'asc' | 'desc' | ''
    key: string | number
  }
}

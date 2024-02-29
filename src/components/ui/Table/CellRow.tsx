import { cn } from '@/utils'
import { ReactNode } from 'react'

export type CellRowProps = {
  order?: number
  className?: string
  children: ReactNode
  minWidth?: number | string
  maxWidth?: number | string
  align?: 'center' | 'start' | 'end' | 'stretch'
}

const CellRow = (props: CellRowProps) => {
  const {
    order,
    className,
    align = 'stretch',
    minWidth,
    maxWidth,
    children,
  } = props
  return (
    <div
      role="cell"
      className={cn(
        'flex-shrink flex-grow w-full h-full flex flex-col justify-center',
        align === 'end' && 'items-end',
        align === 'center' && 'items-center',
        align === 'start' && 'items-start',
        align === 'stretch' && 'items-stretch',
        className,
      )}
      style={{ order, minWidth, maxWidth: maxWidth ?? '100%' }}
    >
      {children}
    </div>
  )
}

export default CellRow

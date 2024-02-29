import { cn } from '@/utils'
import { ReactNode } from 'react'

export type CellColumnProps = {
  className?: string
  children: ReactNode
  minWidth?: number | string
  maxWidth?: number | string
  order?: number
  align?: 'center' | 'start' | 'end' | 'stretch'
}

const CellColumn = (props: CellColumnProps) => {
  const {
    className,
    align = 'stretch',
    minWidth,
    maxWidth,
    order,
    children,
  } = props
  return (
    <div
      role="columnheader"
      className={cn(
        'flex flex-col flex-shrink flex-grow w-full text-xs font-medium uppercase basis-auto',
        align === 'end' && 'items-end',
        align === 'center' && 'items-center',
        align === 'start' && 'items-start',
        align === 'stretch' && 'items-stretch',
        className,
      )}
      style={{ order, minWidth, maxWidth: maxWidth ?? '100%' }}
    >
      <div className="px-1 py-2 -ml-1 w-max whitespace-nowrap flex items-center min-h-6 tracking-[0.5px]">
        {children}
      </div>
    </div>
  )
}

export default CellColumn

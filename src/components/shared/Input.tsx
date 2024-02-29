import { cn } from '@/utils'
import { InputHTMLAttributes, ReactNode } from 'react'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  className?: string
  right?: ReactNode
  left?: ReactNode
  rightClassName?: string
  leftClassName?: string
}

const Input = (props: Props) => {
  const { className, left, right, leftClassName, rightClassName, ...rest } =
    props
  return (
    <div className={cn('flex-shrink basis-auto min-w-20', className)}>
      <div className="flex flex-col">
        <div className="input-wrapper">
          {left && <div className={cn('mr-[6px]', leftClassName)}>{left}</div>}
          <div className="flex flex-shrink flex-grow max-w-full basis-auto items-stretch">
            <input
              {...rest}
              className="bg-transparent text-dark/80 dark:text-light/80 w-full p-0 overflow-hidden outline-none"
            />
          </div>
          {right && (
            <div className={cn('flex items-center', rightClassName)}>
              {right}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Input

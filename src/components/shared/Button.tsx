import { cn } from '@/utils'
import { ReactNode } from 'react'

type Props = {
  className?: string
  children: ReactNode
  type?: 'primary' | 'secondary' | 'ghost' | 'reverse'
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button = (props: Props) => {
  const { children, className, type = 'primary', onClick } = props

  return (
    <button
      className={cn(
        'button',
        type === 'ghost' && '!bg-transparent !text-dark dark:!text-light !p-0',
        type === 'secondary' &&
          '!bg-dark/[0.04] dark:!bg-light/[0.04] !rounded-full !text-dark dark:!text-light !p-0 hover:!bg-dark/10 dark:hover:!bg-light/10',
        type === 'reverse' &&
          '!bg-light dark:!bg-dark !text-dark dark:!text-light',
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button

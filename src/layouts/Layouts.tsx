import { Loading } from '@/components/shared'
import { cn } from '@/utils'
import { Suspense, lazy, useMemo } from 'react'
import { LAYOUT_TYPE_DEFAULT } from '../constants/theme.constant'
import { useAppSelector } from '@/store'

const layouts = {
  default: lazy(() => import('./MainLayout')),
}

const Layout = () => {
  const { mode } = useAppSelector((state) => state.theme)
  const AppLayout = useMemo(() => {
    return layouts[LAYOUT_TYPE_DEFAULT]
  }, [])

  return (
    <Suspense
      fallback={
        <div
          className={cn(
            'loading-center',
            mode === 'dark' ? 'bg-dark' : 'bg-light',
          )}
        >
          <Loading
            loading={true}
            spinnerClass={cn(mode === 'dark' ? '!text-light' : '!text-dark')}
          />
        </div>
      }
    >
      <AppLayout />
    </Suspense>
  )
}

export default Layout

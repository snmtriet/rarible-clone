import { Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { ADMIN } from '@/constants/roles.constant'
import { protectedRoutes, publicRoutes } from '@/configs/routes.config'
import {
  AppRoute,
  AuthorityGuard,
  ProtectedRoute,
  PublicRoute,
} from '@/components/route'
import { Loading } from '@/components/shared'
import { useAppSelector } from '@/store'
import { cn } from '@/utils'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute />}>
        {protectedRoutes.map((route, index) => {
          return (
            <Route
              key={route.key + index}
              path={route.path}
              element={
                <AuthorityGuard
                  userAuthority={[ADMIN]}
                  authority={route.authority}
                >
                  <AppRoute component={route.component} />
                </AuthorityGuard>
              }
            />
          )
        })}
        <Route path="*" element={<Navigate replace to="/" />} />
      </Route>
      <Route path="/" element={<PublicRoute />}>
        {publicRoutes.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              element={<AppRoute component={route.component} />}
            />
          )
        })}
      </Route>
    </Routes>
  )
}

const Views = () => {
  const { mode } = useAppSelector((state) => state.theme)

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
      <AllRoutes />
    </Suspense>
  )
}

export default Views

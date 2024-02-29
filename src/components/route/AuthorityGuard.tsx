import { useAuthority } from '@/hooks'
import { PropsWithChildren } from 'react'
import { Navigate } from 'react-router-dom'

type AuthorityGuardProps = PropsWithChildren<{
  userAuthority?: string[]
  authority?: string[]
}>

const AuthorityGuard = (props: AuthorityGuardProps) => {
  const { userAuthority = [], authority = [], children } = props

  const roleMatched = useAuthority(userAuthority, authority)

  return <>{roleMatched ? children : <Navigate to="/sign-in" />}</>
}

export default AuthorityGuard

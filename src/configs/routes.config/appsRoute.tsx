import { lazy } from 'react'
import { Routes } from '../../@types/routes'

const appsRoute: Routes = [
  {
    key: 'app.home',
    path: '/',
    component: lazy(() => import('@/views/Home')),
    authority: [],
  },
]

export default appsRoute

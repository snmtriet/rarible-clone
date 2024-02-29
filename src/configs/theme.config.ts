import { THEME_ENUM } from '@/constants/theme.constant'
import { Mode } from '@/@types/theme'

export type ThemeConfig = {
  mode: Mode
}

export const themeConfig: ThemeConfig = {
  mode: THEME_ENUM.MODE_LIGHT,
}

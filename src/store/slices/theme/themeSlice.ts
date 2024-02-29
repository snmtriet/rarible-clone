import type { Mode } from '@/@types/theme'
import { themeConfig } from '@/configs/theme.config'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type ThemeState = {
  mode: Mode
}

const initialState: ThemeState = {
  mode: themeConfig.mode,
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setMode: (state, action: PayloadAction<Mode>) => {
      state.mode = action.payload
    },
  },
})

export const { setMode } = themeSlice.actions

export default themeSlice.reducer

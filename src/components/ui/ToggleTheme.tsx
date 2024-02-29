import { Mode } from '@/@types/theme'
import { IconLight, IconMoon } from '@/assets/svg'
import { setMode, useAppDispatch, useAppSelector } from '@/store'
import { useEffect } from 'react'

const ToggleTheme = () => {
  const mode = useAppSelector((state) => state.theme.mode)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [mode])

  const handleChangeMode = (mode: Mode) => {
    dispatch(setMode(mode))
  }

  return (
    <>
      {mode === 'light' ? (
        <button onClick={() => handleChangeMode('dark')}>
          <IconMoon className="w-9 h-9" />
        </button>
      ) : (
        <button onClick={() => handleChangeMode('light')}>
          <IconLight className="w-9 h-9" />
        </button>
      )}
    </>
  )
}

export default ToggleTheme

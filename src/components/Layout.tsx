import React, { useEffect, useState } from 'react'
import { GeistProvider, CssBaseline } from '@geist-ui/react'

import { JssProvider } from 'react-jss'

export const Layout = ({ children }) => {
  const [themeType, setThemeType] = useState<'light' | 'dark'>('dark')
  const toggleDarkMode = (): void =>
    setThemeType(themeType === 'dark' ? 'light' : 'dark')

  useEffect(() => {
    const defaultTheme =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
    console.log('defaultTheme: ', defaultTheme)
  }, [])

  return (
    <JssProvider id={{ minify: true }}>
      <GeistProvider themeType={'dark'}>
        <CssBaseline />
        {children}
      </GeistProvider>
    </JssProvider>
  )
}

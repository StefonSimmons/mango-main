import React from 'react'
import { ThemeProvider } from 'styled-components'


const ColorThemeProvider = ({ children }) => (
  <ThemeProvider
    theme={{
      blue: `#102467`,
      orange: `rgb(233,115,40)`,
      orangeTrans: `rgba(233,115,40,.85)`,
      offWhite: `rgb(235,235,235)`
    }}>
    {children}
  </ThemeProvider>
)


export default ColorThemeProvider
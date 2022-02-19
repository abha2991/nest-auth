import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { FC } from 'react'

const theme = createTheme()

const App: FC = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <div>Hello World!</div>
  </ThemeProvider>
)

export default App

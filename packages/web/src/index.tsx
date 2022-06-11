import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material'
import { SnackbarProvider } from 'notistack'
import React from 'react'
import ReactDOM from 'react-dom'
import { QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import App from './App'
import queryClient from './utils/queryClient'
import theme from './utils/theme'
import './index.css';

const globalStyles = (
  <GlobalStyles
    styles={({ palette }) => ({
      body: {
        backgroundColor: palette.mode === 'dark' ? palette.background.default : palette.grey['50']
      },
      '#root': {
       position: 'absolute',
        width: '100%',
        height: '100%',
      //overflow: 'auto',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      }
    })}
  />
)

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <SnackbarProvider
            maxSnack={1}
            preventDuplicate
            dense
            autoHideDuration={3000}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
          >
            <CssBaseline />
            {globalStyles}
            <QueryClientProvider client={queryClient}>
              <App />
            </QueryClientProvider>
          </SnackbarProvider>
        </ThemeProvider>
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>,
  document.querySelector('#root')
)

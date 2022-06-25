// import { render } from 'react-dom'
import { ThemeProvider } from 'styled-components'

import Screen from './screen'

import { GlobalStyle } from './styles/GlobalStyle'
import { defaultTheme } from './styles/theme'

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Screen />
      </ThemeProvider>
    </>
  )
}

// render(<App />, document.getElementById('root'))

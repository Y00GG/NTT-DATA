import { CssBaseline } from "@mui/material"
import { ThemeProvider } from "styled-components"
import { theme } from "./theme/theme"

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
      </ThemeProvider>
    </>
  )
}

export default App
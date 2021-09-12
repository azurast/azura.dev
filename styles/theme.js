import { extendTheme, theme as chakraTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    accent: '#ee438a',
    secondary: '#4361ee',
    colorSecondary : {
      light: 'gray.700',
      dark: 'gray.400'
    }
  }
})

export default theme
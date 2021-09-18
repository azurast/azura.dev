import { extendTheme, theme as chakraTheme } from "@chakra-ui/react"

const theme = extendTheme({
  fonts: {
    heading: 'Poppins, Inter, -apple-system, sans-serif',
    // body: 'IBM Plex Sans, Inter, -apple-system, sans-serif',
  },
  colors: {
    accent: {
      light: '#4362ee',
      dark: '#4e6df5'
    },
    secondary: {
      light: '#ee2074',
      dark: '#f1478e'
    },
    dark: '#1A202C',
    colorSecondary : {
      light: 'gray.700',
      dark: 'gray.400'
    }
  }
})

export default theme
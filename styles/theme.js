import { extendTheme, theme as chakraTheme } from "@chakra-ui/react"

const theme = extendTheme({
  fonts: {
    heading: 'Poppins, Inter, -apple-system, sans-serif',
    // body: 'IBM Plex Sans, Inter, -apple-system, sans-serif',
  },
  colors: {
    brandPrimary: {
      50: '#e9ebfe',
      100: '#c7ccfb',
      200: '#9fabf9',
      300: '#7389f7',
      400: '#4e6df5',
      500: '#1a51f1',
      600: '#1348e5',
      700: '#003cd8',
      800: '#0031cd',
      900: '#001ab5',
    },
    brandSecondary: {
      100: '#f9b7ce',
      200: '#f586ad',
      300: '#f2528c',
      400: '#ee2072',
      500: '#eb0059',
      600: '#da0057',
      700: '#c50053',
      800: '#b00050',
      900: '#8b004a',
    },
    brandTertiary: {
      100: '#fbeab9',
      200: '#f9dc8e',
      300: '#f7d064',
      400: '#f5c44b',
      500: '#f4bb3a',
      600: '#f2ae36',
      700: '#f09d32',
      800: '#ef8d2e',
      900: '#ed7126',
    },
    accent: {
      light: '#4362ee',
      dark: '#5471fa'
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
'use client'
import { Inter, Spectral } from 'next/font/google'
import { createTheme } from '@mui/material/styles'

const spectral = Spectral({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
})
const inter = Inter({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
})

const theme = createTheme({
  palette: {
    primary: {
      main: '#171717',
    },
    text: {
      primary: '#171717',
      disabled: '#7C7C7C',
    },
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: spectral.style.fontFamily,
    h2: {
      fontWeight: 800,
      fontSize: '3.75rem',
      color: '#FFFFFF',
    },
    h3: {
      fontWeight: 800,
      fontSize: '3rem',
      color: '#FFFFFF',
    },
    h4: {
      fontWeight: 600,
      fontSize: '2.25rem',
      color: '#171717',
    },
    h5: {
      fontWeight: 400,
      fontSize: '1.5rem',
      color: '#FFFFFF',
      lineHeight: '2.75rem',
    },
    h6: {
      fontFamily: inter.style.fontFamily,
      fontWeight: 400,
      fontSize: '1.125rem',
      color: '#7C7C7C',
    },
  },
})

export default theme

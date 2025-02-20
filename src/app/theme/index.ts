// src/theme/index.ts

import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#17261E', // Ej. el verde oscuro
    },
    secondary: {
      main: '#548C45', // Otro verde
    },
    success: {
      main: '#48733C',
    },
    warning: {
      main: '#7ABF5A',
    },
    info: {
      main: '#EDF252', // El amarillo
    },
    
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: 'var(--background)',
          color: 'var(--foreground)',
        },
      },
    },
  },
})

export default theme

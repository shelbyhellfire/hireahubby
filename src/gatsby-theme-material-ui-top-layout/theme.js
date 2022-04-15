import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: [
        'Avenir',
        'sans-serif'
      ].join(','),
    },
    palette: {
        primary: {
            main: '#406484',
            light: '#5f92b2',
            lighter: '#83b0c6',
            lightest: '#c2dce7',
            dark: '#314863',
            contrastText: '#fff',
        },
        secondary: {
          main: '#634C31',
          light: '#846d54',
          lighter: '#b9a998',
          lightest: '#f0eae2',
          dark: '#392516',
          contrastText: '#fff',
        },
      },
  });

  theme.typography.h1 = {
    color: theme.palette.secondary.main,
    fontSize: '2rem',
    '@media (min-width:600px)': {
      fontSize: '3rem',
    },
    fontFamily: ['Krungthep'],
  };
  theme.typography.h2 = {
    color: theme.palette.secondary.main,
    fontSize: '1.75rem',
    '@media (min-width:600px)': {
      fontSize: '2.75rem',
    },
    fontFamily: ['Krungthep'],
  };
  theme.typography.h3 = {
    color: theme.palette.secondary.main,
    fontSize: '1.5rem',
    '@media (min-width:600px)': {
      fontSize: '2.5rem',
    },
    fontFamily: ['Krungthep'],
  };
  theme.typography.h4 = {
    color: theme.palette.primary.main,
    fontSize: '1.25rem',
    marginBottom: '1rem',
    '@media (min-width:600px)': {
      fontSize: '2rem',
    },
    fontFamily: ['Krungthep'],
  };
  theme.typography.p = {
    display: 'block',
   marginBottom: '1rem'
  };
  // theme.link = {
  //   textDecoration: 'none',
  //   fontSize: '3rem',
  //   fontFamily: ['Krungthep'],
  //   '@media (min-width:600px)': {
  //     fontSize: '4rem',
  //   },
  // };

export default theme;
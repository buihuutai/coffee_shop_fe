'use client';

import { ThemeProvider, useTheme } from 'next-themes';

declare module '@mui/material/styles' {
  interface Palette {
    ['warning-mild']: Palette['warning'];
    ['warning-severe']: Palette['warning'];
  }

  interface PaletteOptions {
    ['warning-mild']?: PaletteOptions['warning'];
    ['warning-severe']?: PaletteOptions['warning'];
  }
}

import {
  createTheme,
  ThemeProvider as ThemeProviderMui,
} from '@mui/material/styles';
// import { getColorRoot } from '@/utils/common';
import KColors from '@/constants/colors';
import { getColorRoot } from '@/utils/common';

declare module '@mui/material/styles' {
  interface Palette {
    ['warning-mild']: Palette['warning'];
    ['warning-moderate']: Palette['warning'];
    ['warning-severe']: Palette['warning'];

    ['info-mild']: Palette['info'];
    ['info-moderate']: Palette['info'];
    ['info-severe']: Palette['info'];

    ['success-mild']: Palette['success'];
    ['success-moderate']: Palette['success'];
    ['success-severe']: Palette['success'];

    ['danger-mild']: Palette['success'];
    ['danger-moderate']: Palette['success'];
    ['danger-severe']: Palette['success'];
  }

  interface PaletteOptions {
    ['warning-mild']?: PaletteOptions['warning'];
    ['warning-moderate']?: PaletteOptions['warning'];
    ['warning-severe']?: PaletteOptions['warning'];

    ['info-mild']?: PaletteOptions['info'];
    ['info-moderate']?: PaletteOptions['info'];
    ['info-severe']?: PaletteOptions['info'];

    ['success-mild']?: PaletteOptions['success'];
    ['success-moderate']?: PaletteOptions['success'];
    ['success-severe']?: PaletteOptions['success'];

    ['grey-mild']?: PaletteOptions['grey'];
    ['grey-moderate']?: PaletteOptions['grey'];
    ['grey-severe']?: PaletteOptions['grey'];
  }
}

export default function Theme({ children }: { children: React.ReactNode }) {
  const theme = createTheme({
    components: {
      MuiTextField: {
        defaultProps: {
          variant: 'outlined',
        },
        styleOverrides: {
          root: {
            width: '100%', // Đặt chiều rộng của TextField là 100%
            ':hover .MuiOutlinedInput-notchedOutline': {
              border: '1px solid #d0190b',
            },
            '& .MuiInputBase-root': {
              borderRadius: '8px', // Bo tròn góc của border
              borderColor: '#007b45', // Màu của border
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#007b45', // Màu border khi chưa focus
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#00ad5e', // Màu border khi hover
            },
            '& .MuiInputLabel-root': {
              color: '#007b45', // Màu label
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: '#00ad5e', // Màu label khi focus
            },
          },
        },
      },
    },
    palette: {
      mode: 'dark',
      primary: {
        main: '#00ad5e',
      },
      secondary: {
        main: '#c91a25',
      },
      //warning
      warning: {
        main: '#ff9800', //moderate
      },
      'warning-mild': {
        main: getColorRoot('--warning-1'),
      },
      'warning-moderate': {
        main: '#ff9800',
      },
      'warning-severe': {
        main: '#c27400',
      },
      //info
      info: {
        main: '#3995c5', //moderate
      },
      'info-mild': {
        main: '#88bfdd',
      },
      'info-moderate': {
        main: '#3995c5',
      },
      'info-severe': {
        main: '#2c7196',
      },
      //success
      success: {
        main: '#41fd9a', //moderate
      },
      'success-mild': {
        main: '#74fdbc',
      },
      'success-moderate': {
        main: '#41fd9a',
      },
      'success-severe': {
        main: '#2de27f',
      },
    },
  });

  return (
    <ThemeProvider
      themes={['light', 'dark']}
      defaultTheme="light"
      attribute="class"
    >
      <ThemeProviderMui theme={theme}>{children}</ThemeProviderMui>
    </ThemeProvider>
  );
}

import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

const CustomPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#FFECE9',
      100: '#FFD1C9',
      200: '#FFB3A6',
      300: '#FF9483',
      400: '#FF7661',
      500: '#F04A2D', // Primary base color (F-40)
      600: '#E73D20',
      700: '#D93013',
      800: '#CB2306',
      900: '#BD1600',
      950: '#AF0900'
    },
    secondary: {
      50: '#F5F5F7',
      100: '#EEEFF2',
      200: '#E1E2E8',
      300: '#D4D5DD',
      400: '#C7C8D2',
      500: '#4A4C5C', // Secondary base color (S-40)
      600: '#3D3F4F',
      700: '#303242',
      800: '#232535',
      900: '#161828',
      950: '#090B1B'
    },
    tertiary: {
      50: '#F2F2F5',
      100: '#E8E8EE',
      200: '#D5D5DD',
      300: '#C2C2CC',
      400: '#AFAFBB',
      500: '#3A3C47', // Tertiary base color (T-40)
      600: '#2F313A',
      700: '#24262D',
      800: '#191B20',
      900: '#0E1013',
      950: '#030506'
    },
    colorScheme: {
      light: {
        primary: {
          color: '#F04A2D',
          contrastColor: '#ffffff',
          hoverColor: '#E73D20',
          activeColor: '#D93013'
        },
        secondary: {
          color: '#4A4C5C',
          contrastColor: '#ffffff',
          hoverColor: '#3D3F4F',
          activeColor: '#303242'
        },
      },
      dark: {
        primary: {
          color: '#FF7661',
          contrastColor: '#000000',
          hoverColor: '#FF9483',
          activeColor: '#FFB3A6'
        },
        secondary: {
          color: '#C7C8D2',
          contrastColor: '#000000',
          hoverColor: '#D4D5DD',
          activeColor: '#E1E2E8'
        },
      }
    }
  }
});

export default {
  preset: CustomPreset,
  options: {
    darkModeSelector: '.app-dark'
  },
  cssLayer: {
    name: 'primevue',
    order: 'theme, base, primevue',
  },
};

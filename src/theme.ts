import { createTheme } from "@mantine/core";

export const theme = createTheme({
  primaryColor: 'red',
  colors: {
    red: ['#f12434', '#f12434', '#f12434', '#f12434', '#f12434', '#f12434', '#f12434', '#f12434', '#f12434', '#f12434'],
    lightBlue: ['#89CFF0', '#7ABCF0', '#6AACF0', '#5B9BF0', '#4C8BF0', '#3C7AF0', '#2D6AF0', '#1E59F0', '#0F49F0', '#0048F0'],
    white: ['#FFFFFF', '#F0F0F0', '#E0E0E0', '#D1D1D1', '#C1C1C1', '#B2B2B2', '#A2A2A2', '#939393', '#838383', '#747474'],
    orange: ['#FFA500', '#F59400', '#EB8400', '#E17400', '#D76300', '#CD5300', '#C44300', '#BA3300', '#B12300', '#A71300'],
    lightYellow: ['#FFD700', '#E6C100', '#CCB500', '#B3A900', '#999D00', '#808100', '#666500', '#4D5900', '#333D00', '#1A3100'],
  },
  breakpoints: {
    xs: '30em',
    sm: '48em',
    md: '64em',
    lg: '74em',
    xl: '90em',
  },
});
import theme from 'styled-theming';

export const backgroundColor: theme.ThemeSet = theme('mode', {
  light: '#FFFFFF',
  dark: '#2F4F4F'
});

export const textColor: theme.ThemeSet = theme('mode', {
  light: '#191919',
  dark: '#fafafa'
});

export const buttonBackgroundColor = theme('mode', {
  light: '#222',
  dark: '#eee'
});

export const buttonTextColor = theme('mode', {
  light: '#eee',
  dark: '#222'
});
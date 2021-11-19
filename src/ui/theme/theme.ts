export const theme = {
  color: {
    black: '#000000',
    white: '#FFFFFF',
    lightGrey: '#F6F6F6',
    grey: '#EDEDED',
    darkGrey: '#8B8B8B',
    tuna: '#333840',
    blue: '#000EE6',
    lightBlue: '#DCDDF3',
    red: '#FF3D3D',
    lightGreen: '#06D393',
  },
  breakpoint: {
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1200px)',
    xxl: '(min-width: 1500px)',
  },
  font: {
    size: {
      xs: '.75rem', //12px
      sm: '.8125rem', //13px
      md: '.875rem', //14px
      base: '1rem', //16px
      lg: '1.125rem', //18px
      xl: '1.25rem', //20px
      '2xl': '1.375rem', //22px
      '3xl': '1.5rem', //24px
      '4xl': '2rem', //32px
    },
    weight: {
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
    },
  },
  lineHeight: {
    sm: '.75rem',
    md: '.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '2rem',
    '4xl': '2.5rem',
  },
  shadow: {
    sm: '0 2px 8px 0 rgba(17, 18, 20, 0.04)',
    lg: '0 8px 32px 0 rgba(17, 18, 20, 0.1585)',
  },
};

export type Theme = typeof theme;

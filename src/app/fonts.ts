import localFont from 'next/font/local';

export const nexa = localFont({
  src: [
    {
      path: '../../public/fonts/Nexa-Trial-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Nexa-Trial-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-nexa',
  display: 'swap',
});
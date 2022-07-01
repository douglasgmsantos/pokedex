import { AppProps } from 'next/app'

import React from 'react';
import GlobalStyle from '../../src/styles/global'


import AppProvider from '../contexts';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </AppProvider>
    </>
  )
}
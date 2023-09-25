import type { AppProps } from 'next/app'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from '../styles/globalstyles'
import "../styles/global.css";
import { theme } from '../styles/theme';
import { Header } from '../src/components/Header';
import Footer from '../src/components/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <GlobalStyle />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  )
}

import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import FrontendLayout from '../components/Frontend/Common/layout'
export default function App({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />
  return <>
  <FrontendLayout >
  <Component {...pageProps} />
  </FrontendLayout>
  </>
}

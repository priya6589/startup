import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import FrontendLayout from '../components/Frontend/layouts/Layout'
export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
      <FrontendLayout >
        <Component {...pageProps} />
      </FrontendLayout>
    </>
  )
}

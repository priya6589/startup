import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import FrontendLayout from '../components/Frontend/layouts/Layout'
import AdminLayout from '../components/Admin/Layouts/Layouts'
import { getCurrentUserData } from '@/lib/session';

export default function App({ Component, pageProps }: AppProps) {
  const current_user = getCurrentUserData();
  let Layout = FrontendLayout; // default layout is FrontendLayout
  if (current_user.role === 'admin') {
    Layout = AdminLayout;
    // Layout =FrontendLayout;
  }else{
    Layout = FrontendLayout;
  }
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

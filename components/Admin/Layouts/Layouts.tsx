import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
const Layout = ({ children }:any) => {
  return (
    <>
      <Header />
      <Sidebar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

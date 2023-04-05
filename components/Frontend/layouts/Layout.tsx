import Header from "./HeaderFrontend";
import Footer from "./Footer";
import CopyRight from "./Copyright";
const Layout = ({ children }:any) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
      <CopyRight />
    </div>
  );
};

export default Layout;

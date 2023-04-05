import Header from "./header";
import Footer from "./footer";
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

import Header from "../Common/header";
import Footer from "../Common/footer";
// import Sidebar from '../Common/sidebar';
import CopyRight from "../Common/copyright";
const Layout = ({ children }) => {
  return (
    <div>
      <Header />
        {/* <Sidebar /> */}
        <main>{children}</main>
      <Footer />
      <CopyRight />
    </div>
  );
};

export default Layout;

import Header from "../Common/header";
import Footer from "../Common/footer";
// import Sidebar from '../Common/sidebar';
import CopyRight from "../Common/copyright";
const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container">
        {/* <Sidebar /> */}
        <main>{children}</main>
      </div>
      <Footer />
      <CopyRight />
    </div>
  );
};

export default Layout;

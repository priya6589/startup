import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
const Layout = ({ children }:any) => {
  return (
    <>
      <Header />
      <div className="container">
      <Sidebar/>
      <main>{children}</main>
       </div>
      <Footer />
    
    </>
  );
};

export default Layout;

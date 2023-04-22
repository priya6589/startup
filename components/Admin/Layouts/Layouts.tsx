import Header from "./Header";
import Footer from "./Footer";
const Layout = ({ children }:any) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
      <footer className="footer">2023@<a href={process.env.NEXT_PUBLIC_BASE_URL}>Startup.</a> </footer>
    </>
  );
};

export default Layout;

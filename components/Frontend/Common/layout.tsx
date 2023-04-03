import Header from "../Common/header";
import Footer from "../Common/footer";
// import Sidebar from '../Common/sidebar';
import CopyRight from "../Common/copyright";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Layout = ({ children }) => {
  return (
    <div>
      <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          />
      <Header />
      {/* <Sidebar /> */}
      <main>{children}</main>
      <Footer />
      <CopyRight />
    </div>
  );
};

export default Layout;

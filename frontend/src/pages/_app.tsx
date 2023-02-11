import "@/styles/global";
import { useEffect } from "react";
import type { AppProps } from "next/app";
import Provider from "@/context/index";
import { GlobalStyles, ResetCSS } from "@/styles/global";
import AOS from "aos";
import 'aos/dist/aos.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <Provider>
      <Component {...pageProps} />
      <GlobalStyles />
      <ResetCSS />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark" />
    </Provider>
  );
}

export default MyApp;
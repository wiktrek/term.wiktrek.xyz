import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import Navbar from "./components/navbar";
const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <Navbar />
    </>
  );
};

export default MyApp;

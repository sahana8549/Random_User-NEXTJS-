import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../App.css";
import React from "react";
import { Rootprovider } from "../RootContext/RootContext";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <Rootprovider>
        <Component {...pageProps} />
      </Rootprovider>
    </React.StrictMode>
  );
}

export default MyApp;

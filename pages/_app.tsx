import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Rootprovider } from "../RootContext/RootContext";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
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

import { ChakraProvider } from "@chakra-ui/react";
import Router from "next/router";
import nProgress from "nprogress";
import theme from "../theme";
import { useEffect } from "react";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "redux/store";

nProgress.configure({
  easing: "ease",
  speed: 1600,
  trickleSpeed: 5000,
  showSpinner: true,
}); //nprogress configurations

function MyApp({ Component, pageProps }) {
  const load = () => {
    nProgress.start(); //Start nprogress
  };

  const stop = () => {
    nProgress.done(); // Stop nprogress
  };

  useEffect(() => {
    //Listen to router events
    Router.events.on("routeChangeStart", load);
    Router.events.on("routeChangeComplete", stop);
    Router.events.on("routeChangeError", stop);

    return () => {
      Router.events.off("routeChangeStart", load);
      Router.events.off("routeChangeComplete", stop);
      Router.events.off("routeChangeError", stop);
    };
  }, []);
  return (
    <div>
      <Head>
        <title>Base</title>
      </Head>
      <ChakraProvider theme={theme}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ChakraProvider>
    </div>
  );
}

export default MyApp;

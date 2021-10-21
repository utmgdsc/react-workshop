import "../styles/globals.css";

import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import theme from "../theme";

const TITLE = "Title";
const DESCRIPTION = "Description";
const URL = "http://localhost:3000";

const SiteHead = ({ title }) => (
  <Head>
    <title>{title}</title>
    <meta name="title" content={TITLE} />
    <meta name="description" content={DESCRIPTION} />
    <link rel="icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" href="/logo192.png" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={URL} />
    <meta property="og:title" content={TITLE} />
    <meta property="og:description" content={DESCRIPTION} />
    <meta property="og:image" content="/logo512.png" />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={URL} />
    <meta property="twitter:title" content={TITLE} />
    <meta property="twitter:description" content={DESCRIPTION} />
    <meta property="twitter:image" content="/logo512.png" />
  </Head>
);

const PageWrapper = ({ children, title }) => (
  <div className="container">
    <SiteHead title={title} />
    <NavBar />
    <main className="main">{children}</main>
    <Footer />
  </div>
);

function App({ Component, pageProps }) {
  const { pathname } = useRouter();

  const pathToTitle = {
    "/": TITLE,
  };

  return (
    <ChakraProvider theme={theme}>
      <PageWrapper title={pathToTitle[pathname]}>
        <Component {...pageProps} />
      </PageWrapper>
    </ChakraProvider>
  );
}

export default App;

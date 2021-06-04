import Layout from "../components/Layout";
import Head from 'next/head'
import "../styles/index.scss"
import "../styles/globals.scss";
import 'bootstrap/dist/css/bootstrap.min.css';


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Upward</title>
        <meta name="description" content="Advancing women in tech" />
        <link rel="icon" href="/upward-logo.png" />
        {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" 
          integrity="undefined" crossOrigin="anonymous"></script>        */}
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

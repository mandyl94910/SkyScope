// pages/_app.js
import '../styles/globals.css';
import '../css/index.module.css';

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default App;

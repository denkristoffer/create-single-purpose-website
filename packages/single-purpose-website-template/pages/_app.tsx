import createCache from "@emotion/cache";
import { CacheProvider, css, Global } from "@emotion/react";

const cache = createCache({ key: "next" });

const App = ({ Component, pageProps }) => (
  <CacheProvider value={cache}>
    <Global
      styles={css`
        html,
        body {
          margin: 0;
        }
      `}
    />
    <Component {...pageProps} />
  </CacheProvider>
);

export default App;

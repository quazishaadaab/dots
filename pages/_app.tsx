 import "../styles/globals.css";
 import type { AppProps } from "next/app";
// import store from "../services/redux/store"
import { SessionProvider } from "next-auth/react";
import {Provider} from "react-redux"
import {store} from "../services/redux/store"; 
import {PersistGate} from 'redux-persist/integration/react'
import {persistStore} from "redux-persist"

let persistor = persistStore(store)

// ... (triple dots) mean there are other things in it
function MyApp({ Component, pageProps: { session, ...pageProps } }: any) {
  return (
    // need to wrap apollo for graphql to work( apollo connect our graphql endpoint)
<Provider store={store}>
<PersistGate loading ={null} persistor={persistor}>
      <SessionProvider session={session}>
             {/* makes whole app scrollable and grey */}
        <div className="h-screen overflow-y-scroll ">

          <Component {...pageProps} />
        </div>
      </SessionProvider>
      </PersistGate>
      </Provider>

  );
}

export default MyApp;


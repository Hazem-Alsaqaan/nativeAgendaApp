import { StatusBar } from 'expo-status-bar';
import * as webBrowser from "expo-web-browser"
import AgendaNavigation from './src/components/AgendaNavigation';
import {Provider} from "react-redux"
import store from './src/redux/store/Store';
webBrowser.maybeCompleteAuthSession()

export default function App() {
  return (
    <>
    <Provider store={store}>
      <AgendaNavigation/>
    </Provider>
      <StatusBar style="auto" />
    </>
  );
}



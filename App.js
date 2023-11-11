import { StatusBar } from 'expo-status-bar';
import AgendaNavigation from './src/components/AgendaNavigation';
import { Provider } from "react-redux"
import store from './src/redux/store/Store';


export default function App() {
  return (
    <>
      <Provider store={store}>
        <AgendaNavigation/>
        <StatusBar style="auto" />
      </Provider>
    </>
  );
}


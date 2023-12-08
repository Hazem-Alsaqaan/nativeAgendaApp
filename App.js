import { StatusBar } from "expo-status-bar";
import AgendaNavigation from "./src/components/AgendaNavigation";
import { Provider } from "react-redux";
import store from "./src/redux/store/Store";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <AgendaNavigation />
        <StatusBar style="auto" />
      </Provider>
    </>
  );
}
// ---------------------------------------------admob----------------------------------------------
// https://www.section.io/engineering-education/getting-started-using-admob-with-react-native-expo/
// https://github.com/expo/expo-ads-admob
//https://github.com/invertase/react-native-google-mobile-ads

// ca-app-pub-9498389929500961~6499207586
// ca-app-pub-9498389929500961/2190041880

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
// 35:C8:8B:2D:6C:99:E6:A2:3B:39:72:1C:27:D3:6C:79:A4:3C:A9:95


// B9:4E:2C:28:1B:33:9A:43:33:BD:8E:3D:88:EC:05:36:18:7C:9A:69
import { StatusBar } from 'expo-status-bar';
import * as webBrowser from "expo-web-browser"
import AgendaNavigation from './src/components/AgendaNavigation';






webBrowser.maybeCompleteAuthSession()

export default function App() {


  return (
    <>
      <AgendaNavigation/>
      <StatusBar style="auto" />
    </>
  );
}


// Configuration: Build Credentials uoPAhG5noq (Default)
// Keystore
// Type                JKS
// Key Alias           7a307becaf7c39bb609e64c244cd7151
// MD5 Fingerprint     F2:11:CE:23:A3:8D:08:1C:2D:2D:F7:5D:CC:9C:00:C1
// SHA1 Fingerprint    07:0B:2D:F5:72:16:AC:69:46:23:81:44:25:79:E7:59:FB:77:EE:47
// SHA256 Fingerprint  AA:13:08:83:AA:A4:93:2E:5F:1E:EC:2C:B9:DE:70:8A:18:57:08:F1:0F:E8:23:CE:1F:3A:10:1A:D8:5F:94:A9
// Updated             50 seconds ago
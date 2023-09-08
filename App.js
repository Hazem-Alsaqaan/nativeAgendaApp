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



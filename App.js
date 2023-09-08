import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import * as Google from "expo-auth-session/providers/google"
import * as webBrowser from "expo-web-browser"

webBrowser.maybeCompleteAuthSession()


export default function App() {

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: "425453760365-q1cquoo162r0b19l5msus45i5pe0l19f.apps.googleusercontent.com",
    webClientId: "425453760365-q1cquoo162r0b19l5msus45i5pe0l19f.apps.googleusercontent.com",
    androidClientId: "425453760365-7n6d57e7aiq7p7tj2b8j6jdffapcdd56.apps.googleusercontent.com"
  })


  const handleLogin = ()=>{
    promptAsync()
  }
  return (
    <View style={styles.container}>
      <Text style={{color: "#01ECA5", fontSize: 40, padding: 15}}>Hello & Welcome On My Application !</Text>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{`<> Zimmwa </>`}</Text>
        <Image
          source={{uri: "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1694094193/judicial_agenda/user-interface_2920328_rgkmky.png"}}
          style={{width: 220, height: 350}}
        />
      </View>
      <TouchableOpacity 
      onPress={()=>handleLogin()}
      style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    backgroundColor: "#f1f5f9",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 15,
    borderRadius: 8,
  },
  titleText:{
    color: "#0ea4e8",
    fontSize: 22,
    fontWeight: "bold",
  },
  buttonContainer:{
    backgroundColor: "#01ECA5",
    padding: 15,
    borderRadius: 12,
    margin: 10,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold"
  }
});

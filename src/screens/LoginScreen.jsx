import { StyleSheet, Text, View } from "react-native"
// import * as Google from "expo-auth-session/providers/google"


const LoginScreen = ()=>{

    // const [request, response, promptAsync] = Google.useAuthRequest({
    //     clientId: "425453760365-q1cquoo162r0b19l5msus45i5pe0l19f.apps.googleusercontent.com",
    //     webClientId: "425453760365-q1cquoo162r0b19l5msus45i5pe0l19f.apps.googleusercontent.com",
    //     androidClientId: "425453760365-7n6d57e7aiq7p7tj2b8j6jdffapcdd56.apps.googleusercontent.com"
    // })


    // const handleLogin = () => {
    //     promptAsync()
    // }
    return (
        <>
            <View style={styles.container}>
                <Text>Login</Text>
            </View>
        </>
    )
}
export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#01eca5"
    }
})
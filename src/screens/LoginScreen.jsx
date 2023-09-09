import { useNavigation } from "@react-navigation/native"
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import * as Google from "expo-auth-session/providers/google"
import { useEffect } from "react"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { loginFulfilled } from "../redux/reducers/authSlice"
import AsyncStorage from "@react-native-async-storage/async-storage"

const LoginScreen = ()=>{
    const dispatch = useDispatch()
    const {currentUser} = useSelector((state)=> state.authSlice)
    const navigation = useNavigation()
    const [request, response, promptAsync] = Google.useAuthRequest({
        clientId: "425453760365-q1cquoo162r0b19l5msus45i5pe0l19f.apps.googleusercontent.com",
        webClientId: "425453760365-q1cquoo162r0b19l5msus45i5pe0l19f.apps.googleusercontent.com",
        androidClientId: "425453760365-7n6d57e7aiq7p7tj2b8j6jdffapcdd56.apps.googleusercontent.com"
    })


    useEffect(()=>{
            handleLogin()
    },[response])


    async function handleLogin () {
        if(response?.type === "success"){
            await getUserInfo(response?.authentication.accessToken)
        }
    }

    async function getUserInfo(accessToken){
        if(!accessToken) return;
        const res =  await axios.get("https://www.googleapis.com/userinfo/v2/me", {
            headers:{
                Authorization: `Bearer ${accessToken}`
            }
        })
        AsyncStorage.setItem("@user", JSON.stringify(res.data))
        dispatch(loginFulfilled(res.data))
    }
    return (
        <>
        <ImageBackground
        source={{uri: "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1691845471/judicial_agenda/14547742_rm218batch4-ning-34_fxd8rj.jpg"}}
        style={styles.container}
        >
            <View>
                <Text style={styles.title}>الأجندة القضائية</Text>
            </View>
            <Image
            source={{uri: "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1694094193/judicial_agenda/user-interface_2920328_rgkmky.png"}}
            width={280}
            height={450}
            />
            <Text style={styles.paragraph}>سجل الدخول باستخدام بريدك الالكترونى</Text>
            <TouchableOpacity
            style={styles.googleButton}
            onPress={()=>promptAsync()}
            >
                <Image
                source={{uri: "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1694190476/google_2504914_ft5isu.png"}}
                width={45}
                height={45}
                />
                <View style={styles.googleButtonTextContainer}>
                    <Text style={styles.googleButtonText}>Google</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.footerParagraph}>
                <Text style={styles.textTwo}> حساب جديد</Text>
                <Text style={styles.textOne}>ليس لديك حساب؟</Text>
            </View>
            {Object.keys(currentUser).length > 0 ? <Text>ok</Text> : <Text>Not</Text>}
        </ImageBackground>
        </>
    )
}
export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        minHeight: "100vh",
    },
    title:{
        color: "#0ea4e8",
        fontSize: 44,
        fontWeight: "900",
    },
    paragraph: {
        color: "#0ea4e8",
        fontSize: 20,
        fontWeight: "bold"
    },
    googleButton:{
        backgroundColor: "#fff",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        marginVertical: 20,
        width: 220,
        height: 50,
        shadowColor: "#777",
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 15
    },
    googleButtonTextContainer:{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    googleButtonText:{
        color: "#0ea4e8",
        fontSize: 24
    },
    footerParagraph: {
        display: "flex",
        flexDirection: "row"
    },
    textOne:{
        fontSize: 20,
        fontWeight: "bold"
    },
    textTwo:{
        fontSize: 20,
        fontWeight: "bold",
        color: "#0ea4e8"
    }
})
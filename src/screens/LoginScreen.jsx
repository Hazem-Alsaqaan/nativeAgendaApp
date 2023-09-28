import { useNavigation } from "@react-navigation/native"
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import * as Google from "expo-auth-session/providers/google"
import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage"






const LoginScreen = ()=>{
    const navigation = useNavigation()
    // const currentUser = {
    //     name: "hazem alsaqaan",
    //     email: "hazem.alsaqaan@gmail.com"
    // }


    const [request, response, promptAsync] = Google.useAuthRequest({
        clientId: "425453760365-q1cquoo162r0b19l5msus45i5pe0l19f.apps.googleusercontent.com",
        webClientId: "425453760365-q1cquoo162r0b19l5msus45i5pe0l19f.apps.googleusercontent.com",
        androidClientId: "425453760365-7n6d57e7aiq7p7tj2b8j6jdffapcdd56.apps.googleusercontent.com"
    })

    async function handleLogin () {
        await promptAsync()
        if(response?.type === "success"){
            await getUserInfo(response?.authentication.accessToken)
        }
    }

    async function getUserInfo(accessToken){
        if(!accessToken) return;
        const userInfo =  await axios.get("https://www.googleapis.com/userinfo/v2/me", {
            headers:{
                Authorization: `Bearer ${accessToken}`
            }
        })
        const userLoginInfo = await axios.post(`https://doubtful-slip-mite.cyclic.app/api/v1/users/login`,
        {
            name: userInfo.data.name,
            email: userInfo.data.email,
            picture: userInfo.data.picture
        })
        await AsyncStorage.setItem("@user", JSON.stringify(userLoginInfo.data))  
        if(Object.keys(userLoginInfo.data).length <= 0){
            navigation.navigate("login")
        }else{
            navigation.navigate("home")
        }  
    }


    // const submitLogin = async()=>{
    //     await AsyncStorage.setItem("@user", JSON.stringify(currentUser))
    //     if(Object.keys(currentUser).length <= 0){
    //         navigation.navigate("login")
    //     }else{
    //         navigation.navigate("home")
    //     }
        // promptAsync();
        // const userStorage = await AsyncStorage.getItem("@user")
        // if(userStorage.length > 0){
        //     console.log(userStorage)
        //     navigation.navigate("home")
        // }
    // }
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
            onPress={()=>handleLogin()}
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
                <Text onPress={()=>navigation.navigate("register")} style={styles.textTwo}> حساب جديد</Text>
                <Text style={styles.textOne}>ليس لديك حساب؟</Text>
            </View>
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
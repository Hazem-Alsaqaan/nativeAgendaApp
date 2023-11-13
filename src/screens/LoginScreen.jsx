import {
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { useNavigation } from "@react-navigation/native"
import { loginFulfilled } from "../redux/reducers/authSlice";
import { useDispatch } from "react-redux";
// import {
//     GoogleSignin,
//     GoogleSigninButton,
//     statusCodes,
// } from '@react-native-google-signin/google-signin';
// import { useEffect } from "react";
// import axios from "axios";
// import ToastMessage from "../components/ToastMessage";


const LoginScreen = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()

    // useEffect(()=>{
    //     GoogleSignin.configure({
    //         webClientId: '85768740510-sa9vgom66hqrgjc7681c5tpr85vtffe4.apps.googleusercontent.com'
    //     });
    // },[])
    
    const submitGoogleSignIn = async () => {
        try {
            // await GoogleSignin.hasPlayServices();
            // const userInfo = await GoogleSignin.signIn();
            // const userLoginInfo = await axios.post(`https://doubtful-slip-mite.cyclic.app/api/v1/users/login`,
            //     {
            //         name: userInfo.user.name,
            //         email: userInfo.user.email,
            //         picture: userInfo.user.photo
            //     })
            // dispatch(loginFulfilled(userLoginInfo.data))
            dispatch(loginFulfilled({
                user: { _id: "65075d93f0dfb75b896828c3", name: "hazem", email: "hazem.hamdy.khalil@gmail.com"},
                token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTA3NWQ5M2YwZGZiNzViODk2ODI4YzMiLCJuYW1lIjoiaGF6ZW0ga2hhbGlsIiwiZW1haWwiOiJoYXplbS5oYW1keS5raGFsaWxAZ21haWwuY29tIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0pBOG5rM3RQeVZ3U2lRSXdHeHlMZ1VJSkJlN2dvWTNOY05nYnNOQ0lhRGpBPXM5Ni1jIiwiaWF0IjoxNjk5Mjk4MjkxfQ.9D20-9aO1QULZenE9roM0m_9tVlSyChiKo1RtLmqOsw"
            }))
        } catch (error) {
            console.log(error)
            // if(err.message === "Network Error"){
            //     ToastMessage("تأكد من اتصالك بالانترنت")
            // }else if(err.response.data.error_description){
            //     ToastMessage(err.response.data.error_description)
            // }else if (err.response.data.message) {
            //     ToastMessage(err.response.data.message)
            // }else{
            //     ToastMessage(err.response.data)
            // }
        }
    };
        
    return (
        <>
            <ImageBackground
                source={{
                    uri: "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1691845471/judicial_agenda/14547742_rm218batch4-ning-34_fxd8rj.jpg",
                }}
                style={styles.container}
            >
                <View>
                    <Text style={styles.title}>الأجندة القضائية</Text>
                </View>
                <Image
                    source={{
                        uri: "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1694094193/judicial_agenda/user-interface_2920328_rgkmky.png",
                    }}
                    width={280}
                    height={450}
                />
                <Text style={styles.paragraph}>
                    سجل الدخول باستخدام بريدك الالكترونى
                </Text>
                {/* <<<<<<<<<<<<<<<<<<  TEMP CODE  >>>>>>>>>>>>>>>>> */}
                    <TouchableOpacity
                        style={styles.googleButton}
                        onPress={()=>submitGoogleSignIn()}
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
                {/* <GoogleSigninButton
                        size={GoogleSigninButton.Size.Wide}
                        color={GoogleSigninButton.Color.Dark}
                        onPress={()=>submitGoogleSignIn()}
                        /> */}
                <View style={styles.footerParagraph}>
                    <Text
                        onPress={() => navigation.navigate("register")}
                        style={styles.textTwo}
                    >
                        {" "}
                        حساب جديد
                    </Text>
                    <Text style={styles.textOne}>ليس لديك حساب؟</Text>
                </View>
            </ImageBackground>
        </>
    );
};
export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        minHeight: "100vh",
    },
    title: {
        color: "#0ea4e8",
        fontSize: 44,
        fontWeight: "900",
    },
    paragraph: {
        color: "#0ea4e8",
        fontSize: 20,
        fontWeight: "bold",
    },
    footerParagraph: {
        display: "flex",
        flexDirection: "row",
    },
    textOne: {
        fontSize: 20,
        fontWeight: "bold",
    },
    textTwo: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#0ea4e8",
    },
    googleButton:{
        backgroundColor: "#10A5E9",
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
        color: "#fff",
        fontSize: 24
    }
});

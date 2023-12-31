import {
    ActivityIndicator,
    Image,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View,
    useWindowDimensions,
} from "react-native";
import { registerFulfilled, registerPending, registerRejected } from "../redux/reducers/authSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigation } from "@react-navigation/native"
import tw from "twrnc"
import {
    GoogleSignin,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import ToastMessage from "../components/ToastMessage";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const RegisterScreen = () => {
    const [fontsLoaded] = useFonts({
        baloo: require("../../assets/fonts/BalooBhaijaan2-ExtraBold.ttf"),
        SemiBold: require("../../assets/fonts/Cairo-SemiBold.ttf"),
        Bold: require("../../assets/fonts/Cairo-Bold.ttf"),
        extra: require("../../assets/fonts/Cairo-ExtraBold.ttf"),
    });
    const { currentUser } = useSelector((state) => state.authSlice)
    const { height, width } = useWindowDimensions()
    const navigation = useNavigation()
    const { registerLoading } = useSelector((state) => state.authSlice)
    const dispatch = useDispatch()
    const backgroundHeight = width < 400 ? "h-6/9" : "h-full"


    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '85768740510-sa9vgom66hqrgjc7681c5tpr85vtffe4.apps.googleusercontent.com'
        });
        const cleanerFont = async () => {
            if (fontsLoaded) {
                await SplashScreen.preventAutoHideAsync();
            }
        };
        cleanerFont();
    }, [fontsLoaded])

    // handle register
    const submitGoogleRegister = async () => {
        dispatch(registerPending())
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            const userLoginInfo = await axios.post(`https://doubtful-slip-mite.cyclic.app/api/v1/users/register`,
                {
                    name: userInfo.user.name,
                    email: userInfo.user.email,
                    picture: userInfo.user.photo
                })
            dispatch(registerFulfilled(userLoginInfo.data))
            // const userLoginInfo = await axios.post(`https://doubtful-slip-mite.cyclic.app/api/v1/users/register`,
            //     {
            //         name: "hazem khalil",
            //         email: "hazem.hamdy.khalil@gmail.com",
            //         picture: "https://lh3.googleusercontent.com/a/ACg8ocJA8nk3tPyVwSiQIwGxyLgUIJBe7goY3NcNgbsNCIaDjA=s96-c"
            //     })
            // dispatch(registerFulfilled(userLoginInfo.data))
        } catch (err) {
            if (err.code === statusCodes.SIGN_IN_CANCELLED) {
                ToastMessage("user cancelled the login flow")
            } else if (err.code === statusCodes.IN_PROGRESS) {
                ToastMessage("operation (e.g. sign in) is in progress already")
            } else if (err.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                ToastMessage('play services not available or outdated')
            } else if (err.message === "Network Error") {
                ToastMessage("تأكد من اتصالك بالانترنت")
            } else if (err.response.data.error_description) {
                ToastMessage(err.response.data.error_description)
            } else if (err.response.data.message) {
                ToastMessage(err.response.data.message)
            } else {
                ToastMessage(err.response.data)
            }
            dispatch(registerRejected())
        }
    };
    if (!fontsLoaded) return null;
    return (
        <>
            <SafeAreaView style={tw`bg-white flex items-center justify-center min-h-full w-full`} >
                {/* >>>>>>>>>>>>>>>>>>> Top Side <<<<<<<<<<<<<<<<<<<<*/}
                <View style={tw`flex-6 justify-center items-center w-full bg-blue-500 rounded-b-[40px]`}>
                    <Image
                        source={require("../../assets/register.png")}
                        style={tw`w-full ${backgroundHeight}`}
                    />
                </View>
                {/* >>>>>>>>>>>>>>>>>>> Bottom Side <<<<<<<<<<<<<<<<<<<<*/}
                <View style={tw`bg-white w-full flex-4 justify-center items-center`}>
                    <View style={tw`w-20 h-20 mb-5 -mt-16 rounded-full flex justify-center items-center border-solid border-2 border-white shadow-xl`}>
                        <Image
                            source={require("../../assets/user.png")}
                            style={tw`w-20 h-20`}
                        />
                    </View>

                    <View style={tw`flex items-center justify-center`}>
                        <Text style={[{ fontFamily: "Bold" }, tw`text-xl text-sky-500`]}> قم بإنشاء حساب جديد</Text>
                        {/* <<<<<<<<<<<<<<<<<<  REGISTER BUTTON  >>>>>>>>>>>>>>>>> */}
                        <TouchableOpacity
                            style={tw`bg-blue-500 rounded-md p-1 my-2 flex flex-row items-center justify-center w-64 h-11`}
                            onPress={() => submitGoogleRegister()}
                        >
                            <Image
                                source={require("../../assets/google_icon.png")}
                                style={tw`w-9 h-9`}
                            />
                            <View style={tw`h-full flex-1 items-center justify-end`}>
                                <Text style={[{ fontFamily: "SemiBold" }, tw`text-white text-xl`]}>{registerLoading ? <ActivityIndicator size="small" color="#fff" /> : `إنشاء حساب`}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={tw`flex items-center justify-center m-4 mb-8`}>
                        <Text style={[{ fontFamily: "SemiBold" }, tw`text-xl text-black`]}>
                            أو سجل الدخول باستخدام بريدك الالكترونى
                        </Text>
                        {/* <<<<<<<<<<<<<<<<<<  LOGIN BUTTON  >>>>>>>>>>>>>>>>> */}
                        <TouchableOpacity
                            style={tw`bg-blue-500 rounded-md p-1 my-2 flex flex-row items-center justify-center w-64 h-11`}
                            onPress={() => navigation.navigate("login")}
                        >
                            <Image
                                source={require("../../assets/google_icon.png")}
                                style={tw`w-9 h-9`}
                            />
                            <View style={tw`h-full flex-1 items-center justify-end`}>
                                <Text style={[{ fontFamily: "SemiBold" }, tw`text-white text-xl`]}>تسجيل الدخول</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {/* add admob bannerAd */}
                    <BannerAd
                        unitId={"ca-app-pub-9498389929500961/2190041880"}
                        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
                        requestOptions={{
                            requestNonPersonalizedAdsOnly: true
                        }}
                    />
                </View>
            </SafeAreaView>
        </>
    );
};
export default RegisterScreen;


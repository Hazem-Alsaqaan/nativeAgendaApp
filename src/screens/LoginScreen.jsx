import {
    ActivityIndicator,
    Image,
    PixelRatio,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View,
    useWindowDimensions,
} from "react-native";
import { loginFulfilled, loginPending, loginRejected } from "../redux/reducers/authSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc"
import {
    GoogleSignin,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import ToastMessage from "../components/ToastMessage";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { BannerAd, BannerAdSize } from 'react-native-google-mobile-ads';
import { Entypo } from '@expo/vector-icons';

const LoginScreen = () => {
    const [fontsLoaded] = useFonts({
        baloo: require("../../assets/fonts/BalooBhaijaan2-ExtraBold.ttf"),
        SemiBold: require("../../assets/fonts/Cairo-SemiBold.ttf"),
        Bold: require("../../assets/fonts/Cairo-Bold.ttf"),
        extra: require("../../assets/fonts/Cairo-ExtraBold.ttf"),
    });
    const { height, width } = useWindowDimensions()
    const navigation = useNavigation()
    const { loginLoading } = useSelector((state) => state.authSlice)
    const dispatch = useDispatch()
    const fontScale = PixelRatio.getFontScale()
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
    // handle login 
    const submitGoogleSignIn = async () => {
        dispatch(loginPending())
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            const userLoginInfo = await axios.post(`https://agend-api.onrender.com/api/v2/users/login`,
                {
                    name: userInfo.user.name,
                    email: userInfo.user.email,
                    picture: userInfo.user.photo
                })
            dispatch(loginFulfilled(userLoginInfo.data))
            // const userLoginInfo = await axios.post(`https://doubtful-slip-mite.cyclic.app/api/v1/users/login`,
            //     {
            //         name: "hazem khalil",
            //         email: "hazem.hamdy.khalil@gmail.com",
            //         picture: "https://lh3.googleusercontent.com/a/ACg8ocJA8nk3tPyVwSiQIwGxyLgUIJBe7goY3NcNgbsNCIaDjA=s96-c"
            //     })
            // dispatch(loginFulfilled(userLoginInfo.data))
            } catch (err) {
            console.log(err.response)
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
            dispatch(loginRejected())
        }
    };
    if (!fontsLoaded) return null;
    return (
        <>
            <SafeAreaView style={tw`bg-white  min-h-full w-full`}>
                {/* >>>>>>>>>>>>>>>>>>> Top Side <<<<<<<<<<<<<<<<<<<<*/}
                <View style={tw`flex-8 justify-end items-center w-full bg-indigo-400 rounded-b-full overflow-hidden shadow-xl`}>
                    <Image
                        source={require("../../assets/pictures/grey-marble-column-details-building.jpg")}
                        style={tw`w-full h-full absolute opacity-10`}
                    />
                    <View style={tw`w-full h-full pt-5 absolute top-5`}>
                        <Image
                            source={require("../../assets/pictures/35105608_8271795-removebg-preview.png")}
                            style={tw`w-full h-full p-20`}
                        />
                    </View>
                </View>
                {/* >>>>>>>>>>>>>>>>>>> Bottom Side <<<<<<<<<<<<<<<<<<<<*/}
                <View style={tw`bg-white w-full flex-5 items-center justify-between mt-3`}>
                    <View>
                        <Image
                            source={require("../../assets/pictures/chat_7260097.png")}
                            style={tw`w-12 h-12`}
                        />
                    </View>
                    <View style={tw`flex items-center justify-center mb-2`}>
                        <Text style={[{ fontFamily: "Bold" }, tw`text-[${fontScale * 16}px] text-slate-500`]}>
                            سجل الدخول باستخدام بريدك الالكترونى
                        </Text>
                        {/* <<<<<<<<<<<<<<<<<<  LOGIN BUTTON  >>>>>>>>>>>>>>>>> */}
                        <TouchableOpacity
                            style={tw`bg-indigo-500 rounded-md py-1 px-4 my-2 flex flex-row items-center justify-center w-48 h-9 shadow-2xl`}
                            onPress={() => submitGoogleSignIn()}
                        >
                            <Entypo name="google-" size={fontScale * 24} color="white" />
                            <View style={tw`h-full flex-1 items-center justify-center`}>
                                <Text style={[{ fontFamily: "SemiBold" }, tw`text-white text-[${fontScale * 16}px]`]}>{loginLoading ? <ActivityIndicator size="small" color="#fff" /> : `تسجيل الدخول`}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={tw`flex items-center justify-center  mb-8`}>
                        <Text style={[{ fontFamily: "SemiBold" }, tw`text-[${fontScale * 16}px] text-black`]}>أو قم بإنشاء حساب جديد ؟</Text>
                        {/* <<<<<<<<<<<<<<<<<<  REGISTER BUTTON  >>>>>>>>>>>>>>>>> */}
                        <TouchableOpacity
                            style={tw`bg-indigo-500 rounded-md py-1 px-4 my-1 flex flex-row items-center justify-center w-56 h-9  shadow-2xl`}
                            onPress={() => navigation.navigate("register")}
                        >
                            <Entypo name="google-" size={fontScale * 24} color="white" />
                            <View style={tw`h-full flex-1 items-center justify-center`}>
                                <Text style={[{ fontFamily: "SemiBold" }, tw`text-white text-[${fontScale * 16}px] flex items-center justify-center`]}>إنشاء حساب</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {/* add admob bannerAd */}
                    <Text>اعلان</Text>
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
export default LoginScreen;


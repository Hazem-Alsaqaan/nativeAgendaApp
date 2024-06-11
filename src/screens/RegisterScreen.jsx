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
import { Entypo } from '@expo/vector-icons';

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

    // handle register
    const submitGoogleRegister = async () => {
        dispatch(registerPending())
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            const userLoginInfo = await axios.post(`https://agend-api.onrender.com/api/v2/users/register`,
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
            <SafeAreaView style={tw`bg-white  min-h-full w-full`} >
                {/* >>>>>>>>>>>>>>>>>>> Top Side <<<<<<<<<<<<<<<<<<<<*/}
                <View style={tw`flex-8 justify-end items-center w-full bg-indigo-400 rounded-b-full overflow-hidden shadow-xl`}>
                    <Image
                        source={require("../../assets/pictures/grey-marble-column-details-building.jpg")}
                        style={tw`w-full h-full absolute opacity-10`}
                    />
                    <View style={tw`w-full h-full pt-5 absolute top-5`}>
                        <Image
                            source={require("../../assets/pictures/35105609_8271787-removebg-preview.png")}
                            style={tw`w-full h-full`}
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
                        <Text style={[{ fontFamily: "Bold" }, tw`text-[${fontScale * 16}px] text-slate-500`]}> قم بإنشاء حساب جديد</Text>
                        {/* <<<<<<<<<<<<<<<<<<  REGISTER BUTTON  >>>>>>>>>>>>>>>>> */}
                        <TouchableOpacity
                            style={tw`bg-indigo-500 rounded-md py-1 px-4 my-2 flex flex-row items-center justify-center w-48 h-9 shadow-2xl`}
                            onPress={() => submitGoogleRegister()}
                        >
                            <Entypo name="google-" size={fontScale * 24} color="white" />
                            <View style={tw`h-full flex-1 items-center justify-end`}>
                                <Text style={[{ fontFamily: "SemiBold" }, tw`text-white text-[${fontScale * 16}px]`]}>{registerLoading ? <ActivityIndicator size="small" color="#fff" /> : `إنشاء حساب`}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={tw`flex items-center justify-center  mb-8`}>
                        <Text style={[{ fontFamily: "SemiBold" }, tw`text-[${fontScale * 16}px] text-black`]}>
                            أو سجل الدخول باستخدام بريدك الالكترونى
                        </Text>
                        {/* <<<<<<<<<<<<<<<<<<  LOGIN BUTTON  >>>>>>>>>>>>>>>>> */}
                        <TouchableOpacity
                            style={tw`bg-indigo-500 rounded-md py-1 px-4 my-1 flex flex-row items-center justify-center w-56 h-9  shadow-2xl`}
                            onPress={() => navigation.navigate("login")}
                        >
                            <Entypo name="google-" size={fontScale * 24} color="white" />
                            <View style={tw`h-full flex-1 items-center justify-end`}>
                                <Text style={[{ fontFamily: "SemiBold" }, tw`text-white text-[${fontScale * 16}px] flex items-center justify-center`]}>تسجيل الدخول</Text>
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
export default RegisterScreen;


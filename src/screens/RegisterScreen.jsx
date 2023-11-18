import {
    ActivityIndicator,
    Image,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View,
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
import { useEffect } from "react";
import ToastMessage from "../components/ToastMessage";


const RegisterScreen = () => {
    const navigation = useNavigation()
    const{registerLoading} = useSelector((state)=>state.authSlice)
    const{registerError} = useSelector((state)=>state.authSlice)
    const dispatch = useDispatch()

    useEffect(()=>{
        GoogleSignin.configure({
            webClientId: '85768740510-sa9vgom66hqrgjc7681c5tpr85vtffe4.apps.googleusercontent.com'
        });
    },[registerError])
    
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
                dispatch(registerRejected())
            } else if (err.code === statusCodes.IN_PROGRESS) {
                ToastMessage("operation (e.g. sign in) is in progress already")
                dispatch(registerRejected())
            } else if (err.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                ToastMessage('play services not available or outdated')
                dispatch(registerRejected())
            }else if(err.message === "Network Error"){
                ToastMessage("تأكد من اتصالك بالانترنت")
                dispatch(registerRejected())
            }else if(err.response.data.error_description){
                ToastMessage(err.response.data.error_description)
                dispatch(registerRejected())
            }else if (err.response.data.message) {
                ToastMessage(err.response.data.message)
                dispatch(registerRejected())
            }else{
                ToastMessage(err.response.data)
                dispatch(registerRejected())
            }
            dispatch(registerRejected())
        }
    };
        
    return (
        <>
            <SafeAreaView style={tw`bg-white flex items-center justify-center min-h-full w-full`} >
                {/* >>>>>>>>>>>>>>>>>>> Top Side <<<<<<<<<<<<<<<<<<<<*/}
                <View style={tw`flex-6 justify-center items-center w-full bg-blue-500 rounded-b-[40px]`}>
                    <Image
                        source={require("../../assets/register.png")}
                        style={tw`w-full h-6/9`}
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
                        <Text style={tw`text-xl text-sky-500 font-bold`}> قم بإنشاء حساب جديد</Text>
                    {/* <<<<<<<<<<<<<<<<<<  REGISTER BUTTON  >>>>>>>>>>>>>>>>> */}
                        <TouchableOpacity
                            style={tw`bg-blue-500 rounded-md p-1 my-2 flex flex-row items-center justify-center w-64 h-11`}
                            onPress={()=>submitGoogleRegister()}
                            >
                            <Image
                            source={require("../../assets/google_icon.png")}
                            style={tw`w-9 h-9`}
                            />
                            <View style={tw`flex-1 items-center justify-center`}>
                                <Text style={tw`text-white text-xl font-bold flex items-center justify-center`}>{registerLoading ? <ActivityIndicator size="small" color="#fff"/> : `إنشاء حساب`}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={tw`flex items-center justify-center m-4 mb-8`}>
                        <Text style={tw`text-xl font-bold text-black`}>
                            أو سجل الدخول باستخدام بريدك الالكترونى
                        </Text>
                    {/* <<<<<<<<<<<<<<<<<<  LOGIN BUTTON  >>>>>>>>>>>>>>>>> */}
                        <TouchableOpacity
                            style={tw`bg-blue-500 rounded-md p-1 my-2 flex flex-row items-center justify-center w-64 h-11`}
                            onPress={()=>navigation.navigate("login")}
                            >
                            <Image
                            source={require("../../assets/google_icon.png")}
                            style={tw`w-9 h-9`}
                            />
                            <View style={tw`flex-1 items-center justify-center`}>
                            <Text style={tw`text-white text-xl font-bold flex items-center justify-center`}>تسجيل الدخول</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
};
export default RegisterScreen;


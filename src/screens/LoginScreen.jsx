import {
    ActivityIndicator,
    Image,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { loginFulfilled, loginPending, registerFulfilled, registerPending } from "../redux/reducers/authSlice";
import { useDispatch, useSelector } from "react-redux";
import tw from "twrnc"
import {
    GoogleSignin
    // GoogleSigninButton,
    // statusCodes,
} from '@react-native-google-signin/google-signin';
import { useEffect } from "react";
import axios from "axios";
import ToastMessage from "../components/ToastMessage";


const LoginScreen = () => {
    const{registerLoading} = useSelector((state)=>state.authSlice)
    const{loginLoading} = useSelector((state)=>state.authSlice)
    const dispatch = useDispatch()
    useEffect(()=>{
        GoogleSignin.configure({
            webClientId: '85768740510-sa9vgom66hqrgjc7681c5tpr85vtffe4.apps.googleusercontent.com'
        });
    },[])
    
    // handle login 
    const submitGoogleSignIn = async () => {
        dispatch(loginPending())
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            const userLoginInfo = await axios.post(`https://doubtful-slip-mite.cyclic.app/api/v1/users/login`,
                {
                    name: userInfo.user.name,
                    email: userInfo.user.email,
                    picture: userInfo.user.photo
                })
            dispatch(loginFulfilled(userLoginInfo.data))
            // dispatch(loginFulfilled({
            //     user: { _id: "65075d93f0dfb75b896828c3", name: "hazem", email: "hazem.hamdy.khalil@gmail.com"},
            //     token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTA3NWQ5M2YwZGZiNzViODk2ODI4YzMiLCJuYW1lIjoiaGF6ZW0ga2hhbGlsIiwiZW1haWwiOiJoYXplbS5oYW1keS5raGFsaWxAZ21haWwuY29tIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0pBOG5rM3RQeVZ3U2lRSXdHeHlMZ1VJSkJlN2dvWTNOY05nYnNOQ0lhRGpBPXM5Ni1jIiwiaWF0IjoxNjk5Mjk4MjkxfQ.9D20-9aO1QULZenE9roM0m_9tVlSyChiKo1RtLmqOsw"
            // }))
        } catch (error) {
            // console.log(error)
            if(err.message === "Network Error"){
                ToastMessage("تأكد من اتصالك بالانترنت")
            }else if(err.response.data.error_description){
                ToastMessage(err.response.data.error_description)
            }else if (err.response.data.message) {
                ToastMessage(err.response.data.message)
            }else{
                ToastMessage(err.response.data)
            }
        }
    };
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
            // dispatch(registerFulfilled({
            //     user: { _id: "65075d93f0dfb75b896828c3", name: "hazem", email: "hazem.hamdy.khalil@gmail.com"},
            //     token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTA3NWQ5M2YwZGZiNzViODk2ODI4YzMiLCJuYW1lIjoiaGF6ZW0ga2hhbGlsIiwiZW1haWwiOiJoYXplbS5oYW1keS5raGFsaWxAZ21haWwuY29tIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0pBOG5rM3RQeVZ3U2lRSXdHeHlMZ1VJSkJlN2dvWTNOY05nYnNOQ0lhRGpBPXM5Ni1jIiwiaWF0IjoxNjk5Mjk4MjkxfQ.9D20-9aO1QULZenE9roM0m_9tVlSyChiKo1RtLmqOsw"
            // }))
        } catch (error) {
            // console.log(error)
            if(err.message === "Network Error"){
                ToastMessage("تأكد من اتصالك بالانترنت")
            }else if(err.response.data.error_description){
                ToastMessage(err.response.data.error_description)
            }else if (err.response.data.message) {
                ToastMessage(err.response.data.message)
            }else{
                ToastMessage(err.response.data)
            }
        }
    };
        
    return (
        <>
            <SafeAreaView style={tw`bg-white flex items-center justify-center min-h-full w-full`} >
                {/* >>>>>>>>>>>>>>>>>>> Top Side <<<<<<<<<<<<<<<<<<<<*/}
                <View style={tw`flex-6 justify-center items-center w-full bg-blue-500 rounded-b-[40px]`}>
                    <Image
                        source={require("../../assets/login_bg-removebg-preview.png")}
                        style={tw`w-full h-6/9`}
                    />
                </View>
                {/* >>>>>>>>>>>>>>>>>>> Bottom Side <<<<<<<<<<<<<<<<<<<<*/}
                <View style={tw`bg-white w-full flex-4 justify-center items-center`}>
                    <View style={tw`w-20 h-20 mb-5 -mt-12 rounded-full flex justify-center items-center border-solid border-2 border-white shadow-xl`}>
                        <Image
                        source={require("../../assets/user.png")}
                        style={tw`w-20 h-20`}
                        />
                    </View>
                    <Text style={tw`text-xl font-bold text-sky-500`}>
                        سجل الدخول باستخدام بريدك الالكترونى
                    </Text>
                    {/* <<<<<<<<<<<<<<<<<<  TEMP CODE  >>>>>>>>>>>>>>>>> */}
                        <TouchableOpacity
                            style={tw`bg-blue-500 rounded-md p-1 my-2 flex flex-row items-center justify-center w-72 h-11`}
                            onPress={()=>submitGoogleSignIn()}
                            >
                            <Image
                            source={{uri: "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1694190476/google_2504914_ft5isu.png"}}
                            width={38}
                            height={38}
                            />
                            <View style={tw`flex-1 items-center justify-center`}>
                            <Text style={tw`text-white text-base`}>{loginLoading? <ActivityIndicator size="large"/> : `Sign In With Google`}</Text>
                            </View>
                        </TouchableOpacity>
                    {/* <GoogleSigninButton
                            size={GoogleSigninButton.Size.Wide}
                            color={GoogleSigninButton.Color.Dark}
                            onPress={()=>submitGoogleSignIn()}
                        /> */}
                    <View style={tw`flex items-center justify-center my-8`}>
                        <Text style={tw`text-xl text-black font-bold`}>أو قم بإنشاء حساب جديد ؟</Text>
                    {/* <<<<<<<<<<<<<<<<<<  TEMP CODE  >>>>>>>>>>>>>>>>> */}
                        <TouchableOpacity
                            style={tw`bg-blue-500 rounded-md p-1 my-2 flex flex-row items-center justify-center w-72 h-11`}
                            onPress={()=>submitGoogleRegister()}
                            >
                            <Image
                            source={{uri: "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1694190476/google_2504914_ft5isu.png"}}
                            width={38}
                            height={38}
                            />
                            <View style={tw`flex-1 items-center justify-center`}>
                                <Text style={tw`text-white text-base`}>{registerLoading? <ActivityIndicator size="large"/> : `Sign In With Google`}</Text>
                            </View>
                        </TouchableOpacity>
                        {/* <GoogleSigninButton
                            size={GoogleSigninButton.Size.Wide}
                            color={GoogleSigninButton.Color.Dark}
                            onPress={()=>submitGoogleRegister()}
                        /> */}
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
};
export default LoginScreen;


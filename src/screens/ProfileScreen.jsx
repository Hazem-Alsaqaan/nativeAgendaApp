import { Image, Linking, PixelRatio, SafeAreaView, Text, TouchableOpacity, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import tw from "twrnc"
import * as Google from "@react-native-google-signin/google-signin"
import { logout, logoutPending } from "../redux/reducers/authSlice";
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


const ProfileScreen = () => {
    const navigation = useNavigation()
    const { currentUser } = useSelector((state) => state.authSlice)
    const fontScale = PixelRatio.getFontScale()
    const pixel = PixelRatio.getPixelSizeForLayoutSize(10)
    const { logOutLoading } = useSelector((state) => state.authSlice)
    const dispatch = useDispatch()
    const signOut = async () => {
        dispatch(logoutPending())
        try {
            dispatch(logout())
            await Google.GoogleSignin.signOut()
            Google.GoogleSignin.hasPlayServices();
        } catch (err) {
            if (err.code === Google.statusCodes.SIGN_IN_CANCELLED) {
                ToastMessage("IN CANCELED")
            } else if (err.code === Google.statusCodes.IN_PROGRESS) {
                ToastMessage("IN PROGRESS")
            } else if (err.code === Google.statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                ToastMessage("IN SERVICES")
            } else {
                ToastMessage(err)
            }
        }
    }
    // go to delete your account
    const deleteAccount = () => {
        Linking.openURL("https://lawyeragenda.surge.sh/")
    }
    return (
        <>
            <SafeAreaView style={tw`h-full w-full flex items-center justify-center bg-[#fff]`}>
                <View style={tw`h-full w-full flex-2 items-center justify-center bg-indigo-500 rounded-b-full`}>
                    <View style={tw`h-full w-full flex-1 items-center justify-center bg-indigo-500 rounded-b-full overflow-hidden`}>
                        <Image
                            source={require("../../assets/pictures/grey-marble-column-details-building.jpg")}
                            style={tw`w-full h-full absolute opacity-10`}
                        />
                    </View>
                    <View style={tw`bg-[#f1f5f9] px-8 py-4 absolute -bottom-10 flex justify-center items-center rounded-2xl shadow-2xl`}>
                        <View style={tw`w-full flex items-center py-2`}>
                            <View style={tw`w-[${pixel}] h-[${pixel}] rounded-full border-solid border-2 border-gray-200 shadow-2xl`}>
                                <Image
                                    source={{ uri: currentUser?.picture }}
                                    style={tw`w-full h-full rounded-full`}
                                />
                            </View>
                            <View style={tw`mt-0.5 max-w-3xl p-1`}>
                                <Text style={tw`text-black py-1 font-bold text-[${fontScale * 18}px]`}>
                                    {Object.keys(currentUser).length > 0 ? currentUser?.name : "user not found"}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={tw`w-full flex-2 justify-center my-5 p-5 `}>
                    <TouchableOpacity style={tw`bg-slate-50 rounded-lg p-2 flex items-center justify-end my-1 flex-row`}>
                        <Text style={tw`text-slate-500 font-bold text-[${fontScale * 16}px] p-2`}>{currentUser?.email}</Text>
                        <Text style={tw`text-black font-bold text-[${fontScale * 16}px] p-2`}>البريد</Text>
                        <Feather name="mail" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("privacy")} style={tw`bg-slate-50 rounded-lg p-2 flex items-center justify-between my-1 flex-row`}>
                        <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
                        <View style={tw`flex-row items-center`}>
                            <Text style={tw`text-black font-bold text-[${fontScale * 16}px] p-2`}>سياسة الخصوصية</Text>
                            <MaterialIcons name="privacy-tip" size={24} color="black" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("conditions")} style={tw`bg-slate-50 rounded-lg p-2 flex items-center justify-between my-1 flex-row`}>
                        <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
                        <View style={tw`flex-row items-center`}>
                            <Text style={tw`text-black font-bold text-[${fontScale * 16}px] p-2`}>الشروط والاحكام</Text>
                            <MaterialCommunityIcons name="script-text-outline" size={24} color="black" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => deleteAccount()} style={tw`bg-slate-50 rounded-lg p-2 flex items-center justify-end my-1 flex-row`}>
                        <Text style={tw`text-black font-bold text-[${fontScale * 16}px] p-2`}>حذف الحساب</Text>
                        <AntDesign name="delete" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => signOut()} style={tw`bg-slate-50 rounded-lg p-2 flex items-center justify-end my-1 flex-row`}>
                        <Text style={tw`text-black font-bold text-[${fontScale * 16}px] p-2`}>تسجيل الخروج</Text>
                        <Feather name="log-out" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </>
    )
}
export default ProfileScreen
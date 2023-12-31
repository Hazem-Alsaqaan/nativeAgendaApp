import { Text, View, ImageBackground, TouchableOpacity, Image, ActivityIndicator } from "react-native"
import { useNavigation } from "@react-navigation/native"
import React, { useState } from "react"
import DateTimePicker from '@react-native-community/datetimepicker';
import { Feather } from '@expo/vector-icons';
import { useDispatch, useSelector } from "react-redux"
import { logout, logoutPending } from "../redux/reducers/authSlice"
import * as Google from "@react-native-google-signin/google-signin"
import tw from "twrnc"
import ToastMessage from "../components/ToastMessage";
import { Ionicons } from '@expo/vector-icons';
import { BannerAd, BannerAdSize } from 'react-native-google-mobile-ads';


const HomeScreen = () => {
    const { logOutLoading } = useSelector((state) => state.authSlice)
    const navigation = useNavigation()
    const [currentDate, setCurrentDate] = useState(new Date())
    const [showDate, setShowDate] = useState(false)
    const { currentUser } = useSelector((state) => state.authSlice)
    const dispatch = useDispatch()


    const handleOnDateChange = (event, selectedDate) => {
        const date = selectedDate;
        setCurrentDate(date)
        setShowDate(!showDate)
        const dayId = `${selectedDate.getFullYear()}-${selectedDate.getMonth() + 1 < 10 ? `0${selectedDate.getMonth() + 1}` : `${selectedDate.getMonth() + 1}`}-${selectedDate.getDate() < 10 ? `0${selectedDate.getDate()}` : selectedDate.getDate()}`
        navigation.setParams({ dateId: dayId })
        navigation.navigate("DateSelected", {
            dateId: dayId
        })
    }

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
    return (
        <>
            <ImageBackground
                source={{ uri: "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1691845471/judicial_agenda/14547742_rm218batch4-ning-34_fxd8rj.jpg" }}
                style={tw`w-full min-h-full flex-1 items-center justify-center`}>
                <View style={tw`h-full w-full flex-1 items-center justify-center`}>
                    <View style={tw`flex justify-center items-center`}>
                        <View style={tw`flex justify-center items-center my-1`}>
                            <View style={tw`w-20 h-20 rounded-full border-solid border-2 border-gray-200 shadow-2xl`}>
                                <Image
                                    source={{ uri: currentUser?.picture }}
                                    style={tw`w-full h-full rounded-full`}
                                />
                            </View>
                            <View style={tw`mt-0.5 max-w-3xl p-1 `}>
                                <Text style={tw`text-black font-bold text-lg`}>
                                    {Object.keys(currentUser).length > 0 ? currentUser?.name : "user not found"}
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View style={tw`w-full my-2 flex justify-center items-center`}>
                        <TouchableOpacity
                            style={tw`w-52 bg-sky-500 py-1.5 px-4 mb-3 rounded-lg shadow-2xl flex items-center justify-center`}
                            onPress={() => setShowDate(!showDate)}>
                            <Text style={tw`text-white text-xl font-bold`}>عرض القضايا</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={tw`w-52 bg-sky-500 py-1.5 px-4 mb-3 rounded-lg shadow-2xl flex-row items-center justify-center`}
                            onPress={() => navigation.navigate("search")}
                        >
                            <Text style={tw`text-white text-xl font-bold mr-1.5`}>بحث</Text>
                            <Ionicons name="search-sharp" size={24} color="#fff" />
                        </TouchableOpacity>
                        <Image
                            style={tw`w-56 h-72`}
                            source={{ uri: "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1701699392/judicial_agenda/view-3d-scales-justice-lawyer-s-day-removebg-preview_gl3tgv.png" }}
                        />
                        {showDate ?
                            <DateTimePicker
                                value={currentDate}
                                onChange={handleOnDateChange}
                                display="spinner"
                            />
                            : ""
                        }
                    </View>
                    <TouchableOpacity
                        style={tw`bg-sky-500 rounded-lg px-5 py-2 flex items-center justify-center my-2 shadow-2xl flex-row`}
                        onPress={() => signOut()}>
                        <Text style={tw`text-white font-bold text-xl pr-2`}>{logOutLoading ? <ActivityIndicator size="small" /> : `تسجيل الخروج`}</Text>
                        <Feather name="power" size={24} color="white" />
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
            </ImageBackground>
        </>
    )
}
export default HomeScreen
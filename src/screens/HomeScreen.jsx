import { Text, View, TouchableOpacity, Image, ActivityIndicator, SafeAreaView, PixelRatio } from "react-native"
import { useNavigation } from "@react-navigation/native"
import React, { useState } from "react"
import DateTimePicker from '@react-native-community/datetimepicker';
import { useSelector } from "react-redux"
import tw from "twrnc"
import ToastMessage from "../components/ToastMessage";
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
import { Entypo } from '@expo/vector-icons';


const HomeScreen = () => {
    const fontScale = PixelRatio.getFontScale()
    const pixel = PixelRatio.getPixelSizeForLayoutSize(10)
    const navigation = useNavigation()
    const [currentDate, setCurrentDate] = useState(new Date())
    const [showDate, setShowDate] = useState(false)
    const { currentUser } = useSelector((state) => state.authSlice)

    // handler pick date function
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

    return (
        <>
            <SafeAreaView
                style={tw`w-full min-h-full flex items-center justify-center bg-[#fff]`}>
                <View style={tw`h-full w-full flex-2 items-center justify-center bg-indigo-500 rounded-b-full`}>
                    <View style={tw`h-full w-full flex-2 items-center justify-center bg-indigo-500 rounded-b-full overflow-hidden`}>
                        <Image
                            source={require("../../assets/pictures/grey-marble-column-details-building.jpg")}
                            style={tw`w-full h-full absolute opacity-10`}
                        />
                    </View>
                    <View style={tw`bg-[#f1f5f9] p-5 m-4 absolute -bottom-10 flex justify-center items-center rounded-2xl shadow-2xl`}>
                        <View style={tw`absolute top-2 right-2`}>
                            <Image
                                source={require("../../assets/pictures/hand.png")}
                                style={tw`w-10 h-10`}
                            />
                        </View>
                        <View style={tw`w-full flex-row  items-center py-2`}>
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
                                <Text style={tw`text-slate-400 font-bold text-[${fontScale * 12}px]`}>
                                    {Object.keys(currentUser).length > 0 ? currentUser?.email : "user not found"}
                                </Text>
                            </View>
                        </View>
                        <View style={tw`flex-row`}>
                            <Entypo name="star" size={24} color="#6266F0" />
                            <Entypo name="star" size={24} color="#6266F0" />
                            <Entypo name="star" size={24} color="#6266F0" />
                            <Entypo name="star" size={24} color="#6266F0" />
                        </View>
                    </View>
                </View>
                <View style={tw`w-full flex-1 justify-center items-center`}>
                    <View style={tw`w-full my-2 flex justify-center items-center`}>
                        <TouchableOpacity
                            style={tw`w-52 bg-[#6266F0] py-4 px-4 mb-3 rounded-lg shadow-2xl flex items-center justify-center`}
                            onPress={() => setShowDate(!showDate)}>
                            <Text style={tw`text-white text-xl font-bold`}>عرض القضايا</Text>
                        </TouchableOpacity>
                        {showDate ?
                            <DateTimePicker
                                value={currentDate}
                                onChange={handleOnDateChange}
                                display="spinner"
                            />
                            : ""
                        }
                    </View>
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
            </SafeAreaView>
        </>
    )
}
export default HomeScreen
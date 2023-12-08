import { useEffect, useState } from "react"
import { ImageBackground, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import tw from "twrnc"
import { searchCases } from "../redux/actions/casesAction"
import { Feather } from '@expo/vector-icons';
import { BannerAd, BannerAdSize } from 'react-native-google-mobile-ads';

const SearchScreen = () => {
    const dispatch = useDispatch()
    const { token } = useSelector((state) => state.authSlice)
    const { searchResult } = useSelector((state) => state.casesSlice)
    const { searchResultLoading } = useSelector((state) => state.casesSlice)
    const [searchText, setSearchText] = useState("")
    const submitSearch = () => {
        dispatch(searchCases({ token: token, searchText: searchText }))
        setSearchText("")
    }
    useEffect(() => {
        dispatch(searchCases({ token: token, searchText: "" }))
    }, [])
    return (
        <>
            <ImageBackground
                source={{ uri: "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1691845471/judicial_agenda/14547742_rm218batch4-ning-34_fxd8rj.jpg" }}
                style={tw`w-full min-h-full flex-1 items-center justify-center`}>
                <View style={tw`w-full flex-1 items-center justify-center py-5`}>
                    <Text style={tw`font-bold text-xl`}>ابحث باسم الموكل</Text>
                    <View style={tw`w-full flex-row items-center justify-center py-1`}>
                        <TouchableOpacity
                            onPress={() => submitSearch()}
                            style={tw`bg-blue-600 px-8 py-1.5 rounded-l-xl flex-row items-center justify-center`}>
                            <Text style={tw`text-white font-bold text-xl mx-1`}>بحث</Text>
                            <Feather name="search" size={20} color="#fff" />
                        </TouchableOpacity>
                        <TextInput
                            placeholder="ابحث باسم الموكل * "
                            style={tw`w-4/7 bg-transparent px-2 py-1 rounded-r-xl border-solid border-[2px] border-sky-500 font-bold text-black text-base`}
                            onChangeText={(text) => setSearchText(text)}
                            value={searchText}
                        />
                    </View>
                </View>
                <ScrollView style={tw`w-full flex-2 p-1`}>
                    {searchResultLoading ? <Text style={tw`text-center font-bold text-base`}>جاري التحميل ...</Text>
                        : searchResult.length > 0
                            ? searchResult.map((item) =>
                                <ScrollView key={item?._id} horizontal contentContainerStyle={tw`flex flex-row-reverse justify-center items-center p-5  bg-transparent`}>
                                    <View style={tw`w-40 h-30 bg-purple-50 rounded-lg mx-1 flex items-center border-solid border-2 border-gray-200 shadow-2xl`}>
                                        <Text style={tw`w-28 h-8 rounded bg-purple-700    px-2 py-1 text-white text-base text-center font-bold -mt-3 shadow-2xl`}>الرقم</Text>
                                        <View style={tw`w-full flex-1`}>
                                            <Text style={tw`mt-2 p-1 text-black text-base font-bold text-center `}>{item?.number} لسنة {item?.theYear}</Text>
                                        </View>
                                    </View>
                                    <View style={tw`w-40 h-30 bg-sky-50 rounded-lg mx-1 flex items-center border-solid border-2 border-gray-200 shadow-2xl`}>
                                        <Text style={tw`w-28 h-8 rounded bg-sky-400     px-2 py-1 text-white text-base text-center font-bold -mt-3 shadow-2xl`}>المدعى</Text>
                                        <View style={tw`w-full flex-1`}>
                                            <Text style={tw`mt-2 p-1 text-black text-base font-bold text-center`}>{item?.plaintiff}</Text>
                                        </View>
                                    </View>
                                    <View style={tw`w-40 h-30 bg-cyan-50 rounded-lg mx-1 flex items-center border-solid border-2 border-gray-200 shadow-2xl`}>
                                        <Text style={tw`w-28 h-8 rounded bg-cyan-500      px-2 py-1 text-white text-base text-center font-bold -mt-3 shadow-2xl`}>المدعى عليه</Text>
                                        <View style={tw`w-full flex-1`}>
                                            <Text style={tw`mt-2 p-1 text-black text-base font-bold text-center `}>{item?.defendant}</Text>
                                        </View>
                                    </View>
                                    <View style={tw`w-40 h-30 bg-red-50 rounded-lg mx-1 flex items-center border-solid border-2 border-gray-200 shadow-2xl`}>
                                        <Text style={tw`w-28 h-8 rounded bg-red-500     px-2 py-1 text-white text-base text-center font-bold -mt-3 shadow-2xl`}>نوع الدعوى</Text>
                                        <View style={tw`w-full flex-1`}>
                                            <Text style={tw`mt-2 p-1 text-black text-base font-bold text-center `}>{item?.typeCase}</Text>
                                        </View>
                                    </View>
                                    <View style={tw`w-70 h-30 bg-indigo-50 rounded-lg mx-1 flex items-center  border-solid border-2 border-gray-200 shadow-2xl`}>
                                        <Text style={tw`w-28 h-8 rounded bg-indigo-500     px-2 py-1 text-white text-base text-center font-bold -mt-3 shadow-2xl`}>تاريخ الجلسات</Text>
                                        <ScrollView nestedScrollEnabled={true} style={tw`w-full`}>
                                            {item.sessions.map((singleSession) =>
                                                <View style={tw`bg-indigo-100 flex-row justify-between border-b-[1px] border-solid border-slate-100`} key={singleSession._id}>
                                                    <Text style={tw`mt-2 p-1 text-black text-base font-bold text-center `}>{singleSession.decision}</Text>
                                                    <Text style={tw`mt-2 p-1 text-black text-base font-bold text-center `}>{singleSession.sessionDate}</Text>
                                                </View>
                                            )}
                                        </ScrollView>
                                    </View>
                                </ScrollView>
                            )
                            : <Text style={tw`text-center font-bold text-base`}>لاتوجد قضايا ...</Text>}
                </ScrollView>
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
export default SearchScreen
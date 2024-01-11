import { ImageBackground, RefreshControl, ScrollView, Text, View } from "react-native"
import { useSelector } from "react-redux"
import ToastMessage from "../components/ToastMessage"
import tw from "twrnc"
import CreateCase from "../components/CreateCase"
import ShowDateCases from "../components/ShowDateCases"
import { useCallback, useState } from "react"
import AddSession from "../components/AddSession"
import { BannerAd, BannerAdSize } from 'react-native-google-mobile-ads';

const DateSelectedScreen = () => {
    const { errorMessage } = useSelector((state) => state.casesSlice)
    const { sessionInputVisiable } = useSelector((state) => state.casesSlice)
    const [isRefresh, setIsRefresh] = useState(false)

    const onReload = useCallback(() => {
        setIsRefresh(true)
        setTimeout(() => {
            setIsRefresh(false)
        }, 1200)
    }, [])

    return (
        <View>
            <ScrollView style={[tw`relative`, { minHeight: "100vh" }]} refreshControl={<RefreshControl refreshing={isRefresh} onRefresh={onReload} />}>
                <View
                    style={[tw`w-full bg-white flex-1 items-center justify-center py-7`, { minHeight: "100vh" }]}>
                    <CreateCase />
                    {sessionInputVisiable ? <AddSession /> : ""}
                    <ShowDateCases isRefresh={isRefresh} />
                    <View>
                        {errorMessage && ToastMessage(errorMessage)}
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
            </ScrollView>
        </View>
    )
}

export default DateSelectedScreen
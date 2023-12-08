import { ImageBackground, RefreshControl, ScrollView, View } from "react-native"
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
                <ImageBackground
                    source={{ uri: "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1691845471/judicial_agenda/14547742_rm218batch4-ning-34_fxd8rj.jpg" }}
                    style={[tw`w-full flex-1 items-center justify-center py-7`, { minHeight: "100vh" }]}>
                    <CreateCase />
                    {sessionInputVisiable ? <AddSession /> : ""}
                    <ShowDateCases isRefresh={isRefresh} />
                    <View>
                        {errorMessage && ToastMessage(errorMessage)}
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
            </ScrollView>
        </View>
    )
}

export default DateSelectedScreen
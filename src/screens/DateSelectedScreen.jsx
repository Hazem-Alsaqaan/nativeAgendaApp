import { ImageBackground, RefreshControl, ScrollView, View  } from "react-native"
import { useCallback, useState } from "react"
import {  useSelector } from "react-redux"
import ShowDateCases from "../components/ShowDateCases"
import CreateCase from "../components/CreateCase"
import ToastMessage from "../components/ToastMessage"
import tw from "twrnc"

const DateSelectedScreen = ()=>{
    const {errorMessage} = useSelector((state)=>state.casesSlice)
    // handle refresh page
    const [isRefresh, setIsRefresh] = useState(false)

    const handleRefresh = useCallback(()=>{
            setIsRefresh(true);
            setTimeout(()=>{
                setIsRefresh(false)
            },1000)
    },[])


    return(
        <>
        <ScrollView refreshControl={<RefreshControl refreshing={isRefresh} onRefresh={()=>handleRefresh()}/>} >
        <ImageBackground
        source={{uri:"https://res.cloudinary.com/dkhu7rt8n/image/upload/v1691845471/judicial_agenda/14547742_rm218batch4-ning-34_fxd8rj.jpg"}} 
        style={tw`w-full min-h-full flex-1 items-center justify-center py-7`}>
                <CreateCase />
                <ShowDateCases isRefresh = {isRefresh}/>
                <View>
                {   Object.keys(errorMessage).length > 0 && ToastMessage(errorMessage) }
                </View>
        </ImageBackground>
        </ScrollView>
        </>
    )
}

export default DateSelectedScreen
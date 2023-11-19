import { useNavigation, useRoute } from "@react-navigation/native"
import { useEffect } from "react"
import { ActivityIndicator, ImageBackground, Text, TouchableOpacity, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { ShowSingleCase } from "../redux/actions/casesAction"
import { Ionicons } from '@expo/vector-icons'; 
import tw from "twrnc"
import ToastMessage from "../components/ToastMessage"

const SingleCaseScreen =()=>{
    const navigation = useNavigation()
    const {caseId} = useRoute().params
    const {token} = useSelector((state)=> state.authSlice)
    const {singleCase} = useSelector((state)=> state.casesSlice)
    const {singleCaseLoading} = useSelector((state)=> state.casesSlice)
    const {singleCaseError} = useSelector((state)=> state.casesSlice)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(ShowSingleCase({id: caseId, token: token}))
    },[])
    return(
        <>
        <ImageBackground
        style={tw`w-full min-h-full flex-1 items-center justify-center`}
        source={{uri: "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1691845471/judicial_agenda/14547742_rm218batch4-ning-34_fxd8rj.jpg"}}>
            <TouchableOpacity
                onPress={()=>navigation.goBack()} 
                style={tw`flex items-center justify-center bg-transparent px-3 py-1 border-solid border-2 border-sky-500 rounded-lg mb-8`}>
                <Ionicons name="return-down-back-outline" size={24} color="black" />
            </TouchableOpacity>
            {
            singleCaseLoading ? 
            <ActivityIndicator size="large"/>
            :
            <View>
                <View style={tw`flex items-center justify-center`}>
                    <Text style={tw`bg-red-500 w-40  text-white p-2 text-xl  rounded-xl  shadow-2xl flex items-center justify-center z-30`}>رقم القضية</Text>
                    <Text style={tw`bg-white bg-opacity-30   text-base py-2 px-10 flex items-center rounded-full z-20 font-bold`}>{`${singleCase?.number} لسنة ${singleCase?.theYear}`}</Text>
                </View>
                <View style={tw`flex items-center justify-center`}>
                    <Text style={tw`bg-purple-700 w-40  text-white p-2 text-xl  rounded-xl  shadow-2xl flex items-center justify-center z-30`}>المدعى</Text>
                    <Text style={tw`bg-white bg-opacity-30   text-base py-2 px-10 flex items-center rounded-full z-20 font-bold`}>{singleCase?.plaintiff}</Text>
                </View>
                <View style={tw`flex items-center justify-center`}>
                    <Text style={tw`bg-amber-400 w-40  text-white p-2 text-xl  rounded-xl  shadow-2xl flex items-center justify-center z-30`}>المدعى عليه</Text>
                    <Text style={tw`bg-white bg-opacity-30   text-base py-2 px-10 flex items-center rounded-full z-20 font-bold`}>{singleCase?.defendant}</Text>
                </View>
                <View style={tw`flex items-center justify-center`}>
                    <Text style={tw`bg-sky-500 w-40  text-white p-2 text-xl  rounded-xl  shadow-2xl flex items-center justify-center z-30`}>نوع الدعوى</Text>
                    <Text style={tw`bg-white bg-opacity-30   text-base py-2 px-10 flex items-center rounded-full z-20 font-bold`}>{singleCase?.typeCase}</Text>
                </View>
                <View style={tw`flex items-center justify-center`}>
                    <Text style={tw`bg-green-500 w-40  text-white p-2 text-xl  rounded-xl  shadow-2xl flex items-center justify-center z-30`}>من جلسة</Text>
                    <Text style={tw`bg-white bg-opacity-30   text-base py-2 px-10 flex items-center rounded-full z-20 font-bold`}>{singleCase?.fromSession}</Text>
                </View>
                <View style={tw`flex items-center justify-center`}>
                    <Text style={tw`bg-pink-500 w-40  text-white p-2 text-xl  rounded-xl  shadow-2xl flex items-center justify-center z-30`}>إلى جلسة</Text>
                    <Text style={tw`bg-white bg-opacity-30   text-base py-2 px-10 flex items-center rounded-full z-20 font-bold`}>{singleCase?.toSession}</Text>
                </View>
                <View style={tw`flex items-center justify-center`}>
                    <Text style={tw`bg-blue-700 w-40  text-white p-2 text-xl  rounded-xl  shadow-2xl flex items-center justify-center z-30`}>القرار</Text>
                    <Text style={tw`bg-white bg-opacity-30   text-base py-2 px-10 flex items-center rounded-full z-20 font-bold`}>{singleCase?.decision}</Text>
                </View>
            </View>
            }
            {singleCaseError && ToastMessage(singleCaseError)}
        </ImageBackground>
        </>
    )
}

export default SingleCaseScreen
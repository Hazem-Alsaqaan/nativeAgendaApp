import { useRoute } from "@react-navigation/native"
import { useEffect } from "react"
import { ImageBackground, Text, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import tw from "twrnc"
import { ShowSingleCase } from "../redux/actions/casesAction"

const SingleCaseScreen =()=>{
    const {caseId} = useRoute().params
    const {token} = useSelector((state)=> state.authSlice)
    const {singleCase} = useSelector((state)=> state.casesSlice)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(ShowSingleCase({id: caseId, token: token}))
    },[])
    return(
        <>
        <ImageBackground
        style={tw`w-full min-h-full flex-1 items-center justify-center`}
        source={{uri: "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1691845471/judicial_agenda/14547742_rm218batch4-ning-34_fxd8rj.jpg"}}>
            <View >
                <View>
                    <Text style={tw`bg-red-500 w-40  text-white p-2 text-xl  rounded-r-xl  shadow-2xl drop-shadow-2xl flex items-center justify-center z-30`}>رقم القضية</Text>
                    <Text style={tw`bg-white bg-opacity-30  backdrop-blur text-base py-2 px-10 flex items-center rounded-full z-20`}>{`${singleCase?.number} لسنة ${singleCase?.theYear}`}</Text>
                </View>
                <View>
                    <Text style={tw`bg-purple-700 w-40  text-white p-2 text-xl  rounded-r-xl  shadow-2xl drop-shadow-2xl flex items-center justify-center z-30`}>المدعى</Text>
                    <Text style={tw`bg-white bg-opacity-30  backdrop-blur text-base py-2 px-10 flex items-center rounded-full z-20`}>{singleCase?.plaintiff}</Text>
                </View>
                <View>
                    <Text style={tw`bg-amber-400 w-40  text-white p-2 text-xl  rounded-r-xl  shadow-2xl drop-shadow-2xl flex items-center justify-center z-30`}>المدعى عليه</Text>
                    <Text style={tw`bg-white bg-opacity-30  backdrop-blur text-base py-2 px-10 flex items-center rounded-full z-20`}>{singleCase?.defendant}</Text>
                </View>
                <View>
                    <Text style={tw`bg-sky-500 w-40  text-white p-2 text-xl  rounded-r-xl  shadow-2xl drop-shadow-2xl flex items-center justify-center z-30`}>نوع الدعوى</Text>
                    <Text style={tw`bg-white bg-opacity-30  backdrop-blur text-base py-2 px-10 flex items-center rounded-full z-20`}>{singleCase?.typeCase}</Text>
                </View>
                <View>
                    <Text style={tw`bg-green-500 w-40  text-white p-2 text-xl  rounded-r-xl  shadow-2xl drop-shadow-2xl flex items-center justify-center z-30`}>من جلسة</Text>
                    <Text style={tw`bg-white bg-opacity-30  backdrop-blur text-base py-2 px-10 flex items-center rounded-full z-20`}>{singleCase?.fromSession}</Text>
                </View>
                <View>
                    <Text style={tw`bg-pink-500 w-40  text-white p-2 text-xl  rounded-r-xl  shadow-2xl drop-shadow-2xl flex items-center justify-center z-30`}>إلى جلسة</Text>
                    <Text style={tw`bg-white bg-opacity-30  backdrop-blur text-base py-2 px-10 flex items-center rounded-full z-20`}>{singleCase?.toSession}</Text>
                </View>
                <View>
                    <Text style={tw`bg-blue-700 w-40  text-white p-2 text-xl  rounded-r-xl  shadow-2xl drop-shadow-2xl flex items-center justify-center z-30`}>القرار</Text>
                    <Text style={tw`bg-white bg-opacity-30  backdrop-blur text-base py-2 px-10 flex items-center rounded-full z-20`}>{singleCase?.decision}</Text>
                </View>
            </View>
        </ImageBackground>
        </>
    )
}

export default SingleCaseScreen
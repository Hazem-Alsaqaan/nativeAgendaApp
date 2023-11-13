import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import tw from "twrnc"
import { setItemId, setDecision, setDefendant, setFromSession, setNumber, setPlaintiff, setTheYear, setToSession, setTypeCase } from "../redux/reducers/caseStateSlice"
import { deleteCases, showCasesByDate } from "../redux/actions/casesAction"
import { useNavigation, useRoute } from "@react-navigation/native"


const SingleRow = ({item})=>{
    const {dateId} = useRoute().params
    const dispatch = useDispatch()
    const {token} = useSelector((state)=> state.authSlice)
    const navigation = useNavigation()

    const navigateSingleCase = (id)=>{
        if(id){
            navigation.setParams({caseId: id})
            navigation.navigate("singleCaseScreen",{
                caseId: id
            })
        }
    }
    // get item id selected 
    const getItemIdSelected =(item)=>{
            dispatch(setItemId(item._id.toString()))
            dispatch(setDecision(item.decision))
            dispatch(setDefendant(item.defendant))
            dispatch(setFromSession(item.fromSession))
            dispatch(setNumber(item.number))
            dispatch(setPlaintiff(item.plaintiff))
            dispatch(setTheYear(item.theYear))
            dispatch(setToSession(item.toSession))
            dispatch(setTypeCase(item.typeCase))
    }
    // submite delete cases
    const submitDeleteCase =(id)=>{
        if(id){
            dispatch(deleteCases({id: id, token: token}))
        }
        dispatch(showCasesByDate({token: token, date: dateId}));
    }
    return(
        <>
        <ScrollView horizontal contentContainerStyle={tw`flex flex-row-reverse p-5  bg-transparent `}>
                    <View style={tw`w-50 h-32 bg-purple-50 rounded-lg mx-1 flex items-center border-solid border-2 border-gray-200 shadow-2xl`}>
                        <Text style={tw`w-40 h-10 rounded bg-purple-700    px-2 py-1 text-white text-xl text-center font-bold -mt-3 shadow-2xl`}>الرقم</Text>
                        <View style={tw`w-full flex-1`}>
                            <Text style={tw`mt-2 p-1 text-black text-base font-bold text-center `}>{item.number} لسنة {item.theYear}</Text>
                        </View>
                    </View>
                    <View style={tw`w-50 h-32 bg-amber-50 rounded-lg mx-1 flex items-center border-solid border-2 border-gray-200 shadow-2xl`}>
                        <Text style={tw`w-40 h-10 rounded bg-amber-400     px-2 py-1 text-white text-xl text-center font-bold -mt-3 shadow-2xl`}>المدعى</Text>
                        <View style={tw`w-full flex-1`}>
                            <Text style={tw`mt-2 p-1 text-black text-base font-bold text-center`}>{item.plaintiff}</Text>
                        </View>
                    </View>
                    <View style={tw`w-50 h-32 bg-blue-50 rounded-lg mx-1 flex items-center border-solid border-2 border-gray-200 shadow-2xl`}>
                        <Text style={tw`w-40 h-10 rounded bg-blue-700      px-2 py-1 text-white text-xl text-center font-bold -mt-3 shadow-2xl`}>المدعى عليه</Text>
                        <View style={tw`w-full flex-1`}>
                            <Text style={tw`mt-2 p-1 text-black text-base font-bold text-center `}>{item.defendant}</Text>
                        </View>
                    </View>
                    <View style={tw`w-50 h-32 bg-pink-50 rounded-lg mx-1 flex items-center border-solid border-2 border-gray-200 shadow-2xl`}>
                        <Text style={tw`w-40 h-10 rounded bg-pink-500      px-2 py-1 text-white text-xl text-center font-bold -mt-3 shadow-2xl`}>من جلسة</Text>
                        <View style={tw`w-full flex-1`}>
                            <Text style={tw`mt-2 p-1 text-black text-base font-bold text-center `}>{item.fromSession}</Text>
                        </View>
                    </View>
                    <View style={tw`w-50 h-32 bg-sky-50 rounded-lg mx-1 flex items-center border-solid border-2 border-gray-200 shadow-2xl`}>
                        <Text style={tw`w-40 h-10 rounded bg-sky-500       px-2 py-1 text-white text-xl text-center font-bold -mt-3 shadow-2xl`}>إلى جلسة</Text>
                        <View style={tw`w-full flex-1`}>
                            <Text style={tw`mt-2 p-1 text-black text-base font-bold text-center `}>{item.toSession}</Text>
                        </View>
                    </View>
                    <View style={tw`w-50 h-32 bg-green-50 rounded-lg mx-1 flex items-center border-solid border-2 border-gray-200 shadow-2xl`}>
                        <Text style={tw`w-40 h-10 rounded bg-green-500     px-2 py-1 text-white text-xl text-center font-bold -mt-3 shadow-2xl`}>نوع الدعوى</Text>
                        <View style={tw`w-full flex-1`}>
                            <Text style={tw`mt-2 p-1 text-black text-base font-bold text-center `}>{item.typeCase}</Text>
                        </View>
                    </View>
                    <View style={tw`w-50 h-32 bg-rose-50 rounded-lg mx-1 flex items-center border-solid border-2 border-gray-200 shadow-2xl`}>
                        <Text style={tw`w-40 h-10 rounded bg-rose-500      px-2 py-1 text-white text-xl text-center font-bold -mt-3 shadow-2xl`}>القرار</Text>
                        <View style={tw`w-full flex-1`}>
                            <Text style={tw`mt-2 p-1 text-black text-base font-bold text-center `}>{item.decision}</Text>
                        </View>
                    </View>
                    <View style={tw`w-50 h-32 bg-white rounded-lg mx-1 flex items-center border-solid border-2 border-gray-200 shadow-2xl`}>
                        <Text style={tw`w-40 h-10 rounded bg-slate-200  px-2 py-1 text-slate-600 text-xl text-center font-bold -mt-3 shadow-2xl border-2 border-solid border-slate-300`}>حذف-تعديل</Text>
                        <View style={tw`w-full flex-1 items-center justify-center`}>
                            <TouchableOpacity onPress={()=>getItemIdSelected(item)} style={tw`bg-sky-200     mt-1 rounded py-0.5 px-2`}><Text style={tw`text-sky-600 text-base font-bold`}>تعديل</Text></TouchableOpacity>
                            <TouchableOpacity onPress={()=>navigateSingleCase(item?._id)} style={tw`bg-yellow-200  mt-1 rounded py-0.5 px-2`}><Text style={tw`text-yellow-700 text-base font-bold`}>عرض</Text></TouchableOpacity>
                            <TouchableOpacity onPress={()=>submitDeleteCase(item?._id)} style={tw`bg-red-400     mt-1 rounded py-0.5 px-2`}><Text style={tw`text-white text-base font-bold`}>حذف</Text></TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
        
        </>
    )
}

export default SingleRow
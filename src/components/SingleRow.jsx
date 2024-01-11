import { PixelRatio, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import tw from "twrnc"
import { setItemId, setDefendant, setNumber, setPlaintiff, setTheYear, setTypeCase, setButtonMood, setSesstionButton } from "../redux/reducers/caseStateSlice"
import { deleteCases, showCasesByDate } from "../redux/actions/casesAction"
import { useNavigation, useRoute } from "@react-navigation/native"
import { setDecision, setSessionDate, setSessionId } from "../redux/reducers/sessionStateSlice"
import { deleteSession } from "../redux/actions/sessionsAction"
import { setSendCaseId, setSessionInputVisiable } from "../redux/reducers/casesSlice"


const SingleRow = ({ item }) => {
    const fontScale = PixelRatio.getFontScale()
    const { dateId } = useRoute().params
    const dispatch = useDispatch()
    const { token } = useSelector((state) => state.authSlice)
    const navigation = useNavigation()

    // const navigateSingleCase = (id)=>{
    //     if(id){
    //         navigation.setParams({caseId: id})
    //         navigation.navigate("singleCaseScreen",{
    //             caseId: id
    //         })
    //     }
    // }
    //handle get item id selected 
    const getItemIdSelected = (item) => {
        dispatch(setButtonMood("edit"))
        dispatch(setItemId(item._id.toString()))
        dispatch(setDefendant(item.defendant))
        dispatch(setNumber(item.number))
        dispatch(setPlaintiff(item.plaintiff))
        dispatch(setTheYear(item.theYear))
        dispatch(setTypeCase(item.typeCase))
    }
    //handle submite delete cases
    const submitDeleteCase = (id) => {
        if (id) {
            dispatch(deleteCases({ id: id, token: token }))
        }
        dispatch(showCasesByDate({ token: token, date: dateId }));
    }
    //handle edite session 
    const selectedSessionToEdit = (session) => {
        dispatch(setSessionInputVisiable(true))
        dispatch(setSesstionButton("edit"))
        dispatch(setSessionId(session?._id))
        dispatch(setDecision(session?.decision))
        dispatch(setSessionDate(session?.sessionDate))
    }
    // handle delete session
    const removeSession = (id) => {
        dispatch(deleteSession({ sessionId: id }))
        dispatch(showCasesByDate({ token: token, date: dateId }));
    }

    // handle create session for specific case
    const createNewSession = (id) => {
        dispatch(setSendCaseId(id))
        dispatch(setSessionInputVisiable(true))
    }
    return (
        <>
            <ScrollView horizontal contentContainerStyle={tw`flex flex-row-reverse justify-center items-center p-5  bg-transparent`}>
                <View style={tw`w-50 h-32 bg-purple-50 rounded-lg mx-1 flex items-center border-solid border-2 border-gray-200 shadow-2xl`}>
                    <Text style={tw`w-40 h-10 rounded bg-purple-700    px-2 py-1 text-white text-[${fontScale * 20}px] text-center font-bold -mt-3 shadow-2xl`}>الرقم</Text>
                    <View style={tw`w-full flex-1`}>
                        <Text style={tw`mt-2 p-1 text-black text-[${fontScale * 16}px] font-bold text-center `}>{item?.number} لسنة {item?.theYear}</Text>
                    </View>
                </View>
                <View style={tw`w-50 h-32 bg-indigo-50 rounded-lg mx-1 flex items-center border-solid border-2 border-gray-200 shadow-2xl`}>
                    <Text style={tw`w-40 h-10 rounded bg-indigo-600     px-2 py-1 text-white text-[${fontScale * 20}px] text-center font-bold -mt-3 shadow-2xl`}>المدعى</Text>
                    <View style={tw`w-full flex-1`}>
                        <Text style={tw`mt-2 p-1 text-black text-[${fontScale * 16}px] font-bold text-center`}>{item?.plaintiff}</Text>
                    </View>
                </View>
                <View style={tw`w-50 h-32 bg-purple-50 rounded-lg mx-1 flex items-center border-solid border-2 border-gray-200 shadow-2xl`}>
                    <Text style={tw`w-40 h-10 rounded bg-purple-700      px-2 py-1 text-white text-[${fontScale * 20}px] text-center font-bold -mt-3 shadow-2xl`}>المدعى عليه</Text>
                    <View style={tw`w-full flex-1`}>
                        <Text style={tw`mt-2 p-1 text-black text-[${fontScale * 16}px] font-bold text-center `}>{item?.defendant}</Text>
                    </View>
                </View>
                <View style={tw`w-50 h-32 bg-indigo-50 rounded-lg mx-1 flex items-center border-solid border-2 border-gray-200 shadow-2xl`}>
                    <Text style={tw`w-40 h-10 rounded bg-indigo-600     px-2 py-1 text-white text-[${fontScale * 20}px] text-center font-bold -mt-3 shadow-2xl`}>نوع الدعوى</Text>
                    <View style={tw`w-full flex-1`}>
                        <Text style={tw`mt-2 p-1 text-black text-[${fontScale * 16}px] font-bold text-center `}>{item?.typeCase}</Text>
                    </View>
                </View>
                <View style={tw`w-120 h-32 bg-purple-50 rounded-lg mx-1 flex items-center  border-solid border-2 border-gray-200 shadow-2xl`}>
                    <Text style={tw`w-40 h-10 rounded bg-purple-700     px-2 py-1 text-white text-[${fontScale * 20}px] text-center font-bold -mt-3 shadow-2xl`}>تاريخ الجلسات</Text>
                    {item.sessions
                        ? <ScrollView nestedScrollEnabled={true} style={tw`w-full`}>
                            {item.sessions.map((singleSession) =>
                                <View style={tw`bg-indigo-100 flex-row justify-between border-b-[1px] border-solid border-slate-100`} key={singleSession._id}>
                                    <View style={tw`flex-row items-center justify-center`}>
                                        <TouchableOpacity onPress={() => removeSession(singleSession._id)} style={tw`bg-violet-500 m-0.5 rounded py-0.5 px-2`}>
                                            <Text style={tw`text-white text-[${fontScale * 16}px] font-bold`}>حذف</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => createNewSession(item._id)} style={tw`bg-indigo-500 m-0.5 rounded py-0.5 px-2`}>
                                            <Text style={tw`text-white text-[${fontScale * 16}px] font-bold`}>إضافة جلسة</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => selectedSessionToEdit(singleSession)} style={tw`bg-purple-500 m-0.5 rounded py-0.5 px-2`}>
                                            <Text style={tw`text-white text-[${fontScale * 16}px] font-bold`}>تعديل</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <Text style={tw`mt-2 p-1 text-black text-[${fontScale * 16}px] font-bold text-center `}>{singleSession.decision}</Text>
                                    <Text style={tw`mt-2 p-1 text-black text-[${fontScale * 16}px] font-bold text-center `}>{singleSession.sessionDate}</Text>
                                </View>
                            )
                            }
                        </ScrollView>
                        :
                        <View>
                            <Text style={tw`w-full text-center font-bold text-base mt-2`}>من فضلك اضف جلسات</Text>
                            <TouchableOpacity onPress={() => createNewSession()} style={tw`bg-indigo-500 m-0.5 rounded py-0.5 px-2`}>
                                <Text style={tw`text-white text-base font-bold`}>إضافة جلسة</Text>
                            </TouchableOpacity>
                        </View>
                    }
                </View>

                <View style={tw`w-50 h-32 bg-indigo-50 rounded-lg mx-1 flex items-center border-solid border-2 border-gray-200 shadow-2xl`}>
                    <Text style={tw`w-40 h-10 rounded bg-indigo-600  px-2 py-1 text-white text-[${fontScale * 20}px] text-center font-bold -mt-3 shadow-2xl `}>حذف-تعديل</Text>
                    <View style={tw`w-full flex-1 items-center justify-center`}>
                        <TouchableOpacity onPress={() => getItemIdSelected(item)} style={tw`bg-blue-600     mt-1 rounded py-0.5 px-2`}><Text style={tw`text-white text-base font-bold`}>تعديل</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => submitDeleteCase(item?._id)} style={tw`bg-blue-600     mt-1 rounded py-0.5 px-2`}><Text style={tw`text-white text-base font-bold`}>حذف</Text></TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

        </>
    )
}

export default SingleRow
import { useNavigation, useRoute } from "@react-navigation/native"
import { ScrollView, Text, TouchableOpacity, TextInput, View, PixelRatio } from "react-native"
import { Ionicons } from '@expo/vector-icons';
import tw from "twrnc"
import { useDispatch, useSelector } from "react-redux"
import { setButtonMood, setDefendant, setItemId, setNumber, setPlaintiff, setTheYear, setTypeCase } from "../redux/reducers/caseStateSlice";
import { addNewCases, showCasesByDate, updateCases } from "../redux/actions/casesAction";
import AddSession from "./AddSession";
import { setSessionInputVisiable } from "../redux/reducers/casesSlice";


const CreateCase = () => {
    const fontScale = PixelRatio.getFontScale()
    const dispatch = useDispatch()
    const { dateId } = useRoute().params
    const navigation = useNavigation()
    const { token } = useSelector((state) => state.authSlice)
    const { caseStates } = useSelector((state) => state.caseStateSlice)
    const { buttonMood } = useSelector((state) => state.caseStateSlice)

    // handle add new cases
    const submitCreateCase = () => {
        dispatch(addNewCases({
            number: caseStates.number,
            theYear: caseStates.theYear,
            plaintiff: caseStates.plaintiff,
            defendant: caseStates.defendant,
            typeCase: caseStates.typeCase,
            token: token
        }));
        // return inputs to empty value
        dispatch(setDefendant(""))
        dispatch(setNumber(""))
        dispatch(setPlaintiff(""))
        dispatch(setTheYear(""))
        dispatch(setTypeCase(""))
        dispatch(setSessionInputVisiable(true))
    }
    // handle update value of cases
    const submitUpdateCases = () => {
        dispatch(setButtonMood("create"))
        if (caseStates.itemId) {
            dispatch(updateCases({
                id: caseStates.itemId,
                number: caseStates.number,
                theYear: caseStates.theYear,
                plaintiff: caseStates.plaintiff,
                defendant: caseStates.defendant,
                typeCase: caseStates.typeCase,
                token: token
            }))
            dispatch(showCasesByDate({ token: token, date: dateId }));
            // return inputs to empty value
            dispatch(setDefendant(""))
            dispatch(setNumber(""))
            dispatch(setPlaintiff(""))
            dispatch(setTheYear(""))
            dispatch(setTypeCase(""))
        }
    }

    return (
        <>
            <View style={tw`flex-1 w-full p-5`}>
                <ScrollView style={tw`flex-1 bg-white/25 rounded-2xl my-2 p-5`}>
                    <View style={tw`flex flex-row justify-between items-center mb-2`}>
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            style={tw`flex flex-row items-center justify-center bg-transparent px-3 py-1 border-solid border-2 border-indigo-500 rounded-lg`}>
                            <Ionicons name="return-down-back-outline" size={fontScale * 20} color="black" />
                        </TouchableOpacity>
                        <Text style={tw`text-[${fontScale * 18}px] font-bold text-indigo-500`}>تاريخ الصفحة: {dateId}</Text>
                    </View>
                    <View>
                        <Text style={tw`text-center font-bold text-[${fontScale * 18}px]`}>رقم الدعوى</Text>
                        <TextInput
                            placeholder="رقم الدعوى"
                            style={tw`mb-4 placeholder:text-gray-900 rounded-xl text-[${fontScale * 18}px] mx-2 bg-[#f1f5f9]  p-2  text-center`}
                            onChangeText={(text) => dispatch(setNumber(text))}
                            value={`${caseStates.number}`}
                        />
                        <Text style={tw`text-center font-bold text-[${fontScale * 18}px]`}>لسنة</Text>
                        <TextInput
                            placeholder="لسنة"
                            style={tw`mb-4 placeholder:text-gray-900 rounded-xl text-[${fontScale * 18}px] mx-2 bg-[#f1f5f9]  p-2  text-center`}
                            onChangeText={(text) => dispatch(setTheYear(text))}
                            value={`${caseStates.theYear}`}
                        />
                        <Text style={tw`text-center font-bold text-[${fontScale * 18}px]`}>المدعى</Text>
                        <TextInput
                            placeholder="المدعى"
                            style={tw`mb-4 placeholder:text-gray-900 rounded-xl text-[${fontScale * 18}px] mx-2 bg-[#f1f5f9]  p-2  text-center`}
                            onChangeText={(text) => dispatch(setPlaintiff(text))}
                            value={`${caseStates.plaintiff}`}
                        />
                        <Text style={tw`text-center font-bold text-[${fontScale * 18}px]`}>المدعى عليه</Text>
                        <TextInput
                            placeholder="المدعى عليه"
                            style={tw`mb-4 placeholder:text-gray-900 rounded-xl text-[${fontScale * 18}px] mx-2 bg-[#f1f5f9]  p-2  text-center`}
                            onChangeText={(text) => dispatch(setDefendant(text))}
                            value={`${caseStates.defendant}`}
                        />
                        <Text style={tw`text-center font-bold text-[${fontScale * 18}px]`}>نوع الدعوى</Text>
                        <TextInput
                            placeholder="نوع الدعوى"
                            style={tw`mb-4 placeholder:text-gray-900 rounded-xl text-[${fontScale * 18}px] mx-2 bg-[#f1f5f9]  p-2  text-center`}
                            onChangeText={(text) => dispatch(setTypeCase(text))}
                            value={`${caseStates.typeCase}`}
                        />
                        {buttonMood === "create"
                            ? <TouchableOpacity onPress={() => submitCreateCase()} style={tw`bg-indigo-500 rounded-lg  my-1 p-1 flex items-center justify-center`}>
                                <Text style={tw`text-white font-bold text-[${fontScale * 18}px]`}>إنشاء</Text>
                            </TouchableOpacity>
                            : buttonMood === "edit" ? <TouchableOpacity onPress={() => submitUpdateCases()} style={tw`bg-indigo-500 rounded-lg  my-1 p-1 flex items-center justify-center`}>
                                <Text style={tw`text-white font-bold text-[${fontScale * 18}px]`}>تعديل</Text>
                            </TouchableOpacity> : ""
                        }

                    </View>
                </ScrollView>
                <TextInput />
            </View>
        </>
    )
}

export default CreateCase
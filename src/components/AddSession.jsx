import { Text, TextInput, TouchableOpacity, View } from "react-native"
import DateTimePicker from "@react-native-community/datetimepicker";
import { useDispatch, useSelector } from "react-redux"
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import tw from "twrnc"
import { useState } from "react";
import { setSesstionButton } from "../redux/reducers/caseStateSlice";
import { setDecision, setSessionDate } from "../redux/reducers/sessionStateSlice";
import { addNewSession, updateSession } from "../redux/actions/sessionsAction";
import { addNewCases, showCasesByDate } from "../redux/actions/casesAction";
import { useRoute } from "@react-navigation/native";
import { setSendCaseId, setSessionInputVisiable } from "../redux/reducers/casesSlice";
import { MaterialIcons } from '@expo/vector-icons';

const AddSession = () => {
    const { dateId } = useRoute().params
    const { token } = useSelector((state) => state.authSlice)
    // const [selectedDate, setSelectedDate] = useState()
    const dispatch = useDispatch()
    const { caseStates } = useSelector((state) => state.caseStateSlice)
    const { sendCaseId } = useSelector((state) => state.casesSlice)
    const { sessionButton } = useSelector((state) => state.caseStateSlice)
    const { decision } = useSelector((state) => state.sessionStateSlice)
    const { sessionDate } = useSelector((state) => state.sessionStateSlice)
    const { sessionId } = useSelector((state) => state.sessionStateSlice)
    const [fromVisible, setFromVisible] = useState(false)

    const handleSessionDate = (e, date) => {
        // setSelectedDate(date)
        dispatch(setSessionDate(date && `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}-${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}`))
        setFromVisible(!fromVisible)
    }
    // Add a session to the newly created case
    const addSession = () => {
        dispatch(addNewSession({ caseId: sendCaseId, decision: decision, sessionDate: sessionDate }))
        dispatch(setDecision(""))
        dispatch(setSessionDate(""))
        dispatch(setSendCaseId(""))
        dispatch(setSessionInputVisiable(false))
        dispatch(showCasesByDate({ token: token, date: dateId }));
    }
    // edit sission
    const editSession = () => {
        dispatch(updateSession({ decision: decision, sessionId: sessionId, sessionDate: sessionDate }))
        dispatch(showCasesByDate({ token: token, date: dateId }));
        dispatch(setSesstionButton("add"))
        dispatch(setDecision(""))
        dispatch(setSessionDate(""))
        dispatch(setSessionInputVisiable(false))
        dispatch(setSendCaseId(""))
    }
    // cancel add or edit session
    const handleCancelSession = () => {
        dispatch(setSessionInputVisiable(false))
        dispatch(setDecision(""))
        dispatch(setSessionDate(""))
        dispatch(setSendCaseId(""))
        dispatch(setSesstionButton("add"))
    }
    return (
        <>
            <View style={{ backgroundColor: "rgba(0, 0, 0, 0.75)", display: "flex", justifyContent: "center", alignItems: "center", position: "absolute", height: "100%", width: "100%", bottom: 0, left: 0, zIndex: 5000 }}>
                <MaterialIcons name="cancel" size={32} color="white" onPress={() => handleCancelSession()} />
                <View style={tw`bg-blue-600 flex items-center justify-center py-2 px-5 rounded-xl`}>
                    <Text style={tw`font-bold text-xl text-center text-white`}>اضافة جلسة</Text>
                </View>
                <View style={tw`bg-white p-5 rounded-xl w-full`}>
                    <TouchableOpacity
                        style={tw`mb-4 rounded-xl text-lg mx-2 bg-white bg-opacity-40 p-2  border-b-2 border-solid border-b-slate-300 text-center`}
                        onPress={() => setFromVisible(!fromVisible)}>
                        <Text style={tw`text-black text-base font-bold text-center`}>{sessionDate ? sessionDate : "حدد التاريخ"}</Text>
                    </TouchableOpacity>
                    {fromVisible && <DateTimePicker
                        value={new Date()}
                        onChange={handleSessionDate}
                        mode="date"
                    />}
                    <TextInput
                        placeholder="القرار"
                        style={tw`mb-4 placeholder:text-gray-900 rounded-xl text-lg mx-2 bg-white bg-opacity-40 p-2  border-b-2 border-solid border-b-slate-300 text-center`}
                        onChangeText={(text) => dispatch(setDecision(text))}
                        value={`${decision}`}
                    />
                    {sessionButton === "add" ?
                        <TouchableOpacity
                            disabled={!sendCaseId}
                            onPress={() => addSession()}
                            style={[[tw`flex-row items-center justify-center bg-blue-500 rounded-md px-2 py-1`, !sendCaseId ? { opacity: 0.6 } : { opacity: 1.0 }]]}>
                            <Text style={tw`text-white font-bold text-base px-1`}>إضافة</Text>
                            <Ionicons name="add-circle-sharp" size={24} color="#fff" />
                        </TouchableOpacity>
                        : sessionButton === "edit" ?
                            <TouchableOpacity
                                onPress={() => editSession()}
                                style={[tw`flex-row items-center justify-center bg-blue-500 rounded-md px-2 py-1`, !sessionId ? { opacity: 0.6 } : { opacity: 1.0 }]}>
                                <Text style={tw`text-white font-bold text-base px-1`}>تعديل</Text>
                                <Feather name="edit" size={24} color="#fff" />
                            </TouchableOpacity>
                            : ""
                    }
                </View>
            </View>
        </>
    )
}

export default AddSession
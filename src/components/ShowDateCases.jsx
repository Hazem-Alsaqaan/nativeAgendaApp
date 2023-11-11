import {  View , StyleSheet, Text, ActivityIndicator} from "react-native"
import SingleRow from "./SingleRow"
import { useDispatch, useSelector } from "react-redux"
import { memo, useEffect } from "react"
import { showCasesByDate } from "../redux/actions/casesAction"
import { useRoute } from "@react-navigation/native"



const ShowDateCases = ({isRefresh})=>{
    const dispatch = useDispatch()
    const {token} = useSelector((state)=>state.authSlice)
    const {dateId} = useRoute().params
    const {casesByDate} = useSelector((state)=>state.casesSlice)
    const {casesByDateIsLoading} = useSelector((state)=>state.casesSlice)
    
    useEffect(()=>{
        dispatch(showCasesByDate({token: token, date: dateId}));
    },[isRefresh])

    return(
        <>
            <View style={styles.container}>
                {casesByDateIsLoading ? <ActivityIndicator size="large"/>
                    : casesByDate.length > 0 ? casesByDate?.map((item)=><SingleRow key={item?._id} item = {item}/>)
                    : <Text>لا توجد قضايا مسجلة في هذا التاريخ</Text>
                }  
            </View>
            
        </>
    )
}

export default memo(ShowDateCases)

const styles = StyleSheet.create({
    container: {
        // paddingVertical: 50,
        backgroundColor: "#ffffff46",
        width: "100%",
        flex: 1,
        display: "flex",
        alignItems: "center",
    }
})

// https://www.freepik.com/icon/reply_8367765#fromView=search&term=go+back&page=3&position=85
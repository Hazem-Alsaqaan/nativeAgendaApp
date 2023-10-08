import {  View , StyleSheet} from "react-native"
import SingleRow from "./SingleRow"



const ShowDateCases = ()=>{
    const dateCases = [
        {
            _id: 1,
            number: "155555",
            plaintiff: "عمرو اديب",
            defendant: "مرتضى منصور",
            caseType: "تعويض",
            fromSession: "30-08-2023",
            toSession: "30-08-2023",
            decision: "اجل للاطلاع"
        },
        {
            _id: 2,
            number: "1256",
            theYear: "2023",
            plaintiff: "عادل امام",
            defendant: "سعيد صالح",
            caseType: "صحة توقيع",
            fromSession: "30-08-2023",
            toSession: "30-08-2023",
            decision: "اجل للاطلاع"
        },
        {
            _id: 3,
            number: "1256",
            theYear: "2023",
            plaintiff: "عادل امام",
            defendant: "سعيد صالح",
            caseType: "صحة توقيع",
            fromSession: "30-08-2023",
            toSession: "30-08-2023",
            decision: "اجل للاطلاع"
        },
        {
            _id: 4,
            number: "1256",
            theYear: "2023",
            plaintiff: "عادل امام",
            defendant: "سعيد صالح",
            caseType: "صحة توقيع",
            fromSession: "30-08-2023",
            toSession: "30-08-2023",
            decision: "اجل للاطلاع"
        },
    ]
    return(
        <>
        <View style={styles.container}>
            {
                dateCases.map((item)=><SingleRow key={item._id} item = {item}/>)
                // <FlatList
                //     data={dateCases}
                //     renderItem={({item})=> <SingleRow item = {item}/>}
                //     keyExtractor={(item)=> item._id}
                // />
            }  
        </View>
        </>
    )
}

export default ShowDateCases

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
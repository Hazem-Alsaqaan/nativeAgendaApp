import { useRoute } from "@react-navigation/native"
import { Text, View } from "react-native"
import tw from "twrnc"


const DateSelectedScreen = ()=>{
    const {dateId} = useRoute().params

    
    return(
        <>
            <View style={tw`flex-1 items-center justify-center`}>
                <Text>{dateId}</Text>
            </View>
        </>
    )
}

export default DateSelectedScreen
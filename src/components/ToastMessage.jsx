import { ToastAndroid } from "react-native"


const ToastMessage = (toastMessage)=>{
    if(toastMessage){
        ToastAndroid.showWithGravity(
            toastMessage,
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
        )
    }
}
export default ToastMessage
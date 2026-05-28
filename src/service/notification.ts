import * as Notification  from "expo-notifications";
import * as Device from "expo-device";


export const requestNotificationPermission=async()=>{

    if(!Device.isDevice){
        alert("use physical device");
        return
    }

    const {status:exsistingStatus}=
    await Notification.requestPermissionsAsync();

    let finalStatus=exsistingStatus;

    if(exsistingStatus !== 'granted'){
        const {status}=  await Notification.requestPermissionsAsync();
        finalStatus=status;

    }
    if(finalStatus !== "granted"){
        alert("Permission Denied");
        return ;
    }
}

export const sendOrderNotification=async()=>{
    await Notification.scheduleNotificationAsync({
        content:{
            title:"Order Placed",
            body:"Your Order placed Succesfully"
        },
        trigger:null
    })
}
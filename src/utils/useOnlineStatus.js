import {useState,useEffect}from "react";

const useOnlineStatus =()=>{
    const [onlineStatus,setOnlineStatus]=useState(true);



    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setOnlineStatus(false);

        })
          window.addEventListener("online",()=>{
            setOnlineStatus(true);

        })

    },[]);
    return onlineStatus;
    //check online status 
    //return a boolean value 

}
export default useOnlineStatus;
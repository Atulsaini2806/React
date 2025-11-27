import { useState, useEffect } from "react";
import MenuData from "./MenuData";

const useRestaurantMenu = (resId) =>{
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
    // Set MenuData only once when component mounts
    // console.log(MenuData.data);
    
    setResInfo(MenuData.data);
   }, []); // ✅ empty dependency array → runs once


    return resInfo;
}

export default useRestaurantMenu;
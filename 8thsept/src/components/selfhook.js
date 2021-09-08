import react,{useState,useEffect} from "react";

export default function useCustomhooks() {
    const [value, setValue] = useState();
    useEffect(() => {
        windowCheck();
        window.addEventListener("resize",windowCheck);
        return()=>{
            window.removeEventListener("resize");
        };
    },[]);
    const windowCheck = () => {
        if (window.innerWidth > 950) return setValue("large");
        if (window.innerWidth < 950 && window.innerWidth > 700) return setValue("medium")
        if (window.innerWidth < 700) return setValue("small");
    };
    return value;
}
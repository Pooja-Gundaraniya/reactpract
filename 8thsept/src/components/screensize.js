import React from "react";
import useCustomhooks from "./selfhook"

const ScreenSize = () => {
    const value = useCustomhooks();

return(
    <>
    <h1>we are in {value}</h1>
    </>
)
}
export default ScreenSize;
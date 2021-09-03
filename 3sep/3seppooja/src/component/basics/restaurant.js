import React, { useState } from "react";
import "./style.css";
import Maggie from "../basics/Maggie.png";
import Menu from "./menuapi";
import  MenuCard  from "./menucard";

export const Restaurant = () => { 
    // const [MenuData, setMenuData] =useState(Menu);
    // console.log(MenuData)
    return (
        <MenuCard MenuData={Menu}/>
    )
}
export default Restaurant;
import React, {useState} from "react";
import useToggler from "../hooks/useToggler";

export default function Toggler(props){
    const [isHappy, toggleIsHappy] = useToggler(true);
    const [isHealty, toggleIsHealty] = useToggler();
    return(
        <div>
            <button onClick={toggleIsHappy}>{isHappy?"Happy":"Sad"}</button>
            <button onClick={toggleIsHealty}>{isHealty?"Healty":"Sick"}</button>
        </div>
    )
}
import Fruitlist from "../Fruit/Fruitlist.jsx";
import {useState} from "react";
import './Button.css';

function Button(props) {
    return (
        <button type={props.type} className={props.className} onClick={props.onClick}>{props.value}</button>
    )

}


export default Button;
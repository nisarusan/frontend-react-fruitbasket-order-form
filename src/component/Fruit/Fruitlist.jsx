import React from "react";
import Button from "../Button/Button.jsx";
import './Fruitlist.css'

function Fruitlist({emoji, title, stockNow, minusStock, increaseStock}) {
    return (
        <li>
            <p> {emoji} {title}</p>
            <div className="stock">
                <Button type="button" className="minus" onClick={minusStock} value="-"/>
                {stockNow}
                <Button type="button" className="increase" onClick={increaseStock} value="+"/>
            </div>
        </li>
    );
}

export default Fruitlist;

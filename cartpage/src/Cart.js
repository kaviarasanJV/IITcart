import React, { useState } from "react";
import { useContext } from "react";
import { cartContext } from "./App";
import "./Cart.css";

function Cart({ index, price, title, description }) {
    const { subtotal, setSubtotal, addToTotal, subtractFromTotal } = useContext(cartContext);
    const [quantity, setQuantity] = useState(0);
    
   
    function IncrementPriceCalculator() {
        setQuantity(() => quantity + 1);
        setSubtotal(() => price * quantity);
        addToTotal(price);
    }
    function DecrementpriceCalculator() {
        if(quantity >0){
            setQuantity(() => quantity - 1);
            console.log(quantity);
            setSubtotal(() => price * quantity);
            subtractFromTotal(price);
        }
        
    }
    return (
        <div style={{ width: "1750px", height: 150, ffloat:"right", border: "green", border: "2px solid #333", backgroundColor: "yellow", justifyContent: "center", alignItems: "center" }}>
                <br />
                {title}, <br />{description} <br />
                <input
                    type="text"
                    value={quantity}
                />
                <button onClick={()=>IncrementPriceCalculator()}>+</button>
                <button onClick={DecrementpriceCalculator}>-</button>{price}<br />
                <button>REMOVE</button>
                <br /><br />
                <br /><br />
                <br /><br />
            </div>
            )
}
            export default Cart;
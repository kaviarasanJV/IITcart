import React from "react";
import {useContext, useState} from "react";
import {cartContext} from "./App";
import Cart from "./Cart";

function Carts(){
        const {products, subtotal, getTotal} = useContext(cartContext);
       
    return(
        <>
        Carts
        {/* {products.products.map((e)=><div><pre>{e.title}   {e.description}    {e.price} {e.thumbnail}</pre></div>)} */}
        {products.products.map((e, index)=><Cart key={index} title={e.title}  
         description={e.description}    price={e.price} />)}
        <hr />
        <h2>SUBTOTAL</h2>    <h1>{subtotal}</h1>
        <h2>SHIPPING</h2>   <h1>free</h1>
        <hr />
        <h1>TOTAL</h1>: {getTotal()}
       
        </>
    )
}
export default Carts;
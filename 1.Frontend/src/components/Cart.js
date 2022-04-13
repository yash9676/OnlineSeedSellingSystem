import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import { url } from "../common/constant";
import CartItems from "./CartItems";
import HomePageNavBar from "./HomePageNavBar";


const Cart = () => {

  const [cartdata, setCartData] = useState([]);
  const history = useHistory();

  const isSignin = useSelector((state) => state.isSignin);
  const cartItems = useSelector((state) => state.cartItems);

  if(isSignin.status === false){
    alert('please signin first!!')
    history.push('/signin')
  }

    useEffect(() => {
        getCartItems();
    } , []);

    const getCartItems = () => {
        axios.get(url+"/user/cartItems/"+isSignin.user.id).then((response) => {
            const result = response.data;
            console.log(result);
            if (result.status === "OK" ) {
                setCartData(result.response);
            }else{
                alert("please sign in first");
                history.push('/signin');
            }
        })
    }
    return(
        <div>
            <HomePageNavBar/>
            <h2>Cart details</h2>
            <CartItems
                onItemsSelect={getCartItems}
                items={cartdata}
            />
        </div>
    )
}
export default Cart;
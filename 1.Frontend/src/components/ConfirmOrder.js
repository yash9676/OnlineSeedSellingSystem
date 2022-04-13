import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeFromCartAction } from "../actions/cartActions";
import axios from "axios";
import { url } from "../common/constant";
import {send} from 'emailjs-com';
import "./OrderConfirm.css";
import HomePageNavBar from "./HomePageNavBar";

const ConfirmOrder = () => {
    const location = useLocation();
    const history = useHistory();
    const dispatch = useDispatch();
    const isSignin = useSelector(state => state.isSignin);

    const productId = location.state.productId;

    const goToHome = () => {
        history.push("/");
    }

    useEffect (() => {
      removeCartItems();
      onMail();
    } , [])
    const onMail = () => {

      let msg = 'Order Placed Sucessfully injoyyyyyyyyyyy..';
  
      let tosend = {
              from_name: 'OnlineSeedAdmin',
              to_name: isSignin.user.firstName,
              message: msg,
              reply_to: isSignin.user.email,
              }
      send(
          'service_7dgqs6r',
          'template_i2zbzrl',
          tosend,
           'MhF64rquSPwWM4n9B'
        )
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert('Mail Send Sucessfully!!')
          })
          .catch((err) => {
            console.log('FAILED...', err);
          });
  }

    const removeCartItems = () => {
      console.log(productId);
      axios.delete(url+'/user/cart/'+productId).then((response)=>{
        const result = response.data;
        if(result.status === 'OK'){
          dispatch(removeFromCartAction(productId));
        }else{
          alert("failed to remove product");
        }
      })
    }

    return(
        <div class="container">
          <HomePageNavBar/>
      <div class="row"> 
        <div class="col-md-6 mx-auto mt-5">
          <div class="payment">
            <div class="payment_header">
              <div class="check">
                <i class="bi bi-check">
                  <b class="tick-mark">✓</b>
                </i>
              </div>
            </div>
            <div class="content">
              <p> </p>
              <p></p>
               
              <h2>Order Confirm !</h2>
              <h3>{isSignin.user.fname}</h3>
              <p></p>
              <p>
                <i>Thank You For order! Your order on it's way.. </i>
              </p>
            </div>
            <button
              onClick={() => {
                goToHome();
              }}
              className="btn btn-success back-btn"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
    )
}
export default ConfirmOrder;
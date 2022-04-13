import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import './OrderConfirm.css'
import { removeFromCartAction } from "../actions/cartActions";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import HomePageNavBar from "./HomePageNavBar";



const ItemsRemoved = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const location = useLocation();
    // const productDetails = location.state.product;
    const isSignin = useSelector(state => state.isSignin);
    // dispatch(removeFromCartAction(productDetails));
    console.log("in items removed");
    const goToCart = () => {
        console.log('go to cart');
        history.push("/cartDetails");  
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

                            <h2>Item Removed Sucessfully !!</h2>
                            <p></p>
                            <p>
                            <i>Don't Miss the Latest Collection.. </i>
                            </p>
                        </div>
                        <button
                            onClick={() => {
                                    goToCart();
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
export default ItemsRemoved;
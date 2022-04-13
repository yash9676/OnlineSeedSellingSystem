import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { removeFromCartAction } from "../actions/cartActions";
import { url } from "../common/constant";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useDispatch  } from "react-redux";
import Swal from "sweetalert2";

const CartItems =({items,onItemsSelect})=>{

    console.log(items);
    const [cartdata, setCartData] = useState([]);
    const isSignin = useSelector((state) => state.isSignin);
    const history = useHistory();
    const dispatch = useDispatch();

    const Orderdetails = (order) => {
        let selecteItem = {
            file: order.productId.file,
            prodName: order.productId.prodName,
            price: order.price,
            productQty: order.productQuantity,
            id: order.id,
            
        }
        console.log(selecteItem);
        history.push('/orderdetails',{order:selecteItem});
    }

    const removeFromCart = (product) => {
        console.log(product.id);
        axios.delete(url+"/user/deleteCart/"+product.id).then((response) => {
            const result = response.data;
            console.log(result);

            if (result.status === "OK" ) {
               
                history.push('/item-deleted',{product:product});
            }else{
                alert("product not found");
            }
        })
      //   axios.get(url+"/user/cartItems/"+isSignin.user.id).then((response) => {
      //     const result = response.data;
      //     console.log(result);
      //     if (result.status === "OK" ) {
      //         setCartData(result.response);
      //     }else{
      //         alert("please sign in first");
      //         history.push('/signin');
      //     }
      // })
    }

    return(
        <div className="slider-container">
        {items.map((item) => {
          return (
            <div
              className="item-container"
              onClick={() => {
                onItemsSelect(item);
              }}
            >
              <div className="style">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={'/images/'+item.productId.file}
                      className="image"
                      height="200px"
                      width="200px"
                      alt=" "
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                    <div className="card-text">
                        <h5>Name:{item.productId.prodName} </h5>
                      </div>
                      <div className="card-text">
                        <h5>Quantity :{item.productQuantity} </h5>
                      </div>
                      <div className="card-text">
                        <h2>Price :{item.price}/-</h2>
                      </div>
                      <div className="card-text">
                      <button onClick={()=>{
                       
                      Orderdetails(item);
                      }} type="button" class="btn btn-success">
                       Continue
                      </button>
                      &emsp;                        
                        <button
                          class="btn btn-danger"
                          onClick={() => {
                            removeFromCart(item);
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    )
    
}

export  default CartItems;
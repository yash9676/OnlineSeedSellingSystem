import React from "react";
import { useHistory,useLocation } from "react-router-dom";
import "./Orderdetails.css"
import { url } from "../common/constant";
import { format } from "date-fns";
import { useSelector } from "react-redux";
import HomePageNavBar from "./HomePageNavBar";

const OrderDetails = () => {

    const location = useLocation();
    const history = useHistory();
    const isSignin= useSelector(state => state.isSignin);
    const order = location.state.order;

    const date = new Date();
    var formattedDate = format(date, "yyyy-MM-dd");
    var ddate = new Date(formattedDate);
    let ddelivery = new Date (ddate.setDate(ddate.getDate() + 3));
    var delivery = format(ddelivery, "yyyy-MM-dd");

    const confirmOrder = (orderedItems) => {
        console.log(orderedItems)
        let data = {
            id: orderedItems.id,
            orderDate: formattedDate,
            deliveryDate: delivery,
            prodId: order.id,
        };
        console.log(data);
        var totalAmount = (order.price*order.productQty) + 0.09 * order.price
        console.log(totalAmount);
        history.push('/payment',{orderData:data,totalAmount:totalAmount});
    };

    const cancelOrder = () => {
        history.push("/");
    }

    return(
        <div>
          <HomePageNavBar/>
            <h2 className="page-title">Order Details</h2>

      <div className="style">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={'/images/'+order.file}
              
              className="orderimage"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h6 className="card-text">Product Name:{order.prodName}</h6>
              <h6 className="card-text">Quantity:{order.productQty}</h6>
              <h6 className="card-text">Delivery Address</h6>
              <h6 className="card-text">House No : {isSignin.user.address.houseNo}</h6>
              <h6 className="card-text">Street   : {isSignin.user.address.street}</h6>
              <h6 className="card-text">City   : {isSignin.user.address.city}</h6>
              <h6 className="card-text">State   : {isSignin.user.address.state}</h6>
              <h6 className="card-text">Pincode   : {isSignin.user.address.pincode}</h6>
              <h5 className="card-text">
                Final Amount: Rs. {(order.price*order.productQty) + 0.09 * order.price}/-
              </h5>
              <div>
                <div className="buttonstyle">
                  <button
                    onClick={() => {
                      console.log(order)
                      confirmOrder(order);
                    }}
                    className="btn btn-success"
                  >
                    Confirm Order
                  </button>
                  &emsp;
                  <button 
                   onClick={() => {
                    cancelOrder();
                  }}
                  className="btn btn-warning">Cancel Order</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}

export  default OrderDetails;
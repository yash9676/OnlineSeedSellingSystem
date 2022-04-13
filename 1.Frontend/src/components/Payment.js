import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useLocation } from 'react-router'
import { useHistory } from "react-router-dom";
import { url } from '../common/constant'
import HomePageNavBar from './HomePageNavBar'

const Payment = () =>{

    const isSignin = useSelector(state => state.isSignin);
    const [cardNumber,setCardNumber] = useState('');
    const [accName,setAccName] = useState('')
    const [date,setDate] = useState('')
    const [cvv, setCvv] = useState(0)
    const [oid, setOid] = useState(0)

    const history = useHistory();
    const location = useLocation();

    const totalAmount = location.state.totalAmount;
    const orderDetails = location.state.orderData;

    const makePayment = (ordrId) =>{
      console.log(ordrId);
      var data = {
        oid : ordrId.id,
        accName: accName,
        cardNumber: cardNumber,
        uid: isSignin.user.id,
        totalAmount: totalAmount,
      }
      console.log("total amt "+totalAmount);
      console.log(data);
      axios.post(url+'/user/payment',data).then((response)=>{
        const result = response.data;
        if(result.status === 'OK'){
          alert('Payment Successful');
          history.push('/orderConfirm',{productId:orderDetails.prodId});
        }else{
          alert('Payment Failed please try again after sometime');
        }
      })

    }

    const userPayment = () =>{
        if(accName.length === 0 || cardNumber.length === 0 || date.length === 0 || cvv.length === 0){
            alert('Please fill all the fields')
        }else{
            let orderDetail = {
              odate:orderDetails.orderDate,
              totalPrice:totalAmount,
              uid:isSignin.user.id,
              pid:orderDetails.id,
              ddate:orderDetails.deliveryDate,
            }
            console.log("userpay"+orderDetail)

            axios.post(url+'/user/orders',orderDetail).then((response)=>{
              const result = response.data;
              if(result.status === 'OK'){
                setOid(result.response)
                makePayment(result.response)
              }else{
                alert('Something went wrong')
                history.push('/');
              }
            })

          }
    }

    return(
      <div>
        <HomePageNavBar/>
        <div class="modal-lg sign-in">
          
      <div >
        <h2 className="page-title">Your Payment Details</h2>
        <div class="col-12">
          <label class="form-label"><b>Card Holder's Name</b></label>
          <input onChange={(event) => {
            setAccName(event.target.value)
          }}
            type="text" class="form-control" placeholder="Enter card holder name" />
        </div>
        <div class="col-12">
          <label class="form-label"><b>Card Number</b></label>
          <input onChange={(event) => {
            setCardNumber(event.target.value)
          }}
            type="number" class="form-control" placeholder="Enter card number" />
        </div>
        <div class="col-md-6">
          <label class="form-label"><b>Expiration Date</b></label>
          <input onChange={(event) => {
            setDate(event.target.value)
          }}
            type="date" class="form-control" />
        </div>
        <div class="col-md-6">
          <label class="form-label"><b>CVV</b></label>
          <input onChange={(event) => {
            setCvv(event.target.value)
          }}
            type="password" class="form-control" placeholder="Enter CVV Number" />
        </div>
        <div class="col-12">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck" />
            <label class="form-check-label" for="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <div class="col-md-6">
          <button onClick={() => {
            userPayment()
          }} class="btn btn-success">Confirm Payment</button>&emsp;
          <button onClick={() => {
          
            history.push('/cartDetails')
          }} class="btn btn-warning">Back</button>
        </div>
        <div class="col-6">
        </div>
      </div>
    </div>
    </div>
    
  )
    
}

export default Payment;
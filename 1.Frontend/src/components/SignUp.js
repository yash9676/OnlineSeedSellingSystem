import React from "react";
import { useState } from "react";
import axios from "axios";
import { url } from "../common/constant";
import { useHistory } from "react-router-dom";
import HomePageNavBar from "./HomePageNavBar";

const SignUp = () => {

  const [firstName, setFname] = useState("");
  const [lastName, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [houseNo,setHouseNo] = useState("");
  const [street,setStreet] = useState("");
  const [city,setCity] = useState("");
  const [state,setState] = useState("");
  const [pincode,setPincode] = useState("");
  //const [type, setType] = useState("");
  const history = useHistory();



  const addUser = ()=>{

    if(password !== confirmPassword && password.length < 3 && phoneNumber.length < 10 && firstName.length < 3 && lastName.length < 3 && email.length < 3 && houseNo.length < 3 && street.length < 3 && city.length < 3 && state.length < 3 && pincode.length < 3){
      alert("all fields are mandatory");
    }else if(password.length < 3){
      alert("password must be atleast 3 character");
    }else if(phoneNumber.length < 10){
      alert("phone number must be atleast 10 digit");
    }else if(firstName.length < 3){
      alert("first name must be atleast 3 character");
    }else if(lastName.length < 3){  
      alert("last name must be atleast 3 character");
    } else{
      let data = {
        firstName:firstName,
        lastName:lastName,
        email:email,
        password:password,
        confirmPassword:confirmPassword,
        phoneNumber:phoneNumber,
        houseNo:houseNo,
        street:street,
        city:city,
        state:state,
        pincode:pincode
        // type:"USER"
      };
      console.log(data);
      // SENDS DATA TO THE API

      axios.post(url+"/user/add", data).then((response) => {
        const result = response.data;
        if (result.status === "OK") {
          alert("successfully registered");
          history.push("/signin");
        } else {
          alert("email already exist");
        }
      });
    }

  }
  

  return (
    <div className="text-center">
      <HomePageNavBar/>
        <div className="form-group row">
          <label for="email5" className="col-sm-2 col-form-label">
            First Name
          </label>
          <div className="col-sm-3">
            <input
              type="text"
              className="form-control"
              id="fname"
              placeholder="First Name"
              onChange={(event) => {setFname(event.target.value)}}
              required
            />
          </div>
          <label for="email5" className="col-sm-2 col-form-label">
            Last Name
          </label>
          <div className="col-sm-3">
            <input
              type="text"
              className="form-control"
              id="lname"
              placeholder="last Name"
              onChange={(event) => {setLname(event.target.value)}}
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="email5" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-8">
            <input
              type="email"
              className="form-control"
              id="email5"
              placeholder="Email"
              onChange={(event) => {setEmail(event.target.value)}}
              
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="password5" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-8">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              onChange={(event) => {setPassword(event.target.value)}}
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="password5" className="col-sm-2 ">
            Confirm Password
          </label>
          <div className="col-sm-8">
            <input
              type="password"
              className="form-control"
              id="cnfpass"
              placeholder="Confirm Password"
              onChange={(event) => {setConfirmPassword(event.target.value)}}
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="password5" className="col-sm-2 ">
            Contact Number
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              id="pNo"
              placeholder="phone number"
              onChange={(event)=> setPhone(event.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="password5" className="col-sm-2 ">
            House No
          </label>
          <div className="col-sm-8">
            <input
              type="number"
              className="form-control"
              id="pNo"
              placeholder="House No"
              onChange={(event)=> setHouseNo(event.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="password5" className="col-sm-2 ">
            Street
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              id="pNo"
              placeholder="street"
              onChange={(event)=> setStreet(event.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="password5" className="col-sm-2 ">
            City
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              id="pNo"
              placeholder="city"
              onChange={(event)=> setCity(event.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="password5" className="col-sm-2 ">
            State
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              id="pNo"
              placeholder="State"
              onChange={(event)=> setState(event.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="password5" className="col-sm-2 ">
            pincode
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              id="pNo"
              placeholder="pincode"
              onChange={(event)=> setPincode(event.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-8 offset-sm-2">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="check5" />
              <label className="form-check-label" for="check5">
                I have agree with the terms and conditions.
              </label>
            </div>
          </div>
        </div>
        <div>
          <div className="col-sm-12 text-center">
            <button  className="btn btn-primary" onClick={addUser}>
              Register
            </button>
          </div>
        </div>
      
    </div>
  );
}
export default SignUp;

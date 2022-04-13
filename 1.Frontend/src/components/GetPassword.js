import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState,useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { url } from "../common/constant";
import {send} from 'emailjs-com';
import HomePageNavBar from "./HomePageNavBar";


const GetPassword = () => {

    const [email, setEmail] = useState('');
    const history = useHistory()  //to redirect to another component
    
    useEffect (() => {
        onMail();
      } , [])

    const onMail = (newPassword) => {
        
        let msg = 'Your Password is : '+newPassword;
  
      let tosend = {
              from_name: 'OnlineSeedAdmin',
              to_name: email,
              message: msg,
              reply_to: email,
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

    const handlePassword = () => {
        if(email.length === 0){
            alert('please enter email')
        }else{
            let data = {
                email:email
            };
            console.log(data);
            axios.get(url+"/user/forgot/"+email).then((response) => {
                const result = response.data;
                console.log(result);
                if (result.status === "OK" ) {
                    onMail(result.response);
                    alert("password sent to your email");
                    history.push("/signin");
                }else{
                    alert("email not found");
                    
                }
            })
        }
    }
    
    return(
        <div className="text-center">
            <HomePageNavBar/>
            <div class="form-group row">
                <label for="email5" class="col-sm-2 col-form-label">
                        Email
                 </label>
                <div class="col-sm-4">
                <input
                    type="email"
                    class="form-control"
                    placeholder="Email"
                    onChange={(event) => {setEmail(event.target.value)}}
                />
                </div>
            </div>
            <div class="col-sm-8 text-center">
                <button  onClick={handlePassword} class="btn btn-primary">
                    Get Password
                </button>
            </div>
        </div>
    )
}

export default GetPassword;

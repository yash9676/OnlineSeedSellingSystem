
import axios from "axios";
import { url } from "../common/constant";
import { useDispatch } from "react-redux";
import { LoginAction } from "../actions/LoginAction";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { addToCartAction } from "../actions/cartActions";
import HomePageNavBar from "./HomePageNavBar";


const SignIn = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()  //to redirect to another component
  const dispatch = useDispatch()  //to dispatch the action

  const pushToCart = (user)=>{
    console.log("incoming user id "+user.id)
    axios.get(url+"/user/cartItems/"+user.id).then((response) => {
      const result = response.data;
      console.log(result);
      if (result.status === "OK" ) {
        let cartContent = result.response;
        console.log(cartContent);

        for (let index = 0; index < cartContent.length; index++) {
          dispatch(addToCartAction(cartContent[index]));
          
        }
        
      }else{
        alert("cart not found");
      }
    })
  }

const UserLogin = () => {
  if (email.length === 0) {
    alert('please enter email')
  } else if (password.length === 0) {
    alert('please enter password')
  } else {
    let data = {
      email:email,
      password:password
     };
    console.log(data);
    // send user info to the API
    axios.post(url+"/user/signin", data).then((response) => {
      const result = response.data;
      if (result.status === "OK") {
        dispatch(LoginAction(result.response));
        if(result.response.type === "ADMIN"){
          
        Swal.fire({
          icon: 'success',
          title: 'Login As Admin '+email+' Successfully',
          showConfirmButton: false,
          timer: 1500
        })
        pushToCart(result.response);
        history.push('/allProduct')
        }else{
          Swal.fire({
            icon: 'success',
            title: 'Login As '+email+' Successfully',
            showConfirmButton: false,
            timer: 1500
          })
          pushToCart(result.response);
          history.push('/')
        }
        
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          text: 'Email or Password Incorrect!',
          footer: '<a href="/forgotPassword">forgot password</a>'
        })
      }
    });
  }
}

  return (
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
        <div class="form-group row">
          <label for="password5" class="col-sm-2 col-form-label">
            Password
          </label>
          <div class="col-sm-4">
            <input
             
              type="password"
              class="form-control"
              placeholder="Password"
              onChange={(event) => {setPassword(event.target.value)}}
            />
          </div>
        </div>
        
        <div >
          <div class="col-sm-8 text-center">
            <button  onClick={UserLogin} class="btn btn-primary">
              Sign in
            </button>
            <Link to="/signup"> <a className="btn btn-warning" href=" ">SignUp</a> </Link>
          </div>
        </div>
      
    </div>
  );
};

export default SignIn;

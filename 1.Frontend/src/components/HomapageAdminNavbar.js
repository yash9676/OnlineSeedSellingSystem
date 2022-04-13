import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";
import { BagCheckFill } from 'react-bootstrap-icons'
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const HomepageAdminNavbar = () => {
    const cartItems = useSelector(state => state.cartItems);
    const isSignin = useSelector(state => state.isSignin);

    
  return (
    <div >
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid"> <a class="font-effect-fire-animation" href="/">OnlineSeedShop</a> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                
                <ul class="navbar-nav me-auto mb-2 mb-lg-0" >
                   
                    <li class="nav-item"> <Link class="nav-link" to="/allCatagory">Categories</Link></li>
                    <li class="nav-item"> <Link class="nav-link" to="/allProduct">Product</Link></li>
                    <li class="nav-item"> <Link class="nav-link" to="/allUser">User</Link> </li>
                    <li class="nav-item"> <Link class="nav-link" to="/catagories">All</Link> </li>
                    <li class="nav-item"> <a class="nav-link" href="#">Contact</a> </li>
                    
                </ul>&emsp;&emsp;&emsp;&emsp;
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <h5>{isSignin.user.firstName}</h5>&emsp;
                <Link to="/signin" >
                       <a className="btn btn-success">Login</a>
                    </Link>
                &emsp;
                <form class="d-flex searchitem"> <input class="form-control me-2" id="myInput" type="search" placeholder="Search" aria-label="Search" /> <i class="fa fa-search"></i> </form>
                &emsp;<Link to="/cartDetails"><h4><BagCheckFill/></h4></Link><h4>{cartItems.length}</h4>
            </div>
        </div>
    </nav>
     
    <hr/>
</div>
  );

}
export default HomepageAdminNavbar;
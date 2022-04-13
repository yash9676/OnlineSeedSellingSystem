import React from "react";
import { useState, useEffect } from "react";    
import axios from "axios";
import { url } from "../common/constant";

import { useHistory } from "react-router-dom";
import HomePageNavBar from "./HomePageNavBar";



const AllCatagories = () => {
    const [catagory, setCatagory] = useState([]);
    const history = useHistory();

    useEffect(() => {
        console.log("Catagory component is mounted");
        getCatagory();

    } , []);

    const getCatagory = () => {
        axios.get(url+"/user/getAllCatagory").then((response) => {
            const result = response.data;
            console.log(result);
            if (result.status === "OK" ) {
                setCatagory(result.response);
            }else{
                alert("catagory not found");
            }
        });
    }

    return(
        <div>
            <HomePageNavBar/>
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="collapse navbar-collapse" id="navbarSupportedContent"><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
                        {
                            catagory.length >= 1 ? catagory.map(cat => {
                                return(
                                    <ul className="navbar-nav mr-auto mb-2 mb-lg-0" key={cat.id}>
                                    <li class="nav-item" >
                                    {/* <a type="button"  
                             onClick = {()=>{
                                 history.push('/productList', {catagory:cat.id})
                                }}>
                                {cat.catagoryName}
                                    </a> */}
                                    <button onClick={()=>{history.push('/productList',{catagory:cat.id})}}>{cat.catagoryName}</button>
                                         </li>
                                    </ul>
                                )
                            }):''
                        }
                </div>
            </nav>
            <div class="d-flex justify-content-center align-items-center mt-5"> <h2>Welcome to Green Revolution</h2> </div>
        </div>
    )

}
export default AllCatagories;
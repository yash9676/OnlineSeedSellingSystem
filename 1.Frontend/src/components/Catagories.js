import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { url } from "../common/constant";
import { useHistory } from "react-router-dom";
import './Catagories.css'
import HomePageNavBar from "./HomePageNavBar";

const Catagories =() => {
    const [allcatagories, setCatagory] = useState([]);
    const history = useHistory();
    useEffect(() => {
        console.log("Catagory component is mounted");
        getCatagory();
    }, []);

    const getCatagory = () => {
           axios.get(url+"/user/getAllCatagory").then((response) => {
            const result = response.data;
            console.log(result);
            if (result.status === "OK" ) {
                setCatagory(result.response);
            }else{
                alert("catagoires not found");
            }
        });
    };

    return(
        <div className="container-fluid">
            <HomePageNavBar/>
            {
                allcatagories.length >= 1 ? allcatagories.map((catagory) => {
                    return(
                        <div className="item-container">
                            
                            <button type="button" class="btn btn-success" onClick={() =>{history.push('/productList',{catagory:catagory.id})
                                
                            }}>
                               {catagory.catagoryName} 
                            </button>
                        </div>
                    )
                }):''
            }
            <br/>
        </div>
    )

}
export default Catagories;
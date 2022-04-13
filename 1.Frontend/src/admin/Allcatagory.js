import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import { url } from "../common/constant";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HomepageAdminNavbar from "../components/HomapageAdminNavbar";

const AllCatagory = () => {

    const [catagories, setCatagory] = useState([]);
    const history = useHistory();

    const isLogIn = useSelector((state) => state.isSignin);

    if(isLogIn.status === false){
        alert('please signin first!!')
        history.push('/signin')
      }

    useEffect(() => {
        console.log("Catagory component is mounted");
        getCatagory();
    } , []);
    
    const getCatagory = () => {
        axios.get(url+"/admin/getCatagory").then((response) => {
            const result = response.data;
            console.log(result);
            if (result.status === "OK" ) {
                setCatagory(result.response);
            }else{
                alert("catagoires not found");
            }
        });
    }
    
    return (
        
        <div>
        <HomepageAdminNavbar/>
        <h1 align="center">All Catagory</h1>
        <Link to="/catagory"><button className="btn btn-success">Add Catagory</button></Link>
        <table class="table">
            <thead class="thead-dark">
            <tr>
                <th>id</th>
                <th>catagory</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
                {
                    catagories.length >= 1 ? catagories.map(catagory => {   
                        return (
                            <tr key={catagory.id}>
                                <td>{catagory.id}</td>
                                <td>{catagory.catagoryName}</td>
                                <td>
                                    <button type="button" class="btn btn-success" onClick={() =>{history.push('/updateCat',{catagory:catagory})
                                    
                                }}>
                                        Update
                                    </button>
                                </td>
                            </tr>
                        )
                    }):''
                }
            </tbody>
        </table>
        </div>
    );
}

export default AllCatagory;
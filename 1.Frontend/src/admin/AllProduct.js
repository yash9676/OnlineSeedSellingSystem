import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { url } from "../common/constant";
import { useHistory } from "react-router-dom"; 
import $ from "jquery" ;
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import  HomepageAdminNavbar  from "../components/HomapageAdminNavbar";


const AllProduct = () => {

    const [products, setProduct] = useState([]);    
    
    const history = useHistory();

    const isSignin = useSelector((state) => state.isSignin);

    if(isSignin.status === false ){
        
        alert('please login first');
        history.push('/signin')
      }

    useEffect(() => {
        console.log("Product component is mounted");
        getProduct();
    } , []);
    
    const getProduct = () => {
        axios.get(url+"/admin/getProduct").then((response) => {
            const result = response.data;
            console.log(result);
            if (result.status === "OK" ) {
                setProduct(result.response);
            }else{
                alert("products not found");
            }
        });
    }
    
    const deleteProduct = (product) => {
        
        console.log(product.id);
        axios.delete(url+"/admin/deleteProduct/"+product.id).then((response) => {
            const result = response.data;
            if(result.status === "OK"){
                getProduct();
            }else{
                alert("error while product deletion");
            }
        })
    }
    
    $(document).ready(function(){
        $("#myInput").on("keyup", function() {
          var value = $(this).val().toLowerCase();
          $("#myTable tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
          });
        });
      });

    return (
        <div>
            <HomepageAdminNavbar/>
            <h1 align="center">All Product</h1>
            <div >
            <Link to="/product">
                <button className="btn btn-primary">Add Product</button><br/><br/>
            </Link>
            
            <table class="table" >
                <thead class="thead-dark">
                    <tr>
                        <th>id</th>
                        <th>ProductImage</th>
                        <th>ProductName</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Category Id</th>
                        <th style={{textAlign:"center"}}>Action</th>
                    </tr>
                </thead>
                <tbody id="myTable">
                    {
                        products.length >= 1 ? products.map(product => {
                            return (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td><img src={'/images/'+product.file} alt="PImage" width="100" height="100"/></td>
                                    <td>{product.prodName}</td>
                                    <td>{product.descp}</td>
                                    <td>{product.price}</td>
                                    <td>{product.qty}</td>
                                    <td>{product.catagoryId.id}</td>
                                    <td>
                                        <button type="button" class="btn btn-success" onClick={() =>{history.push('/updateProduct',{product:product})
                                        
                                    }}>
                                            Update
                                        </button>
                                        <button type="button" class="btn btn-danger" onClick={()=>{deleteProduct(product)}}>
                                            Delete
                                        </button>
                                    </td>
                                    
                                </tr>
                            )
                        }):''
                    }
                </tbody>
            </table>

            </div>
        </div>
    )
}

export default AllProduct;
import React from "react";
import { useState,useEffect } from "react";    
import axios from "axios";
import { url } from "../common/constant";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router";
import ProductByCatagory from "./ProductByCatagory";
import HomePageNavBar from "./HomePageNavBar";


const ProductList =()=>{

    const [products, setProduct] = useState([]);
    const location = useLocation();
    const catagoryData = location.state.catagory;
    console.log(catagoryData);
   

    const onProductSelect = (product) => {
        console.log(product);
        console.log(product.id);
        history.push('/')
    }

    useEffect(() => {
        console.log("Product component is mounted");
        getProductList();
    } , []);

    const getProductList = () => {
        console.log(catagoryData);
        axios.get(url+'/user/catagory/'+catagoryData).then((response) => {
            const result = response.data;
            console.log(result);
            if (result.status === "OK" ) {
                setProduct(result.response);
            }else{
                alert("products not found");
            }
        })
    }

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

    const getProductDetails = (product) => {
        console.log(product);
        console.log(product.id);
        history.push('/productDetails',{product:product})
    }

    return(
        <div>
            {/* <HomePageNavBar/> */}
            <ProductByCatagory
            onItemSelect={getProductDetails}
            items={products}
            />
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    )
}

export  default ProductList;
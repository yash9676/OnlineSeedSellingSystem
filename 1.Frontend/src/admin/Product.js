import React from "react";
import { useState } from "react";
import axios from "axios";
import { url } from "../common/constant";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import HomepageAdminNavbar from "../components/HomapageAdminNavbar";


const Product = () => {
    
    const [file,setFile ] = useState(undefined);
    const [prodName, setProdName] = useState("");
    const [descp, setDescp] = useState("");
    const [price, setPrice] = useState("");
    const [qty, setQty] = useState("");
    const [catId, setCatId] = useState("");
    
    const onFileSelected = (event) => {
        setFile(event.target.files[0]);
    };

    const addProduct = () => {
        if(file === undefined){
            alert("please select image");
        }else{
            const data = new FormData();
            data.append('file',file);
            data.append('prodName',prodName);
            data.append('descp',descp);
            data.append('price',price);
            data.append('qty',qty);
            data.append('catId',catId);
            console.log(data);
            // SENDS DATA TO THE API
            axios.post(url+"/image/upload", data).then((response) => {
                const result = response.data;
                console.log(result);
                if (result.status === "OK" ) {
                   alert("product added successfully");
                }else{
                    alert("image not uploaded");
                }
            });
        }
    }
    
    return (
        <div className="text-center">
            <HomepageAdminNavbar/>
        <h1>Add Product</h1>
            <div class="form-group row">
                <label for="email5" class="col-sm-2 col-form-label">
                    productImage
                </label>
                <div class="col-sm-4">
                    <input
                    accept="image/*"
                    type="file"
                    className="form-control"
                    placeholder="image"
                    onChange={onFileSelected}
                    required
                    />
                </div>
            </div>
            <div class="form-group row">
                <label for="email5" class="col-sm-2 col-form-label">
                    productName
                </label>
                <div class="col-sm-4">
                    <input
                    type="text"
                    class="form-control"
                    placeholder="Name"
                    onChange={(event)=>{setProdName(event.target.value)}}
                    required
                    />
                </div>
            </div>
            <div class="form-group row">
                <label for="email5" class="col-sm-2 col-form-label">
                    Description
                </label>
                <div class="col-sm-4">
                    <input
                    type="text"
                    class="form-control"
                    placeholder="image"
                    onChange={(event)=>{setDescp(event.target.value)}}
                    required
                    />
                </div>
            </div>
            <div class="form-group row">
                <label for="email5" class="col-sm-2 col-form-label">
                    Price
                </label>
                <div class="col-sm-4">
                    <input
                    type="number"
                    class="form-control"
                    placeholder="Price"
                    onChange={(event)=>{setPrice(event.target.value)}}
                    min="1"
                    max="5000"
                    required
                    />
                </div>
            </div>
            <div class="form-group row">
                <label for="email5" class="col-sm-2 col-form-label">
                    Quantity
                </label>
                <div class="col-sm-4">
                    <input
                    type="number"
                    class="form-control"
                    placeholder="Quantity"
                    onChange={(event)=>{setQty(event.target.value)}}
                    min="1"
                    max="5000"
                    required
                    />
                </div>
            </div>
            <div class="form-group row">
                <label for="email5" class="col-sm-2 col-form-label">
                    catagoryId
                </label>
                <div class="col-sm-4">
                    <input
                    type="number"
                    class="form-control"
                    placeholder="CatagoryId"
                    onChange={(event)=>{setCatId(event.target.value)}}
                    min="1"
                    max="5000"
                    required
                    />
                </div>
            </div>
            <div>
                <div className="col-sm-12 text-center">
                    <button  className="btn btn-primary" onClick={addProduct}>
                        Register
                    </button>
                </div>
            </div>
            
        </div>
    );
}


export default Product;
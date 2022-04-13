import React from "react";
import { useState } from "react";
import axios from "axios";
import { url } from "../common/constant";
import HomepageAdminNavbar from "../components/HomapageAdminNavbar";


const Catagory= () => {

    const [catagory, setCatagory] = useState("");


    const AddCatagory = () => { 
        if(catagory === 0){
            alert("please enter catagory");
        }else{
            let data = {
    
                catagoryName:catagory
            };
            console.table(data);
            //to send data catagory to the api
            axios.post(url+"/admin/addCatagory", data).then((response) => {
                const result = response.data;
                if(result.status === "OK"){
                    alert("successfully added catagory");
                }else{
                    alert("catagory already exist");
                }
            })
        }


    }

    return (
        <div className="text-center">
            <HomepageAdminNavbar/>
            <h1 >Add Catagory </h1>
            <div class="form-group row">
                <label for="email5" class="col-sm-2 col-form-label">
                    Catagory
                </label>
                <div class="col-sm-4">
                    <input
                    type="text"
                    class="form-control"
                    placeholder="Catagory"
                    onChange={(event) => {setCatagory(event.target.value)}}
                    required
                    />
                </div>
            </div>
            <div class="col-sm-8 text-center">
                <button  onClick={AddCatagory} class="btn btn-primary">
                    Add Catagory
                </button>
          </div>
        </div>
    )
}

export default Catagory;
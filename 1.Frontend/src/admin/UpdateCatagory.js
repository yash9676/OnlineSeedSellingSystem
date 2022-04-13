import React from "react";
import { useState } from "react";
import axios from "axios";
import { url } from "../common/constant";
import { useHistory,Link } from "react-router-dom";
import { useLocation } from "react-router";
import HomepageAdminNavbar from "../components/HomapageAdminNavbar";

const UpdateCatagory = () => {

    const [id, setId] = useState(0);
    const [catagoryName,setCatagoryName] = useState("");
    const location = useLocation();
    const catagoryData = location.state.catagory;
    const history = useHistory();

    const handleUpdate = () => {
        const data={
            "id":id,
            "catagoryName":catagoryName
        }
        if(catagoryName.length>0){

        setId(catagoryData.id);
        axios.put(url+"/admin/updateCatagory/"+catagoryData.id,data).then((response) => {
            const result = response.data;
            if(result.status==="OK"){
                alert("Catagory Updated");
                history.push("/allCatagory");
            }else{
                alert("Catagory not updated");
            }
        })
    }else{
        alert("Please enter catagory name");
    }
    }


    return (
        <div class="container">
            <HomepageAdminNavbar/>
            <h2>Update Catagory</h2>
            <div className="was-validated">
            {/* <div className="col-md-6">
                <label htmlFor="">Catagory Id</label>
                <input type="text" className="form-control" value={catagoryData.id}  readOnly/> 
            </div> */}
           <div className="form-data">
           <div className="col-md-6">
                <label htmlFor="">Catagory Name</label>
                <input type="text" className="form-control"  onChange={(e)=>{setCatagoryName(e.target.value)}} required/>
            </div>
           </div>
           <br/>
            <div className="mb-3">
                <button className="btn btn-primary" onClick={handleUpdate}> Update</button>
                &emsp; <Link to="/allCatagory">
                    <button className="btn btn-primary">Back</button>
                </Link>
            </div>
            </div>
        </div>
    )
}

export default UpdateCatagory;
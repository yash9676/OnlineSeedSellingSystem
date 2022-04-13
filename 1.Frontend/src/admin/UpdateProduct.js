import React from "react";
import { useState } from "react";
import axios from "axios";
import { url } from "../common/constant";
import { Link,useHistory } from "react-router-dom";
import { useLocation} from "react-router";
import HomepageAdminNavbar from "../components/HomapageAdminNavbar";

const UpdateProduct = () => {
    const [id, setId] = useState(0);
    const [price, setPrice] = useState(0.0);
    const [qty, setQty] = useState(0);
    const location = useLocation();
    const productData = location.state.product
    const history = useHistory();

    const handleUpdate = () => {
        const data={
            "id":id,
            "price":price,
            "qty":qty

        }
        setId(productData.id);
        axios.put(url+"/admin/update/"+productData.id,data).then((response) => {
            const result = response.data;
            if(result.status==="OK"){
                alert("Product Updated");
                history.push("/allProduct");
            }else{
                alert("Product not updated");
            }
        })

    }

    return(
        <div class="container">
            <HomepageAdminNavbar/>
            <h2>Update Product</h2>
            {/* <div className="col-md-6">
                <label htmlFor="">Product Id</label>   
                <input type="text" className="form-control" value={productData.id}  readOnly/>
            </div> */}
            <div className="col-md-6">
                <label htmlFor="">Price</label>
                <input type="number" className="form-control"
                onChange={(e) => {setPrice(e.target.value)}}
                required/>
            </div>
            <div className="col-md-6">
                <label htmlFor="">Quantity</label>
                <input type="number" className="form-control"
                onChange={(e)=>{setQty(e.target.value)}}
                required/>
            </div>
            <div className="mb-3">
                <button className="btn btn-primary" onClick={handleUpdate}>Update</button>
            
            <Link to="/allProduct">
                <button className="btn btn-primary">Back</button>
            </Link>
            </div>
        </div>
    )
}
export default UpdateProduct;
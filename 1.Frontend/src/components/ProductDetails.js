import  React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { url } from "../common/constant";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router";
import { useDispatch,useSelector } from "react-redux";
import Counter from "./Counter";
import { addToCartAction } from "../actions/cartActions";   
import HomePageNavBar from "./HomePageNavBar";



const ProductDetails = () => {

    const isLogIn = useSelector(state => state.isSignin);
    const [product, setProduct] = useState('');
    const location = useLocation();
    const dispatch = useDispatch();
    const productId = location.state.product;
    console.log(productId);
    console.log(isLogIn.user);
    const history = useHistory();
    const [quantity, setQuantity] = useState(1);


    useEffect(() => {
        console.log("Product component is mounted");
        getProduct();
    } , [])

    const buynow = (product) => {
        console.log(product)
        let data = {
            productId: product.catagoryId.id,
            productImage: product.file,
            productName: product.prodName,
            productPrice: product.price,
            productQuantity: product.quantity,
        };
        console.log(data);
        history.push('/buynow',{selectedmobile:data});
    };

    const getProduct = () => {
        console.log(productId);
        axios.get(url+'/user/product/'+productId.id).then((response) => {
            const result = response.data;
            console.log(result);
            if (result.status === "OK" ) {
                setProduct(result.response);
            }else{
                alert("product not found");
            }
        })
    }

    const getCounter = (count) => {
        if (count >= 0) {
          console.log(count);
          setQuantity(count);
        }
      };
    
    const addToCart = (product) => {
        

        console.log(product);
        let data = {
            pid: product.id,
            uid: isLogIn.user.id,
            price: product.price,
            qty: quantity,
            cid: product.catagoryId.id,
        };
        console.log(data);
        
        axios.post(url+'/user/addToCart',data).then((response) => {
            const result = response.data;
            console.log(result);
            if (result.status === "OK" ) {
                alert("Product added to cart");
                dispatch(addToCartAction(product));
            }else{
                alert("product out of stock");
            }
        })


    }

    return(
        <div>
            <HomePageNavBar/>
            <h1>Product Details</h1>
            {
                product !== '' ? (
                    <div>
                        <div className="syle">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={'/images/'+product.file} className="img-fluid" alt="..." />
                                    {/* <div>
                                        <h4 className="card-title text">{product.prodName}</h4>
                                        <h3 className="card-title text">Price: {product.price}</h3>
                                    </div> */}
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body">
                                        <h4 className="card-title text">Product Details</h4>
                                        <h4 className="card-title text">Name: {product.prodName}</h4>
                                        <p className="card-text">Description: {product.descp}</p>
                                        <h3 className="card-text">Price: {product.price}/-</h3>
                                        <div className="bstyle">
                                            <Counter onItemSelect={getCounter}/>
                                            <br/>
                                            <button onClick={()=>{addToCart(product)}} className="btn btn-primary" type="button">Add to Cart</button>&emsp;
                                            <button onClick={()=>{buynow(product)}} className="btn btn-primary" type="button">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                ):''
            }
            <br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    )
}

export default ProductDetails;
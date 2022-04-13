import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { url } from "../common/constant";
import { useHistory } from "react-router-dom";
import HomePageNavBar from "./HomePageNavBar";

const ProductByCatagory = ({items,title,onItemSelect}) => {


    return(
        <div className="slider-container">
          <HomePageNavBar/>
      <div className="title">{title}</div>

      {items.map((item) => {
        return (
          <div
            className="container"
            onClick={() => {
              onItemSelect(item)
            }}>
              
            <img alt=" " src={'/images/'+item.file} height="200px" width="200px" className="image" />
            <div className="item-title">{item.prodName}</div>
            <div className="item-price">Price:{item.price}</div>
          </div>
        )
      })}
    </div>
    )

}

export  default ProductByCatagory;
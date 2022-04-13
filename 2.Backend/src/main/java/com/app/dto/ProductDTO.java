package com.app.dto;

import com.app.pojos.Catagory;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class ProductDTO {
	
	private String productImage;
	
	private String productName;
	
	private String description;
	
	private double price;
	
	private int quantity;
	
	
	
	private Catagory catagoryId;
	
}

package com.app.service;

import java.util.List;

import com.app.pojos.Product;

public interface IProductService {
	String addproduct(Product transientProduct);
	
	List<Product> getAllProducts();
	
	String deleteProductById(int id);
	
	Product updateProduct(double price,int quantity,int id);
	
	List<Product> getProductByCatagoryId(int id);
	
	Product getProductById(int id);
}

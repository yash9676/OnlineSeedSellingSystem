package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptiom.AssetNotFoundException;
import com.app.dao.ProductRepository;
import com.app.pojos.Product;

@Service
@Transactional
public class ProductServiceImpl implements IProductService {
	
	@Autowired 
	private ProductRepository productRepo;
	@Override
	public String addproduct(Product transientProduct) {
		if(productRepo.save(transientProduct) != null) {
		return "product added succesfully" ;
		}
		return "Cannot add product";
	}
	@Override
	public List<Product> getAllProducts() {
		
		return productRepo.findAll();
	}
	@Override
	public String deleteProductById(int id) {
		
		productRepo.deleteById(id);
		
		return "product deleted successfully";
	}
	@Override
	public Product updateProduct(double price, int quantity, int id) {
		Product product = productRepo.findById(id).orElseThrow(()-> new AssetNotFoundException("product not found by id "+id));
		
		if(product != null ) {
			productRepo.updateProductById(price, quantity, id);
			return product;
		}else {
			return null;
		}
		
		
	}
	@Override
	public List<Product> getProductByCatagoryId(int id) {
		
		List<Product> productList = productRepo.findProductByCatagoryId(id);
		
		return productList;
	}
	@Override
	public Product getProductById(int id) {
			Product product = productRepo.findById(id).orElseThrow(()-> new AssetNotFoundException("Product Not Found by id "+id));
		return product;
	}

}

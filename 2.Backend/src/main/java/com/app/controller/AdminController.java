package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ResponseDTO;
import com.app.pojos.Catagory;
import com.app.pojos.Product;
import com.app.pojos.User;
import com.app.service.CatagoryServiceImpl;
import com.app.service.ProductServiceImpl;
import com.app.service.UserServiceImpl;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "*")
public class AdminController {
	
	@Autowired
	private CatagoryServiceImpl catagoryService;
	
	@Autowired
	private ProductServiceImpl productService;
	
	@Autowired
	private UserServiceImpl userService;
	
	
	public AdminController() {
		System.out.println("In Admin Controller "+getClass());
	}
	
	@PostMapping("/addCatagory")
	public ResponseDTO<?> addCatagory(@RequestBody Catagory c) {
		System.out.println("in add catagory ");
		Catagory newCatagory = catagoryService.addCatagory(c);
		return new ResponseDTO<>(HttpStatus.OK,"Catagory Added Successfully ",newCatagory);
	}
	
	@GetMapping("/catagory/{id}")
	public ResponseEntity<?> getCatagory(@PathVariable int id){
		System.out.println("in get catagory details");
		
		return new ResponseEntity<>(catagoryService.getCatagoryById(id),HttpStatus.OK);
	}
	
	@GetMapping("/getCatagory")
	public ResponseDTO<?> getAllCatagoryList(){
		List<Catagory> allCatagories = catagoryService.getAllCatagories();
		return new ResponseDTO<>(HttpStatus.OK, "All Catagories", allCatagories);
	}
	
	
	@DeleteMapping("/deleteCatagory/{id}")
	public ResponseDTO<?> deleteCatagory(@PathVariable int id){
		System.out.println("In delete mapping of catagory");
		String deleteCatagory = catagoryService.deleteCatagory(id);
		return new ResponseDTO<>(HttpStatus.OK, "Catagory deleted Successfully", deleteCatagory);
	}
	
	@GetMapping("/getProduct")
	public ResponseDTO<?> getAllProductList(){
		List<Product> allProducts = productService.getAllProducts();
		
		return new ResponseDTO<>(HttpStatus.OK,"product are received",allProducts);
	}
	
	@PutMapping("/update/{id}")
	public ResponseDTO<?> updateProductById(@RequestBody Product p,@PathVariable int id){
		
		Product product = productService.updateProduct(p.getPrice(),p.getQuantity(), id);
		
		Product updatProduct = new Product();
		updatProduct.setPrice(p.getPrice());
		updatProduct.setQuantity(p.getQuantity());
		
		
		return new ResponseDTO<>(HttpStatus.OK, "product updated succesfully", updatProduct);
	}
	
	@PutMapping("/updateCatagory/{id}")
	public ResponseDTO<?> updateCatagoryByID(@RequestBody Catagory c,@PathVariable int id){
		catagoryService.updateCatagory(c.getCatagoryName(), id);
		
		Catagory updatedCatagory = new Catagory();
		updatedCatagory.setCatagoryName(c.getCatagoryName());
		
		return new ResponseDTO<>(HttpStatus.OK, "updated catagory succesfully", updatedCatagory);
	}
	
	@DeleteMapping("/deleteProduct/{id}")
	public ResponseDTO<?> deleteProduct(@PathVariable int id){
		String deletedProduct = productService.deleteProductById(id);
		
		return new ResponseDTO<>(HttpStatus.OK, "deleted successfully", deletedProduct);
	}
	
	@GetMapping("/allUsers")
	public ResponseDTO<?> getAllUserList(){
		List<User> user = userService.getAllUSer();
		return new ResponseDTO<>(HttpStatus.OK,"List updated Succesfully ",user);
		
	}
	
	@DeleteMapping("/deleteUser/{id}")
	public ResponseDTO<?> deleteUser(@PathVariable int id){
		String deleteUser = userService.deleteUser(id);
		return new ResponseDTO<>(HttpStatus.OK, "deleted user Succesfully", deleteUser);
	}
	
	
	
	
	
}

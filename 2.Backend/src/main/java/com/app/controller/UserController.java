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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.CartDTO;
import com.app.dto.ForgotPasswordDTO;
import com.app.dto.LoginRequest;
import com.app.dto.OrderDTO;
import com.app.dto.PaymentDTO;
import com.app.dto.ResponseDTO;
import com.app.dto.UserDTO;
import com.app.pojos.Address;
import com.app.pojos.Cart;
import com.app.pojos.Catagory;
import com.app.pojos.Order;
import com.app.pojos.Product;
import com.app.pojos.User;

import com.app.service.CartServiceImpl;
import com.app.service.CatagoryServiceImpl;
import com.app.service.OrderServiceImpl;
import com.app.service.PaymentServiceImpl;
import com.app.service.ProductServiceImpl;
import com.app.service.UserServiceImpl;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "*")
public class UserController {
	
	@Autowired 
	private UserServiceImpl userService;
	
	
	@Autowired
	private ProductServiceImpl productService;
	
	@Autowired
	private CatagoryServiceImpl catagoryService;
	
	@Autowired
	private CartServiceImpl cartService;
	
	@Autowired 
	private OrderServiceImpl orderService;
	
	@Autowired
	private PaymentServiceImpl paymentService;
	
	public UserController() {
		System.out.println("in user controller "+getClass());
	}
	
	@GetMapping("/home")
	public String showHomePage() {
		
		return "Hello, welcome to seed selling home page!!!";
	}
	
	// adding method to add a new user in system
	@PostMapping("/add")
	public ResponseDTO<?> addUserDetails(@RequestBody UserDTO u) {
		System.out.println("in add user ");
		System.out.println(u);
		String newUser = userService.addUser(u);
		
		return new ResponseDTO<>(HttpStatus.OK,"user added succesfully ",newUser);
	}

	@GetMapping("/{id}")
	public ResponseEntity<?> getUserDetails(@PathVariable int id) {
		System.out.println("in get user details "+id);
		
		
		return new ResponseEntity<>(userService.getUserDetails(id),HttpStatus.OK);
	}
	
//	@PostMapping("/address/{id}")
//	public Address addAddressToUser(@RequestBody Address a ,@PathVariable int id) {
//		System.out.println("for assigning Address to user");
//		
//		return addressService.assignUserAddress(id, a);
//	}
	
	@PostMapping("/signin")
	public ResponseDTO<?> authenticateUser(@RequestBody LoginRequest request){
		System.out.println("in user authentication "+request);
		User user = userService.authenticateUserLogin(request);
		System.out.println("User "+user);
		if(user != null) {
			return new ResponseDTO<>(HttpStatus.OK,"user found ",user);
		}else {
			return new ResponseDTO<>(HttpStatus.NOT_FOUND,"user not found",null);
		}
	}
	
//	@GetMapping("/product/{id}")
//	public ResponseDTO<?> getProductByCat(@PathVariable int id){
//		System.out.println("in product list by category");
//		return new ResponseDTO<>(HttpStatus.OK, "all product received ", productService.getProductByCatagoryId(id));
//	}
	
	@GetMapping("/getAllCatagory")
	public ResponseDTO<?> getAllCatagoryList(){
		List<Catagory> allCatagories = catagoryService.getAllCatagories();
		return new ResponseDTO<>(HttpStatus.OK, "All Catagories", allCatagories);
	}
	
	@GetMapping("/catagory/{id}")
	public ResponseDTO<?> getProduct(@PathVariable int id){
		List<Product> products = productService.getProductByCatagoryId(id);
		return new ResponseDTO<>(HttpStatus.OK, "Products retreived succesfully", products);
	}
	
	@GetMapping("/product/{id}")
	public ResponseDTO<?> getProductDetails(@PathVariable int id){
		Product productDetails = productService.getProductById(id);
		return new ResponseDTO<>(HttpStatus.OK, "Product Found", productDetails);
	}
	
	@GetMapping("/cartItems/{id}")
	public ResponseDTO<?> getCartItemsById(@PathVariable int id){
		List<Cart> userItems = cartService.getUserItems(id);
		
		return new ResponseDTO<>(HttpStatus.OK, "All products retreived successfully", userItems);
	}
	
	@DeleteMapping("/deleteCart/{id}")
	public ResponseDTO<?> deleteCartById(@PathVariable int id){
		String deletedCartItems = cartService.deleteCartItems(id);
		return new ResponseDTO<>(HttpStatus.OK, "Successfully deleted cart", deletedCartItems);
	}
	
	@PostMapping("/addToCart")
	public ResponseDTO<?> addToCart(@RequestBody CartDTO cart){
		System.out.println(cart);
		User isPresent = userService.getUserDetails(cart.getUid());
		Catagory isExist = catagoryService.getCatagoryById(cart.getCid());
		Product isAvailable = productService.getProductById(cart.getPid());
		
		if(isPresent != null) {
			Cart newCart = new Cart();
			newCart.setPrice(cart.getPrice());
			newCart.setProductQuantity(cart.getQty());
			newCart.setCatagoryId(isExist);
			newCart.setProductId(isAvailable);
			newCart.setUserId(isPresent);
			
			Cart cartAdded = cartService.addCart(newCart,cart);
			if(cartAdded == null) {
				return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "No product available", null);
			}
			return new ResponseDTO<>(HttpStatus.OK, "product added in cart successfully", cartAdded);
		}else {
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "product not added in cart successfully", null);
		}
		
		
	}
	
	@PostMapping("/orders")
	public ResponseDTO<?> orderPlaced(@RequestBody OrderDTO newOrder){
		Order saveOrder = orderService.saveOrder(newOrder);
		if (saveOrder != null) {
			return new ResponseDTO<>(HttpStatus.OK, "placed order successfully", saveOrder);
		}else {
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "Error in placement of order", null);
		}
	}
	
	@PostMapping("/payment")
	public ResponseDTO<?> userPayment(@RequestBody PaymentDTO newPayment){
		String savePayment = paymentService.savePayment(newPayment);
		if(savePayment != null) {
			return new ResponseDTO<>(HttpStatus.OK, "payment done successfully", savePayment);
		}else {
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "payment was unsuccessfully", null);
		}
	}
	
	@GetMapping("/forgot/{email}")
	public ResponseDTO<?> getPasswordByEmail(@PathVariable String email){
		String password = userService.getPassword(email);
		if(password != null) {
			return new ResponseDTO<>(HttpStatus.OK, "User Exist", password);
		}else {
			return new ResponseDTO<>(HttpStatus.OK, "User doesn't Exist", null);
		}
	}

}

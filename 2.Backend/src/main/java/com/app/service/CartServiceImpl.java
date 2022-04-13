package com.app.service;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.CartRepository;
import com.app.dao.ProductRepository;
import com.app.dto.CartDTO;
import com.app.pojos.Cart;

@Service
@Transactional
public class CartServiceImpl implements ICartService {

	@Autowired
	private CartRepository cartRepo;
	
	@Autowired
	private ProductRepository productRepo;
	
	@Override
	public synchronized Cart addCart(Cart transientCart,CartDTO cart) {
		if(productRepo.findQuantity(cart.getPid())-cart.getQty() > 0) {
			productRepo.updateProductQuantity(cart.getQty(),cart.getPid());
			return cartRepo.save(transientCart);
		}else {
			System.out.println("no product available");
			return null;
		}
	}

	@Override
	public List<Cart> getUserItems(int id) {
		return cartRepo.findCartByUserId(id);
	}

	@Override
	public String deleteCartItems(int id) {
		cartRepo.deleteById(id);
		return "product deleted Successfully";
	}

	

}

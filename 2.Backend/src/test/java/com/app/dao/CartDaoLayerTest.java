package com.app.dao;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.app.pojos.Cart;

@SpringBootTest
public class CartDaoLayerTest {

	
	@Autowired
	private CartRepository cartRepo;
	
	@Test
	void  testFindCartByUserId() {
		List<Cart> list = cartRepo.findCartByUserId(10);
		assertEquals(2, list.size());
	}
}

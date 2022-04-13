package com.app.dao;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest
public class ProductDaoLayerTest {
	
	@Autowired
	private ProductRepository prodRepo;
	
	@Test
	@Transactional
	@Rollback(value = true)
	void testUpdateProductById() {
		assertEquals(1, prodRepo.updateProductById(100,10,4));
	}
}

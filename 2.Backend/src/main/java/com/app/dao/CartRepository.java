package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.pojos.Cart;

public interface CartRepository extends JpaRepository<Cart,Integer> {
	
	
	@Query("select c from Cart c join fetch c.userId where c.userId.id=?1")
	List<Cart> findCartByUserId(int id);
}

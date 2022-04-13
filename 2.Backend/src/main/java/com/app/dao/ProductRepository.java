package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.app.pojos.Product;

public interface ProductRepository extends JpaRepository<Product,Integer>{
	
	@Modifying
	@Query("update Product p set p.price=?1 , p.quantity=?2 where p.id=?3")
	int updateProductById(double price,int quantity,int id);
	
//  @Query("select m from Mobiles m join fetch m.chosenBrand where m.chosenBrand.id=:brandId")
  //List<Mobiles> getAllMobilesByBrandId(@Param("brandId")int brandId);
	
	@Query("select p from Product p join fetch p.catagoryId where p.catagoryId.id=?1")
	List<Product> findProductByCatagoryId(int id);
	
	@Modifying
	@Query("update Product p set p.quantity=p.quantity-?1 where p.id=?2")
	int updateProductQuantity(int qty,int id);
	
	@Modifying
	@Query("update Product p set p.quantity=p.quantity+?1 where p.id=?2")
	int updateAddProductQuantity(int qty,int id);
	
	@Query("select p.quantity from Product p where p.id=?1")
	int findQuantity(int id);
	
}

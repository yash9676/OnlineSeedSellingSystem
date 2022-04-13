package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.pojos.Catagory;

@Repository
public interface CatagoryRepository extends JpaRepository<Catagory,Integer> {
	
	@Modifying
	@Query("update Catagory c set c.catagoryName=?1 where c.id=?2")
	int updateCatagoryById(String catagoryName , int id);
}

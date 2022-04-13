package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.dto.ForgotPasswordDTO;
import com.app.pojos.Role;
import com.app.pojos.User;

public interface UserRepository extends JpaRepository<User,Integer> {
		//	Optional<User> findByEmailAndPassword(String em,String pwd);
	@Query("select u from User u where u.email=:mail and u.password=:pwd")
	User validateUser(@Param("mail")String mail,@Param("pwd")String pwd);
	
	List<User> findByType(Role type);
	
	@Query("select u.password from User u where u.email=?1")
	String getPasswordByEmailId(String email);
	
	Optional<User> findByEmail(String emailId);
}

package com.app.dao;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.app.pojos.User;

@SpringBootTest
public class UserDaoLayerTest {

	@Autowired
	private UserRepository userRepo;
	
	@Test
	void testValidateUser() {
		User validateUser = userRepo.validateUser("virpekanad@gmail.com", "1234");
		System.out.println(validateUser);
		assertEquals("8237253188", validateUser.getPhoneNumber());
	}
	
	@Test
	void testFindByEmail() {
		Optional<User> findByEmail = userRepo.findByEmail("rajveersinghbhamra9@gmail.com");
		assertEquals("Rajveer",findByEmail.get().getFirstName() );
	}
	
}

package com.app.dto;

import org.springframework.stereotype.Component;

import com.app.pojos.Address;
import com.app.pojos.Role;
import com.app.pojos.User;

@Component
public class DTOEntityConverter {
	
	public Address userAddress(UserDTO user) {
		
		Address address = new Address();
		address.setCity(user.getCity());
		address.setHouseNo(user.getHouseNo());
		address.setPincode(user.getPincode());
		address.setState(user.getState());
		address.setStreet(user.getStreet());
		System.out.println(address);
		return address;
	}
	
	public User toUserEntity(UserDTO user,Address address) {
		User entity = new User();
		entity.setFirstName(user.getFirstName());
		entity.setLastName(user.getLastName());
		entity.setEmail(user.getEmail());
		entity.setPassword(user.getPassword());
		entity.setConfirmPassword(user.getConfirmPassword());
		entity.setAddress(address);
		entity.setPhoneNumber(user.getPhoneNumber());
		entity.setType(Role.USER);
		System.out.println(entity);
		return entity;
		
	}
	
}

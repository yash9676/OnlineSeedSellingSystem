package com.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.AddressRepository;
import com.app.dao.UserRepository;
import com.app.dto.DTOEntityConverter;
import com.app.dto.ForgotPasswordDTO;
import com.app.dto.LoginRequest;
import com.app.dto.UserDTO;
import com.app.pojos.Address;
import com.app.pojos.Role;
import com.app.pojos.User;


@Service
@Transactional
public class UserServiceImpl implements IUserService {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private DTOEntityConverter converter;
	
	@Autowired
	private AddressRepository addressRepo;
	
	@Override
	public String addUser(UserDTO transientUser) {
		//it will return saved user
//		User user2 = userRepository.findByEmail(transientUser.getEmail()).get();
//		
//		if(user2 != null) {
//			throw new RuntimeException("User already exist");
//		}
		
		System.out.println("before add save");
		Address address = converter.userAddress(transientUser);
		addressRepo.save(address);
		System.out.println("after add save");
		User user = converter.toUserEntity(transientUser, address);
		userRepository.save(user);
		System.out.println("after user add save");
		return user.getEmail();
	}

	@Override
	public User getUserDetails(int id) {
		
		Optional<User> user = userRepository.findById(id);
		return user.orElseThrow(()-> new RuntimeException("User not found by "+id));
		
	}

	@Override
	public User authenticateUserLogin(LoginRequest loginRequst) {
		
		return userRepository.validateUser(loginRequst.getEmail(), loginRequst.getPassword());
	}

	@Override
	public List<User> getAllUSer() {
		
		return userRepository.findByType(Role.USER);
	}

	@Override
	public String deleteUser(int id) {
		userRepository.deleteById(id);
		return "User deleted successfully";
	}

	@Override
	public String getPassword(String email) {
		
		return userRepository.getPasswordByEmailId(email);
	}

	
	
	
	

	
	
	

}

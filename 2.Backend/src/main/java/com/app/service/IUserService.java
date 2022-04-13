package com.app.service;

import java.util.List;

import com.app.dto.ForgotPasswordDTO;
import com.app.dto.LoginRequest;
import com.app.dto.UserDTO;
import com.app.pojos.User;

public interface IUserService {
	
	String addUser(UserDTO transientUser);
	
	User getUserDetails(int id);
	
	String deleteUser(int id);
	
	User authenticateUserLogin(LoginRequest loginRequst);
	
	List<User> getAllUSer();
	
	String getPassword(String email);
}

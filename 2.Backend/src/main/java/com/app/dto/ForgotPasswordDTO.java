package com.app.dto;

public class ForgotPasswordDTO {
	private final String password;

	public ForgotPasswordDTO(String password) {
		super();
		this.password = password;
	}

	public String getPassword() {
		return password;
	}

	@Override
	public String toString() {
		return "ForgotPasswordDTO [password=" + password + "]";
	}
	
	
	
}

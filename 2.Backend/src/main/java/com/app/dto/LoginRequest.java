package com.app.dto;

import javax.persistence.Column;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class LoginRequest {
	@Column(length = 30,nullable = false)
	private String email;
	@Column(length = 30,nullable = false)
	private String password;
	
}

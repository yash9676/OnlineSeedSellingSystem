package com.app.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "user")

@NoArgsConstructor
@Getter
@Setter
public class User extends BaseEntity {
	@Column(name = "first_name",length = 30)
	private String firstName;
	@Column(name = "last_name",length = 30)
	private String lastName;
	@Column( unique = true)
	private String email;
	@Column(length = 20)
	private String password;
	@Transient
	@JsonIgnore
	private String confirmPassword;
	@Column(length = 20,name = "phone")
	private String phoneNumber;
	
	@Enumerated(EnumType.STRING)
	private Role type=Role.USER;
	//@JsonIgnore
//	@OneToMany(mappedBy = "userId",cascade = CascadeType.ALL,orphanRemoval = true,fetch = FetchType.EAGER)
//	private List<Cart> carts = new ArrayList<>();
	
	@OneToOne(cascade = CascadeType.ALL,orphanRemoval = true)
	@JoinColumn(name = "add_id",nullable = false)
	private Address address;
	
	@OneToMany(mappedBy = "userId", cascade = CascadeType.ALL,orphanRemoval = true,fetch = FetchType.EAGER)
	@JsonIgnore
	private List<Order> orders = new ArrayList<>();
	
	@OneToMany(mappedBy = "userId",cascade = CascadeType.ALL,orphanRemoval = true)
	@JsonIgnore
	private List<Payment> payments = new ArrayList<>();

	public User(String firstName, String lastName, String email, String password, String confirmPassword,
			String phoneNumber, Address address) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.confirmPassword = confirmPassword;
		this.phoneNumber = phoneNumber;
		this.address = address;
	}
	
	
	
}

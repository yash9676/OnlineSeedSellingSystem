package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "address")
@NoArgsConstructor

@Getter
@Setter
@ToString
public class Address extends BaseEntity{
	
	@Column(length = 10)
	private int houseNo;
	@Column(length = 50)
	private String street;
	@Column(length = 20)
	private String city;
	@Column(length = 20)
	private String state;
	@Column(length = 10)
	private int pincode;

	
	public Address(int houseNo, String street, String city, String state, int pincode) {
		super();
		this.houseNo = houseNo;
		this.street = street;
		this.city = city;
		this.state = state;
		this.pincode = pincode;
	}
	
}

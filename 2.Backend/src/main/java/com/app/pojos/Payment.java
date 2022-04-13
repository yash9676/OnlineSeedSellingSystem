package com.app.pojos;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "payment")
@NoArgsConstructor
@Getter
@Setter
public class Payment extends BaseEntity {
	
	@OneToOne
	@JoinColumn(name = "order_id")
	private Order order;
	
	private String accountHolderName;
	
	private int cardNumber;
	
	@ManyToOne(optional = true,targetEntity = User.class)
	@JoinColumn(name = "user_id",nullable = false)
	private User userId;
	
	private double totalAmount;
}

package com.app.pojos;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "cart")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Cart extends BaseEntity {
	private double price;
	private int productQuantity;
	@ManyToOne(optional = true,targetEntity = User.class)
	@JoinColumn(name = "user_id",nullable = false)
	private User userId;
	@ManyToOne
	@JoinColumn(name = "product_id",nullable = false)
	private Product productId;
	@ManyToOne
	@JoinColumn(name="cat_id",nullable = false)
	private Catagory catagoryId;
}

package com.app.pojos;

import java.util.ArrayList;
import java.util.List;import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "product")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Product extends BaseEntity {
	@JsonProperty("file")
	@Column(length = 40,nullable = false)
	private String productImage;
	@JsonProperty("prodName")
	@Column(length = 30,nullable = false, name = "product_name")
	private String productName;
	@JsonProperty("descp")
	@Column(length = 500)
	private String description;
	@JsonProperty("price")
	@Column(length = 10)
	private double price;
	@JsonProperty("qty")
	@Column(length = 10)
	private int quantity;
	@ManyToOne
	@JoinColumn(name = "cat_no",nullable = false)
	private Catagory catagoryId;
	@JsonIgnore
	@OneToMany(mappedBy = "productId",cascade = CascadeType.ALL,orphanRemoval = true)
	private List<Cart> carts = new ArrayList<>();
	
	public Product(String productImage, String productName, String description, double price, int quantity) {
		super();
		this.productImage = productImage;
		this.productName = productName;
		this.description = description;
		this.price = price;
		this.quantity = quantity;
	}

	public Product(double price, int quantity) {
		super();
		this.price = price;
		this.quantity = quantity;
	}
	           
}

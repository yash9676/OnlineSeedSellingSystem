package com.app.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "catagory")
@NoArgsConstructor

@Getter
@Setter
public class Catagory extends BaseEntity {
	@Column(length = 20,nullable = false,unique = true)
	@JsonProperty(value = "catagoryName")
	private String catagoryName;
	
	public Catagory(String catagoryName) {
		super();
		this.catagoryName = catagoryName;
	}
	
	@JsonIgnore
	@OneToMany(mappedBy = "catagoryId",cascade = CascadeType.ALL,orphanRemoval = true)
	private List<Product> products = new ArrayList<>();//initializing empty array list 
	@JsonIgnore
	@OneToMany(mappedBy = "catagoryId",cascade = CascadeType.ALL,orphanRemoval = true)
	private List<Cart> carts = new ArrayList<>();
	
	public void addProduct(Product p) {
		//to add product reference in category
		products.add(p);
		//assign category reference to product
		p.setCatagoryId(this);
		
	}
	
	public void removeProduct(Product p) {
		// remove 
		products.remove(p);
		//assign category reference to product
		p.setCatagoryId(null);
		
	}

	@Override
	public String toString() {
		return "Catagory [catagoryName=" + catagoryName + "]";
	}

	
	
}

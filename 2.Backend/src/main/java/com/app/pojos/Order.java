package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Table(name = "order_details")
@Getter
@Setter
@NoArgsConstructor
public class Order extends BaseEntity {
	
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate orderDate;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate deliveryOrderDate;
	
	private double totalPrice;
	@ManyToOne()
	@JoinColumn(name = "user_id",nullable = false)
	private User userId;
	
	private int productId;
	
}

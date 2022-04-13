package com.app.dto;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
@NoArgsConstructor
@Getter
@Setter
@AllArgsConstructor
@ToString
public class OrderDTO {
	private LocalDate odate;
	private double totalPrice;
	private int uid;
	private int pid;
	private LocalDate ddate;
}

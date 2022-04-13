package com.app.pojos;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

import lombok.Data;

@MappedSuperclass
/*
 * it tells us that this class does not have any entity  and 
 * from this class entities inherit the id property
 */
@Data 
/*
 * this annotation will give the getter setter and toString automatically 
 * by using lombok library
 */
public class BaseEntity {
	
	@Id // to tell its a primary key for entity
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

}

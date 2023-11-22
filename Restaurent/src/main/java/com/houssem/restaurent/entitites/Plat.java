package com.houssem.restaurent.entitites;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Data

@Entity
public class Plat {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long idPlat;
	private String nomPlat;
	private double prix;
	@ManyToOne
	private Menu menu;
	
	
	
}



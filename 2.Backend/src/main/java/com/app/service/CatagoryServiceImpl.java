package com.app.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptiom.AssetNotFoundException;
import com.app.dao.CatagoryRepository;
import com.app.pojos.Catagory;

@Service
@Transactional
public class CatagoryServiceImpl implements ICatagoryService {
	
	@Autowired
	private CatagoryRepository catagoryRepo;
	
	@Override
	public Catagory addCatagory(Catagory transientCatagory) {
		// it will return saved catagory
		return catagoryRepo.save(transientCatagory);
	}

	@Override
	public Catagory getCatagoryById(int id) {
		 Optional<Catagory> catagory = catagoryRepo.findById(id);
		return catagory.orElseThrow(()-> new RuntimeException("catagory not found by id "+id));
	}

	@Override
	public String deleteCatagory(int id) {
		 catagoryRepo.deleteById(id);
		 return "catagory deleted Successfully";
	}

	@Override
	public List<Catagory> getAllCatagories() {
		
		return catagoryRepo.findAll();
	}

	@Override
	public Catagory updateCatagory(String catagoryName, int id) {
		Catagory catagory = catagoryRepo.findById(id).orElseThrow(()-> new AssetNotFoundException("Catagory by id = "+id+" not found "));
		
		if(catagory != null) {
			 catagoryRepo.updateCatagoryById(catagoryName, id);
			 return catagory;
		}
		return null;
	}

	
	

}

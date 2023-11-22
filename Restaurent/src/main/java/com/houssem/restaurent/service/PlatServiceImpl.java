package com.houssem.restaurent.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.houssem.restaurent.entitites.Menu;
import com.houssem.restaurent.entitites.Plat;
import com.houssem.restaurent.repos.PlatRepository;

@Service
public class PlatServiceImpl implements PlatService {

	@Autowired
	PlatRepository platRepository;

	@Override
	public Plat savePlat(Plat m) {
		return platRepository.save(m);
	}

	@Override
	public Plat updatePlat(Plat m) {
		return platRepository.save(m);
	}

	@Override
	public void deletePlat(Plat m) {
		platRepository.delete(m);
	}

	@Override
	public void deletePlatById(Long id) {
		platRepository.deleteById(id);
	}

	@Override
	public Plat getPlat(Long id) {
		return platRepository.findById(id).get();
	}

	@Override
	public List<Plat> getAllPlat() {
		return platRepository.findAll();
	}

	@Override
	public List<Plat> findByNomPlat(String nom) {
		return platRepository.findByNomPlat(nom);
	}

	@Override
	public List<Plat> findByNomPlatContains(String nom) {
		return platRepository.findByNomPlatContains(nom);
	}

	@Override
	public List<Plat> findByMenu(Menu menu) {
		return platRepository.findByMenu(menu);
	}

	@Override
	public List<Plat> findByMenuIdMenu(Long id) {
		return platRepository.findByMenuIdMenu(id);
	}

	@Override
	public List<Plat> findByOrderByNomPlattAsc() {
		return platRepository.findByOrderByNomPlatAsc();
	}

	@Override
	public List<Plat> trierPlatsNomsPrix() {
		return platRepository.trierPlatsNomsPrix();
	}

}

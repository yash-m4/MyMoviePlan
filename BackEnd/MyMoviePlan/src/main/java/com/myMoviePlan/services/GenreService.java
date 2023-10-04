package com.myMoviePlan.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;


import com.myMoviePlan.models.Genre;
import com.myMoviePlan.repositories.GenreRepository;

@Service
public class GenreService {

	@Autowired
	GenreRepository genreRepo;
	
	public void addGenre(Genre genre) {
		genreRepo.save(genre);
	}
	
	public List<Genre> viewAllGenre(){
		return genreRepo.findAll();
	}
	
	public void deleteCategoryById(int id) {
		genreRepo.deleteById(id);
	}
}

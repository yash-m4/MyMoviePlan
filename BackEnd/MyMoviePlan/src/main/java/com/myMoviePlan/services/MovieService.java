package com.myMoviePlan.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.myMoviePlan.models.Movies;
import com.myMoviePlan.repositories.MovieRepository;

@Service
public class MovieService {

	@Autowired
	MovieRepository movieRepo;
	
	public int addMovie(Movies movie) {
		int iod=movieRepo.save(movie).getId();
		return iod;
	}
	
	public List<Movies> viewAllMovies(){
		return movieRepo.findAll();
	}
	
	public Optional<Movies> findById(int id) {
		return movieRepo.findById(id);
	}
	
	public Movies updateProductById(int id, Movies newMovie) {
        Optional<Movies> existingProductOptional = movieRepo.findById(id);

        if (existingProductOptional.isPresent()) {
            Movies existingMovie = existingProductOptional.get();
            
            
            existingMovie.setGenreId(newMovie.getGenreId());
            existingMovie.setId(newMovie.getId());    
            existingMovie.setImage(newMovie.getImage());  
            existingMovie.setLanguage(newMovie.getLanguage());  
            existingMovie.setName(newMovie.getName());    
            existingMovie.setPrice(newMovie.getPrice());    
            existingMovie.setReleaseDate(newMovie.getReleaseDate()); 
            existingMovie.setSlots(newMovie.getSlots());   
            existingMovie.setStatus(newMovie.getStatus());
         
            return movieRepo.save(existingMovie);
        } else {
           
            throw new RuntimeException("Product not found with ID: " + id);
        }
    }
	public void deleteMovie(int id) {
		movieRepo.deleteById(id);
	}

	public List<Movies> getMoviesByGenreId(int id) {
        return movieRepo.findProductsByGenreId(id);
    }
	
    public List<Movies> findProductsByKeyword(String key) {
        
        return movieRepo.findByKeyword(key);
    }
    
}

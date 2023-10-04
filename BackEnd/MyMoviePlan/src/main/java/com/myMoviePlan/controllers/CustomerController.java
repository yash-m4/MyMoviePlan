package com.myMoviePlan.controllers;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.myMoviePlan.models.MovieDTO;
import com.myMoviePlan.models.Movies;
import com.myMoviePlan.models.Seats;
import com.myMoviePlan.services.MovieService;
import com.myMoviePlan.services.SeatService;

@RestController
@CrossOrigin("*")
@RequestMapping("/customer")
public class CustomerController {

	@Autowired
	MovieService movieService;
	@Autowired
	SeatService seatService;
	 
	 @PostMapping("/filterByGenre")
	 public ResponseEntity<List<MovieDTO>> filterByGenre(@RequestParam("id") String id) {
		 int ids = Integer.parseInt(id);
		 List<Movies> movies = movieService.getMoviesByGenreId(ids);
		 System.out.println(movies);
		 List<MovieDTO> movieDTOs = new ArrayList<>();
		    for (Movies movie : movies) {
		    	MovieDTO movieDTO = new MovieDTO();
		    	movieDTO.setGenreId(movie.getGenreId());
		    	movieDTO.setId(movie.getId());
		    	movieDTO.setLanguage(movie.getLanguage());
		    	movieDTO.setName(movie.getName());
		    	movieDTO.setPrice(movie.getPrice());
		    	movieDTO.setReleaseDate(movie.getReleaseDate());
		    	movieDTO.setSlots(movie.getSlots());
		    	movieDTO.setStatus(movie.getStatus());
		        

		        try {
		            byte[] imageBytes = movie.getImage().getBytes(1, (int) movie.getImage().length());
		            String base64Image = Base64.getEncoder().encodeToString(imageBytes);
		            movieDTO.setImageData(base64Image);
		        } catch (SQLException e) {
		            e.printStackTrace();
		        }

		        movieDTOs.add(movieDTO);
		    }
		    
		    return ResponseEntity.ok(movieDTOs);
	 } 
	 @PostMapping("/filterBySearchBar")
	 public ResponseEntity<List<MovieDTO>> filterBySearchBar(@RequestParam("key") String key) {
		 System.out.println(key);
		List<Movies> movies=movieService.findProductsByKeyword(key);
		System.out.println(movies.size());
		List<MovieDTO> movieDTOs = new ArrayList<>();
	    for (Movies movie : movies) {
	    	MovieDTO movieDTO = new MovieDTO();
	    	movieDTO.setGenreId(movie.getGenreId());
	    	movieDTO.setId(movie.getId());
	    	movieDTO.setLanguage(movie.getLanguage());
	    	movieDTO.setName(movie.getName());
	    	movieDTO.setPrice(movie.getPrice());
	    	movieDTO.setReleaseDate(movie.getReleaseDate());
	    	movieDTO.setSlots(movie.getSlots());
	    	movieDTO.setStatus(movie.getStatus());
	        

	        try {
	            byte[] imageBytes = movie.getImage().getBytes(1, (int) movie.getImage().length());
	            String base64Image = Base64.getEncoder().encodeToString(imageBytes);
	            movieDTO.setImageData(base64Image);
	        } catch (SQLException e) {
	            e.printStackTrace();
	        }

	        movieDTOs.add(movieDTO);
	    }
	    
	    return ResponseEntity.ok(movieDTOs);
	 }
	 
	 @GetMapping("/viewAllSeats")
	    public ResponseEntity<List<Seats>> viewAllSeats() {
	        List<Seats> seats = seatService.viewAllSeats();
	        return ResponseEntity.status(HttpStatus.OK).body(seats);
	    }
	 
	 @PostMapping("/viewSeat")
	    public ResponseEntity<Seats> viewSeat(@RequestParam("id") String id) {
		 int ids = Integer.parseInt(id);
	        Seats seats = seatService.findByMovieId(ids);
	        return ResponseEntity.status(HttpStatus.OK).body(seats);
	    }
	 
	 
	 
	 @GetMapping("/viewAllMoviesCustomer")
	 public ResponseEntity<List<MovieDTO>> viewAllMovies() {
		 
		 List<Movies> movies = movieService.viewAllMovies();
		    List<MovieDTO> movieDTOs = new ArrayList<>();
		    for (Movies movie : movies) {
		    	MovieDTO movieDTO = new MovieDTO();
		    	if(movie.getStatus()==1) {
		    	movieDTO.setGenreId(movie.getGenreId());
		    	movieDTO.setId(movie.getId());
		    	movieDTO.setLanguage(movie.getLanguage());
		    	movieDTO.setName(movie.getName());
		    	movieDTO.setPrice(movie.getPrice());
		    	movieDTO.setReleaseDate(movie.getReleaseDate());
		    	movieDTO.setSlots(movie.getSlots());
		    	movieDTO.setStatus(movie.getStatus());
		        

		        try {
		            byte[] imageBytes = movie.getImage().getBytes(1, (int) movie.getImage().length());
		            String base64Image = Base64.getEncoder().encodeToString(imageBytes);
		            movieDTO.setImageData(base64Image);
		        } catch (SQLException e) {
		            e.printStackTrace();
		        }

		        movieDTOs.add(movieDTO);
		    }
		    }
		    return ResponseEntity.ok(movieDTOs);
	 }
	 
	 @PostMapping("/bookSeats")
	 public void bookSeats(@RequestParam("id") String id,
			 @RequestParam("seat1") String seat1,
			 @RequestParam("seat2") String seat2,
			 @RequestParam("seat3") String seat3,
			 @RequestParam("seat4") String seat4,
			 @RequestParam("seat5") String seat5,
			 @RequestParam("seat6") String seat6,
			 @RequestParam("seat7") String seat7,
			 @RequestParam("seat8") String seat8,
			 @RequestParam("seat9") String seat9,
			 @RequestParam("seat10") String seat10,
			 @RequestParam("seat11") String seat11,
			 @RequestParam("seat12") String seat12,
			 @RequestParam("seat13") String seat13,
			 @RequestParam("seat14") String seat14,
			 @RequestParam("seat15") String seat15,
			 @RequestParam("seat16") String seat16,
			 @RequestParam("seat17") String seat17,
			 @RequestParam("seat18") String seat18,
			 @RequestParam("seat19") String seat19,
			 @RequestParam("seat20") String seat20) {	 
		 int ids = Integer.parseInt(id);
		 Seats seat=seatService.findByMovieId(ids);
		 seat.setSeat1(Integer.parseInt(seat1));
		 seat.setSeat2(Integer.parseInt(seat2));
		 seat.setSeat3(Integer.parseInt(seat3));
		 seat.setSeat4(Integer.parseInt(seat4));
		 seat.setSeat5(Integer.parseInt(seat5));
		 seat.setSeat6(Integer.parseInt(seat6));
		 seat.setSeat7(Integer.parseInt(seat7));
		 seat.setSeat8(Integer.parseInt(seat8));
		 seat.setSeat9(Integer.parseInt(seat9));
		 seat.setSeat10(Integer.parseInt(seat10));
		 seat.setSeat11(Integer.parseInt(seat11));
		 seat.setSeat12(Integer.parseInt(seat12));
		 seat.setSeat13(Integer.parseInt(seat13));
		 seat.setSeat14(Integer.parseInt(seat14));
		 seat.setSeat15(Integer.parseInt(seat15));
		 seat.setSeat16(Integer.parseInt(seat16));
		 seat.setSeat17(Integer.parseInt(seat17));
		 seat.setSeat18(Integer.parseInt(seat18));
		 seat.setSeat19(Integer.parseInt(seat19));
		 seat.setSeat20(Integer.parseInt(seat20));
		 seatService.addSeats(seat);
	 }
	 
}

package com.myMoviePlan.controllers;

import java.io.IOException;
import java.sql.Blob;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;
import java.util.Optional;

import javax.sql.rowset.serial.SerialBlob;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.myMoviePlan.models.Genre;
import com.myMoviePlan.models.MovieDTO;
import com.myMoviePlan.models.Movies;
import com.myMoviePlan.models.Seats;
import com.myMoviePlan.services.GenreService;
import com.myMoviePlan.services.MovieService;
import com.myMoviePlan.services.SeatService;


@RestController
@CrossOrigin("*")
@RequestMapping("/admin")
public class AdminController {
	
	@Autowired
	GenreService genreService;
	@Autowired
	MovieService movieService;
	@Autowired
	SeatService seatService;
	
	@PostMapping("/addGenre")
	public void addCategory(@RequestParam("genre") String genre,@RequestParam("status") String status) {
		Genre g=new Genre();
		g.setName(genre);
		g.setStatus(status);
		genreService.addGenre(g);
		
	}
	
	@GetMapping("/viewAllGenre")
    public ResponseEntity<List<Genre>> viewAllCategory() {
        List<Genre> genre = genreService.viewAllGenre();
        return ResponseEntity.status(HttpStatus.OK).body(genre);
    }

	
	 @PostMapping("/addMovie")
	 public void addProduct(@RequestParam("movie") String movie,
			 @RequestParam("genreId") String genreId,
			 @RequestParam("status") String status,
			 @RequestParam("price") String price,
			 @RequestParam("releaseDate") String releaseDate,
			 @RequestParam("slots") String slots,
			 @RequestParam("language") String language,
			 @RequestParam("image") MultipartFile image)  throws IOException, SQLException {
		 
		
		 
		 Movies m=new Movies();
		 m.setName(movie);
		 int selectedGenre=Integer.parseInt(genreId);
		 m.setGenreId(selectedGenre);
		 int priceInt=Integer.parseInt(price);
		 m.setPrice(priceInt);
		 m.setReleaseDate(releaseDate);
		 m.setSlots(slots);
		 int selectedStatus=Integer.parseInt(status);
		 m.setStatus(selectedStatus);
		 m.setLanguage(language);
		 Blob blob = new SerialBlob(image.getBytes());
		 m.setImage(blob);
		 int movieId=movieService.addMovie(m);
		 Seats seat=new Seats();
		 seat.setMovieId(movieId);
		 seat.setSeat1(0);
		 seat.setSeat2(0);
		 seat.setSeat3(0);
		 seat.setSeat4(0);
		 seat.setSeat5(0);
		 seat.setSeat6(0);
		 seat.setSeat7(0);
		 seat.setSeat8(0);
		 seat.setSeat9(0);
		 seat.setSeat10(0);
		 seat.setSeat11(0);
		 seat.setSeat12(0);
		 seat.setSeat13(0);
		 seat.setSeat14(0);
		 seat.setSeat15(0);
		 seat.setSeat16(0);
		 seat.setSeat17(0);
		 seat.setSeat18(0);
		 seat.setSeat19(0);
		 seat.setSeat20(0);
		 seatService.addSeats(seat);
	 }
	 
	 
	 @GetMapping("/viewAllMovies")
	 public ResponseEntity<List<MovieDTO>> viewAllMovies() {
		 
		 List<Movies> movies = movieService.viewAllMovies();
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
	 
	 
	 @PostMapping("/changeStatus")
	 public ResponseEntity<List<MovieDTO>> changeStatus(@RequestParam("id") int id) {
		
		 Optional<Movies> m=movieService.findById(id);
		 Movies m1=m.get();
		 int status=m1.getStatus();
		 if(status==1) {
			 m1.setStatus(0);
		 }
		 else {
			 m1.setStatus(1);
		 }
		 
		 movieService.updateProductById(id, m1);
		 
		 List<Movies> movies = movieService.viewAllMovies();
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
	 
	 @PostMapping("/FindById")
	 public ResponseEntity<MovieDTO> FindById(@RequestParam("id") String id){
		 int ids=Integer.parseInt(id);
		 Optional<Movies> oMovie=movieService.findById(ids);
			Movies movie=oMovie.get();
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
	    
	    return ResponseEntity.ok(movieDTO);
	 }
	 
	 @PostMapping("/editMovie")
	 public void editProduct(@RequestParam("movie") String movie,
			 @RequestParam("genreId") String genreId,
			 @RequestParam("status") String status,
			 @RequestParam("price") String price,
			 @RequestParam("releaseDate") String releaseDate,
			 @RequestParam("slots") String slots,
			 @RequestParam("id") String id,
			 @RequestParam("language") String language,
			 @RequestParam("image") MultipartFile image)  throws IOException, SQLException {
		 Movies m=new Movies();
		 m.setName(movie);
		 int selectedGenre=Integer.parseInt(genreId);
		 m.setGenreId(selectedGenre);
		 int priceInt=Integer.parseInt(price);
		 m.setPrice(priceInt);
		 m.setReleaseDate(releaseDate);
		 m.setSlots(slots);
		 int selectedStatus=Integer.parseInt(status);
		 m.setStatus(selectedStatus);
		 m.setLanguage(language);
		 Blob blob = new SerialBlob(image.getBytes());
		 m.setImage(blob);
		 int ids=Integer.parseInt(id);
		 m.setId(ids);
		 movieService.updateProductById(ids, m);
				 
	 }
	 
	 @PostMapping("/deleteMovie")
	 public ResponseEntity<List<MovieDTO>> deleteMovie(@RequestParam("id") String id) {
		
		 int ids=Integer.parseInt(id);
		 movieService.deleteMovie(ids);
		 
		 List<Movies> movies = movieService.viewAllMovies();
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
	 
	 @PostMapping("/deleteGenre")
	 public ResponseEntity<List<Genre>> deleteGenre(@RequestParam("id") String id){
		
		 int ids=Integer.parseInt(id);
		 genreService.deleteCategoryById(ids);
		 List<Genre> genre = genreService.viewAllGenre();
	        return ResponseEntity.status(HttpStatus.OK).body(genre);
	 }
}

package com.myMoviePlan.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.myMoviePlan.models.Movies;
import com.myMoviePlan.models.Seats;
import com.myMoviePlan.repositories.SeatRepository;

@Service
public class SeatService {

	@Autowired
	SeatRepository seatRepo;
	
	public void addSeats(Seats seats) {
		seatRepo.save(seats);
	}
	
	public List<Seats> viewAllSeats(){
		return seatRepo.findAll();
	}
	
	public Seats findByMovieId(int id) {
		return seatRepo.findByMovieId(id);
	}
}

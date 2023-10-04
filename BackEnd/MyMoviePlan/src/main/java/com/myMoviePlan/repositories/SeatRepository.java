package com.myMoviePlan.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.myMoviePlan.models.Seats;
@Repository
public interface SeatRepository extends JpaRepository<Seats, Integer>{

	public Seats findByMovieId(int id);
}

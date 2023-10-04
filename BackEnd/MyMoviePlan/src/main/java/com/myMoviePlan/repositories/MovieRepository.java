package com.myMoviePlan.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.myMoviePlan.models.Movies;

@Repository
public interface MovieRepository extends JpaRepository<Movies, Integer> {

//	@Query("SELECT m FROM Movies m WHERE m.genreId = :gid")
//    List<Movies> findProductsByGenreId(@Param("gid") int gid);
	List<Movies> findProductsByGenreId(int genreId);
	
	
	@Query(value="SELECT * from movies t where LOWER(t.name) LIKE :sname%", nativeQuery = true)
	List<Movies> findByKeyword(@Param("sname") String sname);
}

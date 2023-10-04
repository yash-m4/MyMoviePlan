package com.myMoviePlan.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.myMoviePlan.models.User;
@Repository
public interface UserRepository extends JpaRepository<User, Integer>{

	public User findByEmailAndPassword(String email,String password);
}

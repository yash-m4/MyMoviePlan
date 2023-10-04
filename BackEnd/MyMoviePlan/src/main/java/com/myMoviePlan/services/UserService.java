package com.myMoviePlan.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.myMoviePlan.models.User;
import com.myMoviePlan.repositories.UserRepository;

@Service
public class UserService {
@Autowired
UserRepository userRepo;

public void addUser(User user) {
	userRepo.save(user);
}

public User FindUser(String eamil, String password) {
	return userRepo.findByEmailAndPassword(eamil, password);
}
}

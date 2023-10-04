package com.myMoviePlan.controllers;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.myMoviePlan.models.User;
import com.myMoviePlan.services.UserService;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@CrossOrigin("*")
@RequestMapping("/auth")
public class AuthController {
	
	@Autowired
	UserService userService;
	
	@PostMapping("/addUser")
	public void addUser(@RequestParam("firstName") String firstName,
			@RequestParam("lastName") String lastName,
			@RequestParam("phone") String phone,
			@RequestParam("password") String password,
			@RequestParam("email") String email) {
		
		
		
		User user=new User();
		user.setEmail(email);
		user.setPassword(password);
		user.setFirstName(firstName);
		user.setLastName(lastName);
		user.setIsAdmin(0);
		long number = Long.parseLong(phone);
		 user.setPhone(number);
		userService.addUser(user);
		
	}
	
	@PostMapping("/login")
	public ResponseEntity<Map<String, Object>> validateUser(HttpServletRequest request,@RequestParam("email") String email,
			@RequestParam("password") String password){
		User user=userService.FindUser(email, password);
		if(user!=null) {
			  Map<String, Object> response = new HashMap<>();
		        response.put("isValid", true);
			if(user.getIsAdmin()==0) {
				response.put("isAdmin", false);
			}
			
			else{
				response.put("isAdmin", true);
			}
			 return ResponseEntity.ok(response);
		}
		else 
		{
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
		}
	}

}

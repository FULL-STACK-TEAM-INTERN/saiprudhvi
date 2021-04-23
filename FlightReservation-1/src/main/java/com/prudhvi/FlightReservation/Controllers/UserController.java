package com.prudhvi.FlightReservation.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.prudhvi.FlightReservation.Entities.User;
//import com.prudhvi.FlightReservation.Repository.UserRepository;
import com.prudhvi.FlightReservation.Service.UserService;

@RestController
@CrossOrigin(origins ="http://localhost:4200")
//@RequestMapping("/api/v1")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/registeruser")
	public User registerUser(@RequestBody User user) throws Exception {
		
		String tempEmailId=user.getEmail();
		
		if(tempEmailId != null && "".equals(tempEmailId)){//not null or empty
			
		User userObj = userService.checkUserByEmail(tempEmailId);
		
		if(userObj !=null) {
			throw new Exception("User Account: "+tempEmailId+" is already exist");
		}
			
		}
		
		User userObj=null;
		userService.saveUser(user);
		return userObj;
	}
	
	@PostMapping("/login")
	public User loginUser(@RequestBody User user) throws Exception {//login these is
		
		String tempEmailId=user.getEmail();
		String tempPass=user.getPassword();
		User userObj = null;
		if(tempEmailId !=null && tempPass !=null) {
			
			userObj=userService.checkUserByEmailAndPassword(tempEmailId, tempPass);
		}
		if(userObj==null) {
			throw new Exception("USER DOES NOT EXIST");
		}
		return userObj;
		
	}



}

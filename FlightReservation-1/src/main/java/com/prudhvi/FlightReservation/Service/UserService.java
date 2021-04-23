package com.prudhvi.FlightReservation.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.prudhvi.FlightReservation.Entities.User;
import com.prudhvi.FlightReservation.Repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	public User saveUser(User user) {
		
		return userRepository.save(user);
		
	}
	
	public User checkUserByEmail(String email) {//checking email id is present or not
		
		return userRepository.findByEmail(email);
	}

	public User checkUserByEmailAndPassword(String email,String password) {
		
		return userRepository.findByEmailAndPassword(email,password);
	}
}

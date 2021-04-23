package com.prudhvi.FlightReservation.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.prudhvi.FlightReservation.Entities.Admin;
import com.prudhvi.FlightReservation.Repository.AdminRepository;

@Service
public class AdminService {
	@Autowired
	private AdminRepository adminRepository;
	
public Admin checkAdminByAdminIdAndPassword(String adminId,String password) {
		
		return adminRepository.findByAdminIdAndPassword(adminId,password);
	}

}

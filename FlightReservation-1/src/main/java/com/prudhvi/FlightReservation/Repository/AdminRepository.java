package com.prudhvi.FlightReservation.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.prudhvi.FlightReservation.Entities.Admin;


public interface AdminRepository extends JpaRepository<Admin, Long> {
	
	public Admin findByAdminIdAndPassword(String adminId,String password);

}

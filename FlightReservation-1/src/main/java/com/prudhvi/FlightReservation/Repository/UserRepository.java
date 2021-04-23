package com.prudhvi.FlightReservation.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.prudhvi.FlightReservation.Entities.User;

public interface UserRepository extends JpaRepository<User, Long> {
	public User findByEmail(String email);
	public User findByEmailAndPassword(String email,String password);
}

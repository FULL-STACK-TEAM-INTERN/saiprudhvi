package com.prudhvi.FlightReservation.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.prudhvi.FlightReservation.Entities.Passenger;

public interface PassengerRepository extends JpaRepository<Passenger, Long> {

}

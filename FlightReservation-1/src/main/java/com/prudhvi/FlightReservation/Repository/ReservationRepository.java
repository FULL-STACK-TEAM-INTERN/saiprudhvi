package com.prudhvi.FlightReservation.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.prudhvi.FlightReservation.Entities.Reservation;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {

}

package com.prudhvi.FlightReservation.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.prudhvi.FlightReservation.Entities.Flight;
import com.prudhvi.FlightReservation.Repository.FlightRepository;

@Service
public class CrudService {
	
	@Autowired
    private FlightRepository flightRepository;
	
	//Fetch All
	public List<Flight> fetchFlightList(){
		
	return	flightRepository.findAll();
		
	}
	
	//Add Flight
	public Flight addFlightToDB(Flight flight) {
		return flightRepository.save(flight);
	}
	
	
	//Fetch Product By Flight Number
	public Optional<Flight> fetchFlightById(Long id) {
		
		return flightRepository.findById(id);
		
	}
	public String deleteFlightFromDB(Long id) {
		String result;
		try
		{
			flightRepository.deleteById(id);
			result="Flight successfully deleted";
		} 
		catch (Exception e) {
			result="Flight is not deleted";
		}
		
		return result;
		
		
	}
}

package com.prudhvi.FlightReservation.Controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.prudhvi.FlightReservation.Entities.Flight;
import com.prudhvi.FlightReservation.Service.CrudService;

@RestController
@CrossOrigin(origins ="http://localhost:4200")
public class CrudController {
	
	@Autowired
    private CrudService crudService;
	
	//@RequestMapping(path="/flightlist",method=RequestMethod.GET) or we can use below one for simple

	@GetMapping("/flightlist")
	@CrossOrigin(origins ="http://localhost:4200")
	public List<Flight> getFlightList(){//to get flight list
		List<Flight> flights= new ArrayList<Flight>();
		//logic to fetch list from database
		flights= crudService.fetchFlightList();
		
		return flights;
		
	}
	
	@CrossOrigin(origins ="http://localhost:4200")
	@PostMapping("/addflightlist")
	public Flight saveFlightList(@RequestBody Flight flight){
		
          return  crudService.addFlightToDB(flight);
		
	}
	
	@CrossOrigin(origins ="http://localhost:4200")
	@GetMapping("/getflightlist/{id}")
	public Flight getFlightListById(@PathVariable Long id){
		
          return  crudService.fetchFlightById(id).get();
	}
	
	
	@CrossOrigin(origins ="http://localhost:4200")
	@DeleteMapping("/removeflightlist/{id}")
	public String deleteFlightList(@PathVariable Long id){//to get flight list
		
		 return crudService.deleteFlightFromDB(id);
		
	}

}

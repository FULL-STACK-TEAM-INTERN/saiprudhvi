package com.prudhvi.FlightReservation.Controllers;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.prudhvi.FlightReservation.Entities.Flight;
import com.prudhvi.FlightReservation.Repository.FlightRepository;


@RestController
@CrossOrigin(origins ="http://localhost:4200")
public class FlightController {


	@Autowired
	FlightRepository flightRepository;

	//private static final Logger LOGGER = LoggerFactory.getLogger(FlightController.class);
	//@GetMapping("/findFlights")
	@RequestMapping(value="/findFlights",method=RequestMethod.GET)
	public String findFlights(@RequestParam("from") String from, @RequestParam("to") String to,
			@RequestParam("departureDate") @DateTimeFormat(pattern = "MM-dd-yyyy") Date departureDate,
			ModelMap modelMap) {

		//LOGGER.info("Inside findFlights() From:" + from + " TO:" + to + "Departure Date: " + departureDate);
		List<Flight> flights = flightRepository.findFlights(from, to, departureDate);
		modelMap.addAttribute("flights", flights);
		//LOGGER.info("Flight Found are:" + flights);
		return "displayFlights";

	}
	
	@RequestMapping("admin/showAddFlight")
	public String showAddFlight() {
		return "addFlight";
	}


}

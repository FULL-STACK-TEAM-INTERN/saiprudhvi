package com.prudhvi.FlightReservation.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.prudhvi.FlightReservation.Entities.Admin;
import com.prudhvi.FlightReservation.Service.AdminService;

@RestController
@CrossOrigin(origins ="http://localhost:4200")
public class AdminController {
	
	@Autowired
    private AdminService adminService;

	@PostMapping("/adminlogin")
	public Admin loginAdmin(@RequestBody Admin admin) throws Exception {//login these is
		
		String tempAdminId=admin.getAdminId();
		String tempPass=admin.getPassword();
		Admin adminObj = null;
		if(tempAdminId !=null && tempPass !=null) {
			
			adminObj=adminService.checkAdminByAdminIdAndPassword(tempAdminId, tempPass);
		}
		if(adminObj==null) {
			throw new Exception("ADMIN DOES NOT EXIST");
		}
		return adminObj;

}
}

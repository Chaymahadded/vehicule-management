package test.spring.controller;

import java.time.Month;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


import test.spring.entity.ServiceEntretien;
import test.spring.service.ServiceEntretienService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ServiceEntretienController {
	@Autowired
    private ServiceEntretienService serEntService;
    @PostMapping("vehicule/{vehicleId}/ajouterService")
    @ResponseBody
    public void ajouterSerEnt(@RequestBody ServiceEntretien SerEnt, @PathVariable int vehicleId) {
         serEntService.ajouterSerEnt(SerEnt, vehicleId);
    }
    @GetMapping("/vehicule/{vehicleId}/services")
    @ResponseBody
    public List<ServiceEntretien> getSerEntForVehicle(@PathVariable int vehicleId) {
        return serEntService.getSerEntForVehicle(vehicleId);
    }
	@GetMapping("/service/{id}")
	@ResponseBody
	public ServiceEntretien getService(@PathVariable("id") int id) {
		return serEntService.getServiceById(id);
	}
    @PutMapping("/editService/{id}")
    @ResponseBody
    public void editSerEnt(@PathVariable int id,@RequestBody ServiceEntretien SerEnt) {
         serEntService.editSerEnt(id,SerEnt);
    }
    @DeleteMapping("/supprimerService/{id}")
    @ResponseBody
    public void deleteServiceEntretien(@PathVariable int id) {
         serEntService.deleteServiceEntretien(id);
    }
    @GetMapping("/vehicle/{vehicleId}/coutMensuelService")
    @ResponseBody
    public float getCoutMensuelForVehicle(@PathVariable int vehicleId, @RequestParam int year, @RequestParam Month month) {
        return serEntService.calculateCoutMensuel(vehicleId, year, month);
    }

    @GetMapping("/vehicle/{vehicleId}/coutAnnuelService")
    @ResponseBody
    public float getCoutAnnuelForVehicle(@PathVariable int vehicleId, @RequestParam int year) {
        return serEntService.calculateCoutAnnuel(vehicleId, year);
    }

}

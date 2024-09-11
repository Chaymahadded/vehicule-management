package test.spring.controller;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import test.spring.entity.Vehicule;
import test.spring.service.VehiculeService;
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class VehiculeController {

	@Autowired
	private VehiculeService vehiculeSer;
	@GetMapping("/")
	@ResponseBody
	public void home() {
	}
	@PostMapping("/ajouterVehicule")
	@ResponseBody
	public void ajouterVehicule(@RequestBody Vehicule v) {
		vehiculeSer.save(v);
	}
	@GetMapping("/vehicules")
	@ResponseBody
	public List<Vehicule> getAll(){
		return vehiculeSer.getAllVehicule();
	}
	@GetMapping("/{id}/vehicules")
	@ResponseBody
	public List<Vehicule> getVehiculeForChauffeur(@PathVariable("id") int id){
		return vehiculeSer.getVehicleForChauffeur(id);
	}
	@GetMapping("/vehicule/{id}")
	@ResponseBody
	public Vehicule getVehicule(@PathVariable("id") int id) {
		return vehiculeSer.getVehiculeById(id);
	}
	@PutMapping("/editVehicule/{id}")
	@ResponseBody
	public void editerVehicule(@PathVariable("id") int id ,@RequestBody Vehicule v) {
		vehiculeSer.editVehicule(id, v);
	}
	@DeleteMapping("/supprimerVehicule/{id}")
	@ResponseBody
	public void supprimerVehicule(@PathVariable("id") int id) {
		vehiculeSer.deleteVehiculeById(id);
	}

}

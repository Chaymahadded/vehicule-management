package test.spring.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import test.spring.entity.HistCarb;
import test.spring.entity.Vehicule;
import test.spring.repository.VehiculeRepository;

@Service
public class VehiculeService {

	@Autowired
	private VehiculeRepository vehiculeRepo;

	
	 public void save(Vehicule v) {
		 vehiculeRepo.save(v);
	 }
	 public List<Vehicule> getAllVehicule(){
		 return vehiculeRepo.findAll();
	 }
	    public List<Vehicule> getVehicleForChauffeur(int id) {
	        return vehiculeRepo.findByChauffeurId(id);
	    }
	 public Vehicule getVehiculeById(int id) {
		 return vehiculeRepo.findById(id).get();
	 }
	 public void editVehicule(int id, Vehicule v) {
		 Optional<Vehicule> existingVehicule = vehiculeRepo.findById(id);
	 
	            Vehicule vehiculeToUpdate = existingVehicule.get();
	            vehiculeToUpdate.setModel(v.getModel());
	            vehiculeToUpdate.setMatricule(v.getMatricule());
	            vehiculeToUpdate.setDate_achat(v.getDate_achat());
	            vehiculeToUpdate.setKilometrage(v.getKilometrage());

	             vehiculeRepo.save(vehiculeToUpdate);
		 
	 }
	 public void deleteVehiculeById(int id) {
		 vehiculeRepo.deleteById(id);
	 }


}

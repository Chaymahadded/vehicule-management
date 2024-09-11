package test.spring.service;


import java.time.LocalDate;
import java.time.Month;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import test.spring.entity.ServiceEntretien;
import test.spring.entity.Vehicule;
import test.spring.repository.ServiceEntretienRepository;
import test.spring.repository.VehiculeRepository;

@Service
public class ServiceEntretienService {
	@Autowired
	private VehiculeRepository vehiculeRepo;
	@Autowired
	private ServiceEntretienRepository SerEntRepo;
	public void ajouterSerEnt(ServiceEntretien SerEnt, int vehicleId) {
        Optional<Vehicule> vehicule = vehiculeRepo.findById(vehicleId);
        Vehicule v = vehicule.get();
        SerEnt.setVehicule(v);
        SerEntRepo.save(SerEnt);
    }
    public List<ServiceEntretien> getSerEntForVehicle(int vehicleId) {
        return SerEntRepo.findByVehiculeId(vehicleId);
    }
	 public ServiceEntretien getServiceById(int id) {
		 return SerEntRepo.findById(id).get();
	 }
    public void editSerEnt(int id, ServiceEntretien s) {
        Optional<ServiceEntretien> service = SerEntRepo.findById(id);
   	 
        ServiceEntretien serviceToUpdate = service.get();
        serviceToUpdate.setNom(s.getNom());
        serviceToUpdate.setCout(s.getCout());
        serviceToUpdate.setDate(s.getDate());
         
         SerEntRepo.save(serviceToUpdate);
    }
    public void deleteServiceEntretien(int id) {
    	SerEntRepo.deleteById(id);
    }
 
	public float calculateCoutMensuel(int vehicleId, int year, Month month) {
        List<ServiceEntretien> SerEnt = getSerEntForVehicle(vehicleId);
        float coutMensuel = 0;

        for (ServiceEntretien ser : SerEnt) {
        	LocalDate date = ser.getDate();
            if (date.getYear()== year && date.getMonth() == month) {
            	coutMensuel += ser.getCout();
            }
        }

        return coutMensuel;
    }


	public float calculateCoutAnnuel(int vehicleId, int year) {
        List<ServiceEntretien> SerEnt = getSerEntForVehicle(vehicleId);
        float coutAnnuel = 0;

        for (ServiceEntretien ser : SerEnt) {
        	LocalDate date = ser.getDate();
            if (date.getYear() == year) {
            	coutAnnuel += ser.getCout();
            }
        }

        return coutAnnuel;
    }

}

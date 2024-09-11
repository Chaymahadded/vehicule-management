package test.spring.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import test.spring.entity.HistCarb;
import test.spring.entity.Vehicule;
import test.spring.repository.HistCarbRepository;
import test.spring.repository.VehiculeRepository;

@Service
public class HistCarbService {
	@Autowired
	private VehiculeRepository vehiculeRepo;
	@Autowired
	private HistCarbRepository HistCarbRepo;
	public void ajouterHistCarb(HistCarb HistCarb, int vehicleId) {
        Optional<Vehicule> vehicule = vehiculeRepo.findById(vehicleId);
        Vehicule v = vehicule.get();
        HistCarb.setVehicule(v);
        HistCarb.setQuantite(HistCarb.getCout()*HistCarb.getCoutLitre());
        HistCarbRepo.save(HistCarb);
    }
    public List<HistCarb> getHistCarbForVehicle(int vehicleId) {
        return HistCarbRepo.findByVehiculeId(vehicleId);
    }
	 public HistCarb getHistById(int id) {
		 return HistCarbRepo.findById(id).get();
	 }
    public void editHistCarb(int histCarbId, HistCarb h) {
        Optional<HistCarb> histCarb = HistCarbRepo.findById(histCarbId);
        HistCarb hist = histCarb.get();
			
        hist.setCout(h.getCout());
        hist.setCoutLitre(h.getCoutLitre());
        hist.setDate(h.getDate());
        hist.setQuantite(h.getCout()*h.getCoutLitre());
         HistCarbRepo.save(hist);
    }
    public void deleteCarburant(int id) {
    	HistCarbRepo.deleteById(id);
    }
    public float calculateCoutMensuel(int vehicleId, int year, int month) {
        List<HistCarb> HistCarb = getHistCarbForVehicle(vehicleId);
        float coutMensuel = 0;

        for (HistCarb hist : HistCarb) {
            LocalDate date = hist.getDate();
            if (date.getYear() == year && date.getMonthValue() == month) {
            	coutMensuel += hist.getCout();
            }
        }

        return coutMensuel;
    }

    public float calculateCoutAnnuel(int vehicleId, int year) {
        List<HistCarb> HistCarb = getHistCarbForVehicle(vehicleId);
        float coutAnnuel = 0;

        for (HistCarb hist : HistCarb) {
            LocalDate date = hist.getDate();
            if (date.getYear() == year) {
            	coutAnnuel += hist.getCout();
            }
        }

        return coutAnnuel;
    }


}

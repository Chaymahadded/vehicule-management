package test.spring.service;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import test.spring.entity.Rappel;
import test.spring.entity.ServiceEntretien;
import test.spring.repository.RappelRepository;
import test.spring.repository.ServiceEntretienRepository;

@Service
public class RappelService {
	@Autowired 
	private RappelRepository rappelRep;
	@Autowired
	private ServiceEntretienRepository serEntRepo;
	public void ajouterRappelASerEnt(Rappel rappel, int serEntId) {
		Optional<ServiceEntretien> service = serEntRepo.findById(serEntId);
        ServiceEntretien ser = service.get();
        rappel.setServiceEntretien(ser);
        rappelRep.save(rappel);
	}
    public List<Rappel> getRappel(int serEntId) {
        return rappelRep.findByServiceEntretienId(serEntId);
    }
	 public Rappel getRappelById(int id) {
		 return rappelRep.findById(id).get();
	 }
	public void editRappel(int id, Rappel r) {
		Optional<Rappel> rappel1 = rappelRep.findById(id);
		Rappel rappel = rappel1.get();
		rappel.setDescription(r.getDescription());
		rappel.setHeure(r.getHeure());
		rappel.setDate(r.getDate());
        rappelRep.save(r);
	}

	public void supprimerRappel(int id) {
		rappelRep.deleteById(id);
	}



}

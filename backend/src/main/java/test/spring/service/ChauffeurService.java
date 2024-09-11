package test.spring.service;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import test.spring.entity.Chauffeur;
import test.spring.repository.ChauffeurRepository;

@Service
public class ChauffeurService {

	@Autowired
	private ChauffeurRepository chauffeurRep;
	public void ajouterChauffeur(Chauffeur c) {
		chauffeurRep.save(c);
	}
	



	

}

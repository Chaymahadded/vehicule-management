package test.spring.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import test.spring.entity.Chauffeur;
import test.spring.repository.ChauffeurRepository;
import test.spring.service.ChauffeurService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class AuthentificationController {
	@Autowired
	private ChauffeurService chauffeurSer;
	@Autowired
	private ChauffeurRepository chauffeurRep;
	@PostMapping("/register")
	@ResponseBody
	public void register(@RequestBody Chauffeur c) {
		chauffeurSer.ajouterChauffeur(c);
	}

	@PostMapping("/login")
	@ResponseBody
	public ResponseEntity<?> login(@RequestBody Chauffeur c) {
	    Optional<Chauffeur> chauffeur = chauffeurRep.findByEmail(c.getEmail());
	    
	    if (chauffeur.isPresent()) {
	        Chauffeur ch = chauffeur.get();
	        if (c.getPwd().equals(ch.getPwd())) {
	            return ResponseEntity.ok(ch);
	        }
	    }
	    return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Authentification échouée");
	}


}

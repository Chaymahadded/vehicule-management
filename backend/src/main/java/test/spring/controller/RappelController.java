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

import test.spring.entity.Rappel;
import test.spring.service.RappelService;
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class RappelController {
	@Autowired
	private RappelService rappelSer;
    @GetMapping("/service/{serEntId}/rappel")
    @ResponseBody
    public List<Rappel> getRappel(@PathVariable int serEntId) {
        return rappelSer.getRappel(serEntId);
    }
	@GetMapping("/rappel/{id}")
	@ResponseBody
	public Rappel getRappelById(@PathVariable("id") int id) {
		return rappelSer.getRappelById(id);
	}
    @PostMapping("/{serEntId}/ajouterRappel")
    @ResponseBody
    public void ajouterRappelAServiceEntretien(@PathVariable("serEntId") int serEntId,@RequestBody Rappel rappel) {
        rappelSer.ajouterRappelASerEnt(rappel, serEntId);
    }
    @PutMapping("/editRappel/{id}")
    @ResponseBody
    public void editSerEnt(@PathVariable int id, @RequestBody  Rappel rappel) {
         rappelSer.editRappel(id, rappel);
    }
    @DeleteMapping("/supprimerRappel/{id}")
    @ResponseBody
    public void deleteRapel(@PathVariable int id) {
    	rappelSer.supprimerRappel(id);
    }

}

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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import test.spring.entity.HistCarb;
import test.spring.service.HistCarbService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class HistCarbController {
	@Autowired
	private HistCarbService HistCarbSer;
    @PostMapping("vehicule/{vehicleId}/ajouterCarburant")
    @ResponseBody
    public void ajouterHistCarb(@RequestBody HistCarb HistCarb, @PathVariable int vehicleId) {
         HistCarbSer.ajouterHistCarb(HistCarb, vehicleId);
    }
    @GetMapping("/vehicule/{vehicleId}/carburants")
    @ResponseBody
    public List<HistCarb> getHistCarbForVehicle(@PathVariable int vehicleId) {
        return HistCarbSer.getHistCarbForVehicle(vehicleId);
    }
	@GetMapping("/carburant/{id}")
	@ResponseBody
	public HistCarb getCarburant(@PathVariable("id") int id) {
		return HistCarbSer.getHistById(id);
	}
    @PutMapping("/editCarburant/{histCarbId}")
    @ResponseBody
    public void editHistCarb(@PathVariable int histCarbId, @RequestBody HistCarb HistCarb) {
         HistCarbSer.editHistCarb(histCarbId, HistCarb);
    }
    @DeleteMapping("/supprimerCarburant/{id}")
    @ResponseBody
    public void deleteCarburant(@PathVariable int id) {
         HistCarbSer.deleteCarburant(id);
    }
    @GetMapping("/vehicle/{vehicleId}/coutMensuel")
    @ResponseBody
    public float getCoutMensuelForVehicle(@PathVariable int vehicleId, @RequestParam int year, @RequestParam int month) {
        return HistCarbSer.calculateCoutMensuel(vehicleId, year, month);
    }

    @GetMapping("/vehicle/{vehicleId}/coutAnnuel")
    @ResponseBody
    public float getCoutAnnuelForVehicle(@PathVariable int vehicleId, @RequestParam int year) {
        return HistCarbSer.calculateCoutAnnuel(vehicleId, year);
    }


}

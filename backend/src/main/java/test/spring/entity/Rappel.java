package test.spring.entity;


import java.time.LocalDate;
import java.time.LocalTime;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;


@Entity
public class Rappel {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private LocalDate date;
    private LocalTime heure;
    private String description;
   @ManyToOne
   @JoinColumn(name = "service_entretien_id")
    private ServiceEntretien serviceEntretien;
	public Rappel() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Rappel(int id, LocalDate date, LocalTime heure, String description) {
		super();
		this.id = id;
		this.date = date;
		this.heure = heure;
		this.description = description;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public LocalDate getDate() {
		return date;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}
	public LocalTime getHeure() {
		return heure;
	}
	public void setHeure(LocalTime heure) {
		this.heure = heure;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public ServiceEntretien getServiceEntretien() {
		return serviceEntretien;
	}
	public void setServiceEntretien(ServiceEntretien serviceEntretien) {
		this.serviceEntretien = serviceEntretien;
	}
    

    

}

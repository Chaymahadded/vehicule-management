package test.spring.entity;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;



@Entity
public class Vehicule {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String model;
	private int matricule;
	private int kilometrage;
	private LocalDate date_achat;
	public Vehicule() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Vehicule(int id, String model, int matricule, int kilometrage, LocalDate date_achat) {
		super();
		this.id = id;
		this.model = model;
		this.matricule = matricule;
		this.kilometrage = kilometrage;
		this.date_achat = date_achat;
	}
	@OneToMany(mappedBy = "vehicule", cascade = CascadeType.ALL)
    private List<HistCarb> HistCarbList;
	@OneToMany(mappedBy = "vehicule", cascade = CascadeType.ALL)
    private List<ServiceEntretien> ServiceEntretienList;
	 @ManyToOne
	 @JoinColumn(name = "chauffeur_id")
	 private Chauffeur chauffeur;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getModel() {
		return model;
	}
	public void setModel(String model) {
		this.model = model;
	}
	public int getMatricule() {
		return matricule;
	}
	public void setMatricule(int matricule) {
		this.matricule = matricule;
	}
	public int getKilometrage() {
		return kilometrage;
	}
	public void setKilometrage(int kilometrage) {
		this.kilometrage = kilometrage;
	}
	public LocalDate getDate_achat() {
		return date_achat;
	}
	public void setDate_achat(LocalDate date_achat) {
		this.date_achat = date_achat;
	}

	

}

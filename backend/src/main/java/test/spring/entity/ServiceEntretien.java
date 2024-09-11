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
public class ServiceEntretien {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String nom;
	private LocalDate date;
	private float cout;
	@ManyToOne
    @JoinColumn(name = "vehicule_id")
    private Vehicule vehicule;
	@OneToMany(mappedBy = "serviceEntretien", cascade = CascadeType.ALL)
    private List<Rappel> rappelList;
	public ServiceEntretien() {
		super();
		// TODO Auto-generated constructor stub
	}
	public ServiceEntretien(int id, String nom, LocalDate date, float cout, Vehicule vehicule) {
		super();
		this.id = id;
		this.nom = nom;
		this.date = date;
		this.cout = cout;
		this.vehicule = vehicule;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public LocalDate getDate() {
		return date;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}
	public float getCout() {
		return cout;
	}
	public void setCout(float cout) {
		this.cout = cout;
	}
	public Vehicule getVehicule() {
		return vehicule;
	}
	public void setVehicule(Vehicule vehicule) {
		this.vehicule = vehicule;
	}
	

}

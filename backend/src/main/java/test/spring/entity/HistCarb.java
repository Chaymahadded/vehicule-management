package test.spring.entity;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class HistCarb {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private int cout;
	private float coutLitre;
	private LocalDate date;
	private float quantite;
	@ManyToOne
    @JoinColumn(name = "vehicule_id")
    private Vehicule vehicule;
	public HistCarb() {
		super();
		// TODO Auto-generated constructor stub
	}
	public HistCarb(int id, int cout, float coutLitre, LocalDate date) {
		super();
		this.id = id;
		this.cout = cout;
		this.coutLitre = coutLitre;
		this.date = date;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getCout() {
		return cout;
	}
	public void setCout(int cout) {
		this.cout = cout;
	}
	public float getCoutLitre() {
		return coutLitre;
	}
	public void setCoutLitre(float coutLitre) {
		this.coutLitre = coutLitre;
	}
	public LocalDate getDate() {
		return date;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}
	public Vehicule getVehicule() {
		return vehicule;
	}
	public void setVehicule(Vehicule vehicule) {
		this.vehicule = vehicule;
	}
	public float getQuantite() {
		return quantite;
	}
	public void setQuantite(float quantite) {
		this.quantite = quantite;
	}
	
	

}

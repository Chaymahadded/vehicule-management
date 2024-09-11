package test.spring.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;


@Entity
public class Chauffeur {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String nom;
	private String prenom;
	private int num_permis;
	private String email;
	private String pwd;
	private String cpwd;
	public Chauffeur() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Chauffeur(int id, String nom, String prenom, int num_permis, String email, String pwd, String cpwd) {
		super();
		this.id = id;
		this.nom = nom;
		this.prenom = prenom;
		this.num_permis = num_permis;
		this.email = email;
		this.pwd = pwd;
		this.cpwd = cpwd;
	}
	@OneToMany(mappedBy = "chauffeur", cascade = CascadeType.ALL)
    private List<Vehicule> vehicules = new ArrayList<>();
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
	public String getPrenom() {
		return prenom;
	}
	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}
	public int getNum_permis() {
		return num_permis;
	}
	public void setNum_permis(int num_permis) {
		this.num_permis = num_permis;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPwd() {
		return pwd;
	}
	public void setPwd(String pwd) {
		this.pwd = pwd;
	}
	public String getCpwd() {
		return cpwd;
	}
	public void setCpwd(String cpwd) {
		this.cpwd = cpwd;
	}
	

}

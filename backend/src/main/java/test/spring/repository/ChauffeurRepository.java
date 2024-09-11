package test.spring.repository;



import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import test.spring.entity.Chauffeur;

@Repository
public interface ChauffeurRepository extends JpaRepository <Chauffeur,Integer>{
	Optional<Chauffeur> findByEmail(String email);

	
}

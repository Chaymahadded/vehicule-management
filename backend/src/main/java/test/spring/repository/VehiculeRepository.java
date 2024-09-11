package test.spring.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import test.spring.entity.Vehicule;



@Repository
public interface VehiculeRepository extends JpaRepository<Vehicule, Integer> {



	List<Vehicule> findByChauffeurId(int id);


}

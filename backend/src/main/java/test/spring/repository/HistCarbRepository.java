package test.spring.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import test.spring.entity.HistCarb;

@Repository
public interface HistCarbRepository extends JpaRepository<HistCarb,Integer>{

	List<HistCarb> findByVehiculeId(int vehicleId);

}

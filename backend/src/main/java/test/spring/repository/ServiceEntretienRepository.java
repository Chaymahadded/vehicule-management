package test.spring.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import test.spring.entity.ServiceEntretien;

@Repository
public interface ServiceEntretienRepository extends JpaRepository<ServiceEntretien,Integer> {

	List<ServiceEntretien> findByVehiculeId(int vehicleId);

}

package test.spring.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import test.spring.entity.Rappel;


@Repository
public interface RappelRepository extends JpaRepository<Rappel,Integer>{

	List<Rappel> findByServiceEntretienId(int serEntId);

}

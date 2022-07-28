package projetoIntegrador.g5.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import projetoIntegrador.g5.demo.model.Cities;

import java.util.UUID;

public interface CitiesRepository extends JpaRepository<Cities, UUID> {
    Cities findByName(String name);
}

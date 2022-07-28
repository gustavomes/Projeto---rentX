package projetoIntegrador.g5.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import projetoIntegrador.g5.demo.model.Details;

import java.util.UUID;

public interface DetailsRepository extends JpaRepository<Details, UUID> {
    Details findByFuelType(String fuelType);
}

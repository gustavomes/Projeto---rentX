package projetoIntegrador.g5.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import projetoIntegrador.g5.demo.model.Roles;

import java.util.UUID;

public interface RolesRepository extends JpaRepository <Roles, UUID> {

    Roles findByName(String name);

}

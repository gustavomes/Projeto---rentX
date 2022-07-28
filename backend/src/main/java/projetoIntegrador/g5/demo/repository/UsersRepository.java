package projetoIntegrador.g5.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import projetoIntegrador.g5.demo.model.Users;

import java.util.Optional;
import java.util.UUID;

public interface UsersRepository extends JpaRepository <Users, UUID> {

    Users findByEmail(String email);
}

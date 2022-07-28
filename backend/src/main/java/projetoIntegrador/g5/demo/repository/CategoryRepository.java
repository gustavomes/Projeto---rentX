package projetoIntegrador.g5.demo.repository;

import projetoIntegrador.g5.demo.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface CategoryRepository extends JpaRepository<Category, UUID> {
    Category findByQualification(String qualification);
}

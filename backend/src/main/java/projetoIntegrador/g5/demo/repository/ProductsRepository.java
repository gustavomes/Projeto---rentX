package projetoIntegrador.g5.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import projetoIntegrador.g5.demo.model.Products;

import java.util.List;
import java.util.UUID;

public interface ProductsRepository extends JpaRepository<Products, UUID> {

    @Query("select p from Products p join p.category c where c.qualification = :category")
    List<Products> findByCategory(String category);

    @Query("select p from Products p join p.cities ci where ci.name = :city")
    List<Products> findByCity(String city);

    Products findByTitle(String title);
}

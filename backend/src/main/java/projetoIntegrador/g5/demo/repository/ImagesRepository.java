package projetoIntegrador.g5.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import projetoIntegrador.g5.demo.model.Images;

import java.util.UUID;

public interface ImagesRepository extends JpaRepository<Images, UUID> {

    Images findByUrl(String url);
}

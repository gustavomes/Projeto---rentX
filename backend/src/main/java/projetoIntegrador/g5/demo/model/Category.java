package projetoIntegrador.g5.demo.model;


import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "categories")
public class Category {
    @Id
    @GeneratedValue
    @Type(type = "uuid-char")
    private UUID id;
    private String qualification;
    private String description;
    private String urlImage;

    public Category() {
    }

    public Category(UUID id, String qualification, String description, String urlImage) {
        this.id = id;
        this.qualification = qualification;
        this.description = description;
        this.urlImage = urlImage;
    }

    public Category(String qualification, String description, String urlImage) {
        this.qualification = qualification;
        this.description = description;
        this.urlImage = urlImage;
    }

    public UUID getId() {
        return id;
    }

    public String getQualification() {
        return qualification;
    }

    public void setQualification(String qualification) {
        this.qualification = qualification;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getUrlImage() {
        return urlImage;
    }

    public void setUrlImage(String urlImage) {
        this.urlImage = urlImage;
    }

}
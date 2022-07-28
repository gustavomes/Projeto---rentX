package projetoIntegrador.g5.demo.model;

import org.hibernate.annotations.Type;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.UUID;

@Entity
public class Roles {

    @Id
    @GeneratedValue
    @Type(type = "uuid-char")
    private UUID id;
    private String name;


    public Roles() {
    }

    public Roles(String name) {
        this.name = name;
    }

    public Roles(UUID id, String name) {
        this.id = id;
        this.name = name;
    }

    public UUID getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}

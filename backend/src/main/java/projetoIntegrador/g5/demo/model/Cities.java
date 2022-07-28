package projetoIntegrador.g5.demo.model;

import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.util.UUID;

@Entity
public class Cities {

    @Id
    @GeneratedValue
    @Type(type = "uuid-char")
    private UUID id;
    private String name;
    private String state;
    private String country;

    public Cities() {
    }

    public Cities(UUID id, String name, String state, String country) {
        this.id = id;
        this.name = name;
        this.state = state;
        this.country = country;
    }

    public Cities(String name, String state, String country) {
        this.name = name;
        this.state = state;
        this.country = country;
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

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }
}

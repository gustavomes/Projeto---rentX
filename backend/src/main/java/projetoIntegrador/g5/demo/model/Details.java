package projetoIntegrador.g5.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
public class Details {

    @Id
    @GeneratedValue //(strategy = GenerationType.IDENTITY)
    @Type(type = "uuid-char")
    private UUID id;
    private String icon;
    private String fuelType;

    @JsonIgnore
    @ManyToMany(mappedBy = "detailsList")
    private List<Products> productsList = new ArrayList<>();

    public Details() {
    }

    public Details(UUID id, String icon, String fuelType, List<Products> productsList) {
        this.id = id;
        this.icon = icon;
        this.fuelType = fuelType;
        this.productsList = productsList;
    }

    public Details(String icon, String fuelType, List<Products> productsList) {
        this.icon = icon;
        this.fuelType = fuelType;
        this.productsList = productsList;
    }

    public UUID getId() {
        return id;
    }

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    public String getFuelType() {
        return fuelType;
    }

    public void setFuelType(String fuelType) {
        this.fuelType = fuelType;
    }

    public List<Products> getProductsList() {
        return productsList;
    }

    public void setProductsList(List<Products> productsList) {
        this.productsList = productsList;
    }
}

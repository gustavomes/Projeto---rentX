package projetoIntegrador.g5.demo.dto;

import projetoIntegrador.g5.demo.model.Cities;

import java.util.UUID;

public class CitiesDto {
    private String name;
    private String state;
    private String country;

    public CitiesDto() {
    }

    public CitiesDto(Cities cities) {
        this.name = cities.getName();
        this.state = cities.getState();
        this.country = cities.getCountry();
    }

    public String getName() {
        return name;
    }

    public String getState() {
        return state;
    }

    public String getCountry() {
        return country;
    }
}

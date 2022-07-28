package projetoIntegrador.g5.demo.dto;

import projetoIntegrador.g5.demo.model.Cities;

import java.util.UUID;

public class CitiesResponseDto {

    private UUID id;
    private String name;
    private String state;
    private String country;

    public CitiesResponseDto() {
    }

    public CitiesResponseDto(Cities city) {
        this.id = city.getId();
        this.name = city.getName();
        this.state = city.getState();
        this.country = city.getCountry();
    }

    public UUID getId() {
        return id;
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

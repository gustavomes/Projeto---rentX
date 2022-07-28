package projetoIntegrador.g5.demo.dto;

import projetoIntegrador.g5.demo.model.Details;

import java.util.UUID;

public class DetailsResponseDto {
    private UUID id;
    private String fuelType;
    private String icon;

    public DetailsResponseDto() {
    }

    public DetailsResponseDto(Details details) {
        this.id = details.getId();
        this.fuelType = details.getFuelType();
        this.icon = details.getIcon();
    }

    public UUID getId() {
        return id;
    }

    public String getFuelType() {
        return fuelType;
    }

    public String getIcon() {
        return icon;
    }
}

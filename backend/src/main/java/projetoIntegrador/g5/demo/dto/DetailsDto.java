package projetoIntegrador.g5.demo.dto;

import projetoIntegrador.g5.demo.model.Details;

public class DetailsDto {
    private String icon;

    private String fuelType;

    public DetailsDto() {
    }

    public DetailsDto(Details details) {
        this.icon = details.getIcon();
        this.fuelType = details.getFuelType();
    }

    public String getIcon() {
        return icon;
    }

    public String getFuelType() {
        return fuelType;
    }
}

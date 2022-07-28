package projetoIntegrador.g5.demo.dto;

import projetoIntegrador.g5.demo.model.Roles;

import java.util.UUID;

public class RolesResponseDto {
    private UUID id;
    private String name;

    public RolesResponseDto() {
    }

    public RolesResponseDto(Roles roles) {
        this.id = roles.getId();
        this.name = roles.getName();
    }

    public UUID getId() {
        return id;
    }

    public String getName() {
        return name;
    }
}

package projetoIntegrador.g5.demo.dto;

import projetoIntegrador.g5.demo.model.Roles;

public class RolesDto {
    private String name;

    public RolesDto() {
    }

    public RolesDto (Roles roles) {
        this.name = roles.getName();
    }
    public String getName() {
        return name;
    }

}


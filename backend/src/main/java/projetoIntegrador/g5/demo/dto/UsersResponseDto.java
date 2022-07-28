package projetoIntegrador.g5.demo.dto;

import projetoIntegrador.g5.demo.model.Users;

import java.util.UUID;

public class UsersResponseDto {
    private UUID id;
    private String name;
    private String lastname;
    private String email;
    private String roles;

    public UsersResponseDto() {
    }

    public UsersResponseDto(Users users) {
        this.id = users.getId();
        this.name = users.getName();
        this.lastname = users.getLastname();
        this.email = users.getEmail();
        this.roles = users.getRoles().getName();
    }

    public UUID getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getLastname() {
        return lastname;
    }

    public String getEmail() {
        return email;
    }

    public String getRoles() {
        return roles;
    }
}

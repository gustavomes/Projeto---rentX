package projetoIntegrador.g5.demo.dto;

import projetoIntegrador.g5.demo.model.Users;

public class UsersDto {
    private String name;
    private String lastname;
    private String email;
    private String password;

    private String roles;


    public UsersDto() {
    }

    public UsersDto (Users users) {
        this.name = users.getName();
        this.lastname = users.getLastname();
        this.email = users.getEmail();
        this.password = users.getPassword();
        this.roles = users.getRoles().getName();
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

    public String getPassword() {
        return password;
    }

    public String getRoles() {
        return roles;
    }
}


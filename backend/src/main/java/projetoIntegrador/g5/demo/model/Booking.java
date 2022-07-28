package projetoIntegrador.g5.demo.model;

import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.time.OffsetDateTime;
import java.util.UUID;

@Entity
public class Booking {
    @Id
    @GeneratedValue
    @Type(type = "uuid-char")
    private UUID id;
    private OffsetDateTime startDate;
    private OffsetDateTime endDate;

    @ManyToOne
    @JoinColumn (name = "product_id")
    private Products products;

    @ManyToOne
    @JoinColumn (name = "user_id")
    private Users users;

    public Booking() {
    }

    public Booking(UUID id, OffsetDateTime startDate, OffsetDateTime endDate, Products products, Users users) {
        this.id = id;
        this.startDate = startDate;
        this.endDate = endDate;
        this.products = products;
        this.users = users;
    }

    public Booking(OffsetDateTime startDate, OffsetDateTime endDate, Products products, Users users) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.products = products;
        this.users = users;
    }

    public UUID getId() {
        return id;
    }

    public OffsetDateTime getStartDate() {
        return startDate;
    }

    public void setStartDate(OffsetDateTime startDate) {
        this.startDate = startDate;
    }

    public OffsetDateTime getEndDate() {
        return endDate;
    }

    public void setEndDate(OffsetDateTime endDate) {
        this.endDate = endDate;
    }

    public Products getProducts() {
        return products;
    }

    public void setProducts(Products products) {
        this.products = products;
    }

    public Users getUsers() {
        return users;
    }

    public void setUsers(Users users) {
        this.users = users;
    }
}

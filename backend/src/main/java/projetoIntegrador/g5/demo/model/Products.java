package projetoIntegrador.g5.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
public class Products {


    @Id
    @GeneratedValue
    @Type(type = "uuid-char")
    private UUID id;
    private String description;
    private String acceleration;
    private String brand;
    private String capacity;
    private String horsePower;
    private String price;
    private String title;
    private String transmission;
    private String thumbnail;
    private String velocity;

    @ManyToMany
    @JoinTable(
            name = "product_details",
            joinColumns = @JoinColumn(name = "product_id"),
            inverseJoinColumns = @JoinColumn(name = "details_id")
    )
    private List<Details> detailsList = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "city_id")
    private Cities cities;

    @OneToMany
    @JoinColumn(name = "product_id")
    private List<Images> imagesList = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    @JsonIgnore
    @OneToMany(mappedBy = "products")
    private List<Booking> bookingList = new ArrayList<>();

    public Products() {
    }

    public Products(UUID id, String description, String acceleration, String brand, String capacity, String horsePower, String price, String title, String transmission, String thumbnail, String velocity, List<Details> detailsList, Cities cities, List<Images> imagesList, Category category, List<Booking> bookingList) {
        this.id = id;
        this.description = description;
        this.acceleration = acceleration;
        this.brand = brand;
        this.capacity = capacity;
        this.horsePower = horsePower;
        this.price = price;
        this.title = title;
        this.transmission = transmission;
        this.thumbnail = thumbnail;
        this.velocity = velocity;
        this.detailsList = detailsList;
        this.cities = cities;
        this.imagesList = imagesList;
        this.category = category;
        this.bookingList = bookingList;
    }

    public Products(String description, String acceleration, String brand, String capacity, String horsePower, String price, String title, String transmission, String thumbnail, String velocity, List<Details> detailsList, Cities cities, List<Images> imagesList, Category category, List<Booking> bookingList) {
        this.description = description;
        this.acceleration = acceleration;
        this.brand = brand;
        this.capacity = capacity;
        this.horsePower = horsePower;
        this.price = price;
        this.title = title;
        this.transmission = transmission;
        this.thumbnail = thumbnail;
        this.velocity = velocity;
        this.detailsList = detailsList;
        this.cities = cities;
        this.imagesList = imagesList;
        this.category = category;
        this.bookingList = bookingList;
    }

    public UUID getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getAcceleration() {
        return acceleration;
    }

    public void setAcceleration(String acceleration) {
        this.acceleration = acceleration;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getCapacity() {
        return capacity;
    }

    public void setCapacity(String capacity) {
        this.capacity = capacity;
    }

    public String getHorsePower() {
        return horsePower;
    }

    public void setHorsePower(String horsePower) {
        this.horsePower = horsePower;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getTransmission() {
        return transmission;
    }

    public void setTransmission(String transmission) {
        this.transmission = transmission;
    }

    public String getThumbnail() {
        return thumbnail;
    }

    public void setThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
    }

    public String getVelocity() {
        return velocity;
    }

    public void setVelocity(String velocity) {
        this.velocity = velocity;
    }

    public List<Details> getDetailsList() {
        return detailsList;
    }

    public void setDetailsList(List<Details> detailsList) {
        this.detailsList = detailsList;
    }

    public Cities getCities() {
        return cities;
    }

    public void setCities(Cities cities) {
        this.cities = cities;
    }

    public List<Images> getImagesList() {
        return imagesList;
    }

    public void setImagesList(List<Images> imagesList) {
        this.imagesList = imagesList;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public List<Booking> getBookingList() {
        return bookingList;
    }

    public void setBookingList(List<Booking> bookingList) {
        this.bookingList = bookingList;
    }
}

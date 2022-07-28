package projetoIntegrador.g5.demo.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import projetoIntegrador.g5.demo.model.*;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public class ProductsDto {
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
    private List<String> fuelType;

    private String city;

    private List<String> images;

    private String category;

    public ProductsDto() {
    }

    public ProductsDto (Products products) {
        this.description = products.getDescription();
        this.acceleration = products.getAcceleration();
        this.brand = products.getBrand();
        this.capacity = products.getCapacity();
        this.horsePower = products.getHorsePower();
        this.price = products.getPrice();
        this.title = products.getTitle();
        this.transmission = products.getTransmission();
        this.thumbnail = products.getThumbnail();
        this.velocity = products.getVelocity();
        this.fuelType = products.getDetailsList().stream().map(Details::getFuelType).toList();
        this.city = products.getCities().getName();
        this.images = products.getImagesList().stream().map(Images::getUrl).toList();
        this.category = products.getCategory().getQualification();
    }

    public String getDescription() {
        return description;
    }

    public String getAcceleration() {
        return acceleration;
    }

    public String getBrand() {
        return brand;
    }

    public String getCapacity() {
        return capacity;
    }

    public String getHorsePower() {
        return horsePower;
    }

    public String getPrice() {
        return price;
    }

    public String getTitle() {
        return title;
    }

    public String getTransmission() {
        return transmission;
    }

    public String getThumbnail() {
        return thumbnail;
    }

    public String getVelocity() {
        return velocity;
    }

    public List<String> getFuelType() {
        return fuelType;
    }

    public String getCity() {
        return city;
    }

    public List<String> getImages() {
        return images;
    }

    public String getCategory() {
        return category;
    }
}

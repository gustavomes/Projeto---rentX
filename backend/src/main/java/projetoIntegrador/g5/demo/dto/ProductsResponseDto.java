package projetoIntegrador.g5.demo.dto;

import projetoIntegrador.g5.demo.model.Booking;
import projetoIntegrador.g5.demo.model.Details;
import projetoIntegrador.g5.demo.model.Images;
import projetoIntegrador.g5.demo.model.Products;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.OffsetDateTime;
import java.time.ZoneOffset;
import java.time.format.DateTimeFormatter;
import java.util.*;

public class ProductsResponseDto {
    private UUID id;
    private String description;
    private String acceleration;
    private String brand;
    private String capacity;
    private String horsePower;
    private String price;
    private String title;
    private String slug;
    private String transmission;
    private String thumbnail;
    private String velocity;
    private List<String> images;

    private List<String> fuelType;

    private String city;

    private String category;

    private List<String> unavailableDates;

    public ProductsResponseDto() {
    }

    public ProductsResponseDto(Products products) {
        this.id = products.getId();
        this.description = products.getDescription();
        this.acceleration = products.getAcceleration();
        this.brand = products.getBrand();
        this.capacity = products.getCapacity();
        this.horsePower = products.getHorsePower();
        this.price = products.getPrice();
        this.title = products.getTitle();
        this.slug = normalizeSlug(products.getTitle());
        this.transmission = products.getTransmission();
        this.thumbnail = products.getThumbnail();
        this.velocity = products.getVelocity();
        this.images = products.getImagesList().stream().map(Images::getUrl).toList();
        this.fuelType = products.getDetailsList().stream().map(Details::getFuelType).toList();
        this.city = products.getCities().getName();
        this.category = products.getCategory().getQualification();
        this.unavailableDates = loopThroughBookingListAndMergeArrays(products.getBookingList());
    }



    public UUID getId() {
        return id;
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

    public String getSlug() {
        return slug;
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

    public List<String> getImages() {
        return images;
    }

    public List<String> getFuelType() {
        return fuelType;
    }

    public String getCity() {
        return city;
    }

    public String getCategory() {
        return category;
    }

    public List<String> getUnavailableDates() {
        return unavailableDates;
    }

    public String normalizeSlug(String title) {
        return title.toLowerCase().replace(" ", "-");
    }

    public List<LocalDate> getDatesBetween(OffsetDateTime startDate, OffsetDateTime endDate) {
        LocalDate startLocalDate = startDate.toLocalDate();
        LocalDate endLocalDate = endDate.toLocalDate();
        List<LocalDate> listOfDates = new ArrayList<>();
        return listOfDates = startLocalDate.datesUntil(endLocalDate.plusDays(1)).toList();
    }

    public List<String> loopThroughBookingListAndMergeArrays(List<Booking> bookingList) {
        SortedSet<LocalDate> unavailableDates = new TreeSet<>();
        for (Booking booking : bookingList) {
            unavailableDates.addAll(getDatesBetween(booking.getStartDate(), booking.getEndDate()));
        }

        List<OffsetDateTime> unavailableDatesOffsetDateTime = new ArrayList<>();
        for (LocalDate date : unavailableDates) {
            unavailableDatesOffsetDateTime.add(OffsetDateTime.of(date, LocalTime.NOON, ZoneOffset.UTC));
        }

        List<String> unavailableDatesString = new ArrayList<>();
        for (OffsetDateTime date : unavailableDatesOffsetDateTime) {
            unavailableDatesString.add(date.format(DateTimeFormatter.ofPattern("EEE, dd LLL yyyy HH:mm:ss O")));
    }
        return unavailableDatesString;
    }
}

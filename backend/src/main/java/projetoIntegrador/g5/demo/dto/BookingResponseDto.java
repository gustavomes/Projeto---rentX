package projetoIntegrador.g5.demo.dto;

import projetoIntegrador.g5.demo.model.Booking;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.OffsetDateTime;
import java.time.format.DateTimeFormatter;
import java.util.UUID;

public class BookingResponseDto {
    private UUID id;
    private String startDate;
    private String endDate;
    private String product;
    private String user;
    private UUID userID;

    public BookingResponseDto() {
    }

    public BookingResponseDto(Booking booking) {
        this.id = booking.getId();
        this.startDate = offsetDateTimeToString(booking.getStartDate());
        this.endDate = offsetDateTimeToString(booking.getEndDate());
        this.product = booking.getProducts().getTitle();
        this.user = booking.getUsers().getEmail();
        this.userID = booking.getUsers().getId();
    }

    public UUID getId() {
        return id;
    }

    public String getStartDate() {
        return startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public String getProduct() {
        return product;
    }

    public String getUser() {
        return user;
    }

    public UUID getUserID() {
        return userID;
    }

    private String offsetDateTimeToString(OffsetDateTime offsetDateTime) {
        return offsetDateTime.format(DateTimeFormatter.ofPattern("EEE, dd LLL yyyy HH:mm:ss O"));
    }
}

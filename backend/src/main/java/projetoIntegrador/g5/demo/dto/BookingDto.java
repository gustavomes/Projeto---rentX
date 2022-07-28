package projetoIntegrador.g5.demo.dto;

import projetoIntegrador.g5.demo.model.Booking;

import java.time.OffsetDateTime;
import java.time.format.DateTimeFormatter;

public class BookingDto {
    private String startDate;
    private String endDate;

    private String products;

    private String users;

    public BookingDto() {
    }

    public BookingDto (Booking booking) {
        this.startDate = offsetDateTimeToString(booking.getStartDate());
        this.endDate = offsetDateTimeToString(booking.getEndDate());
        this.products = booking.getProducts().getTitle();
        this.users = booking.getUsers().getEmail();
    }

    public String getStartDate() {
        return startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public String getProducts() {
        return products;
    }

    public String getUsers() {
        return users;
    }

    private String offsetDateTimeToString(OffsetDateTime offsetDateTime) {
        return offsetDateTime.format(DateTimeFormatter.ofPattern("EEE, dd LLL yyyy HH:mm:ss O"));
    }
}

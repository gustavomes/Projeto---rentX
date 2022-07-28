package projetoIntegrador.g5.demo.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import projetoIntegrador.g5.demo.dto.BookingDto;
import projetoIntegrador.g5.demo.dto.BookingResponseDto;
import projetoIntegrador.g5.demo.model.Booking;
import projetoIntegrador.g5.demo.repository.BookingRepository;
import projetoIntegrador.g5.demo.repository.ProductsRepository;
import projetoIntegrador.g5.demo.repository.UsersRepository;

import java.time.OffsetDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class BookingService {
    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private ProductsRepository productsRepository;

    @Autowired
    private UsersRepository usersRepository;

    public List <BookingResponseDto> listAll() {
        List<Booking> bookingList = bookingRepository.findAll();
        List<BookingResponseDto> bookingResponseDtoList = new ArrayList<>();
        for (Booking booking : bookingList) {
            bookingResponseDtoList.add(new BookingResponseDto(booking));
        }
        return bookingResponseDtoList;
    }

    public BookingResponseDto find(String id) {
        Booking booking = bookingRepository.findById(UUID.fromString(id)).get();
        return new BookingResponseDto(booking);
    }

    public BookingResponseDto save(BookingDto bookingDto) {
        Booking booking = new Booking();
        BeanUtils.copyProperties(bookingDto, booking);
        booking.setStartDate(stringToOffsetDateTime(bookingDto.getStartDate()));
        booking.setEndDate(stringToOffsetDateTime(bookingDto.getEndDate()));
        booking.setProducts(productsRepository.findByTitle(bookingDto.getProducts()));
        booking.setUsers(usersRepository.findByEmail(bookingDto.getUsers()));
        booking = bookingRepository.save(booking);
        return new BookingResponseDto(booking);
    }

    private OffsetDateTime stringToOffsetDateTime(String dateTime) {
        return OffsetDateTime.parse(dateTime, DateTimeFormatter.ofPattern("EEE, dd LLL yyyy HH:mm:ss O"));
    }

    public void delete(String id) {
        bookingRepository.deleteById(UUID.fromString(id));
    }

    public BookingResponseDto update(BookingDto bookingDto, String id) {
        Booking booking = bookingRepository.getById(UUID.fromString(id));
        booking.setStartDate(stringToOffsetDateTime(bookingDto.getStartDate()));
        booking.setEndDate(stringToOffsetDateTime(bookingDto.getEndDate()));
        booking.setProducts(productsRepository.findByTitle(bookingDto.getProducts()));
        booking.setUsers(usersRepository.findByEmail(bookingDto.getUsers()));
        booking = bookingRepository.save(booking);
        return new BookingResponseDto(booking);
    }

    public List<BookingResponseDto> listBookingByUser(String id) {
        List<Booking> bookingList = bookingRepository.findByUser(UUID.fromString(id));
        List<BookingResponseDto> bookingResponseDtoList = new ArrayList<>();
        for (Booking booking : bookingList) {
            bookingResponseDtoList.add(new BookingResponseDto(booking));
        }
        return bookingResponseDtoList;
    }

    public List<BookingResponseDto> listBookingByUserByEmail(String email) {
        List<Booking> bookingList = bookingRepository.findByUserByEmail(email);
        List<BookingResponseDto> bookingResponseDtoList = new ArrayList<>();
        for (Booking booking : bookingList) {
            bookingResponseDtoList.add(new BookingResponseDto(booking));
        }
        return bookingResponseDtoList;
    }
}

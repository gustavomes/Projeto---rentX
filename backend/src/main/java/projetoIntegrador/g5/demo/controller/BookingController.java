package projetoIntegrador.g5.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import projetoIntegrador.g5.demo.dto.BookingDto;
import projetoIntegrador.g5.demo.service.BookingService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/booking")

public class BookingController {
    @Autowired
    private BookingService bookingService;

    @PostMapping
    public ResponseEntity <?> createBooking (@RequestBody BookingDto bookingDto) {
        try {
            return new ResponseEntity<>(bookingService.save(bookingDto), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping
    public ResponseEntity <?> getAllBooking () {
        try {
            return new ResponseEntity<>(bookingService.listAll(), HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping ("/{id}")
    public ResponseEntity <?> findBookingById (@PathVariable String id) {
        try {
            return new ResponseEntity<>(bookingService.find(id), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping ("/{id}")
    public ResponseEntity <?> deleteBooking (@PathVariable String id) {
        try {
            bookingService.delete(id);
            return new ResponseEntity<>("Reserva removida com sucesso" , HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping ("/{id}")
    public ResponseEntity <?> updateBooking (@PathVariable String id, @RequestBody BookingDto bookingDto) {
        try {
            return new ResponseEntity<>(bookingService.update(bookingDto, id), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<?> findBookingByUser(@PathVariable String id) {
        try {
            return new ResponseEntity<>(bookingService.listBookingByUser(id), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/users")
    public ResponseEntity<?> findBookingByUserByEmail(@RequestParam(value = "email") String email) {
        try {
            return new ResponseEntity<>(bookingService.listBookingByUserByEmail(email), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

}

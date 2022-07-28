package projetoIntegrador.g5.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import projetoIntegrador.g5.demo.model.Booking;

import java.util.List;
import java.util.UUID;

public interface BookingRepository extends JpaRepository < Booking, UUID > {

    @Query("select b from Booking b join b.users u where u.id = :id")
    List<Booking> findByUser(UUID id);

    @Query("select b from Booking b join b.users u where u.email = :email")
    List<Booking> findByUserByEmail(String email);

}

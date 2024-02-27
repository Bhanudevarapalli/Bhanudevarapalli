package com.example.nxtstayz.repository;
import java.util.List;
import com.example.nxtstayz.model.Room;
import com.example.nxtstayz.model.Hotel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface RoomJpaRepository extends JpaRepository<Room, Integer> {
    List<Room> findByHotel(Hotel hotel);
}
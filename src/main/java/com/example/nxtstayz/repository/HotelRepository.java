package com.example.nxtstayz.repository;

import java.util.ArrayList;
import java.util.List;
import com.example.nxtstayz.model.*;

public interface HotelRepository {
    ArrayList<Hotel> getHotels();

    Hotel getHotelById(int hotelId);

    Hotel addHotel(Hotel hotel);

    Hotel updateHotel(int hotelId, Hotel hotel);

    void deleteHotel(int hotelId);

    List<Room> getRoomHotels(int hotelId);
}
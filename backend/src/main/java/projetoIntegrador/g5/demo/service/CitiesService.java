package projetoIntegrador.g5.demo.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import projetoIntegrador.g5.demo.dto.CitiesDto;
import projetoIntegrador.g5.demo.dto.CitiesResponseDto;
import projetoIntegrador.g5.demo.model.Cities;
import projetoIntegrador.g5.demo.repository.CitiesRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class CitiesService {

    @Autowired
    private CitiesRepository citiesRepository;

    public List<CitiesResponseDto> listAll() {
        List<Cities> citiesList = citiesRepository.findAll();
        List<CitiesResponseDto>  citiesResponseDtoList = new ArrayList<>();
        for (Cities city : citiesList) {
            citiesResponseDtoList.add(new CitiesResponseDto(city));
        }
        return citiesResponseDtoList;
    }

    public CitiesResponseDto find(String id) {
        Cities city = citiesRepository.findById(UUID.fromString(id)).get();
        return new CitiesResponseDto(city);
    }

    public CitiesResponseDto save(CitiesDto citiesDto) {
        Cities city = new Cities();
        BeanUtils.copyProperties(citiesDto, city);
        city = citiesRepository.save(city);
        return new CitiesResponseDto(city);
    }

    public void delete(String id) {
        citiesRepository.deleteById(UUID.fromString(id));
    }

    public CitiesResponseDto update(CitiesDto citiesDto, String id) {
        Cities city = citiesRepository.getById(UUID.fromString(id));
        city.setName(citiesDto.getName());
        city.setState(citiesDto.getState());
        city.setCountry(citiesDto.getCountry());
        city = citiesRepository.save(city);
        return new CitiesResponseDto(city);
    }
}

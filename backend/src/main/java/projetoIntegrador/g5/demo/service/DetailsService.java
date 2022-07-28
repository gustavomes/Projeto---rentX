package projetoIntegrador.g5.demo.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import projetoIntegrador.g5.demo.dto.DetailsDto;
import projetoIntegrador.g5.demo.dto.DetailsResponseDto;
import projetoIntegrador.g5.demo.model.Details;
import projetoIntegrador.g5.demo.repository.DetailsRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class DetailsService {

    @Autowired
    private DetailsRepository detailsRepository;

    public List<DetailsResponseDto> listAll() {
        List<Details> detailsList = detailsRepository.findAll();
        List<DetailsResponseDto> detailsResponseDtoList = new ArrayList<>();
        for (Details detail : detailsList) {
            detailsResponseDtoList.add(new DetailsResponseDto(detail));
        }
        return detailsResponseDtoList;
    }

    public DetailsResponseDto find(String id) {
        Details detail = detailsRepository.findById(UUID.fromString(id)).get();
        return new DetailsResponseDto(detail);
    }

    public DetailsResponseDto save(DetailsDto detailsDto) {
        Details details = new Details();
        BeanUtils.copyProperties(detailsDto, details);
        details = detailsRepository.save(details);
        return new DetailsResponseDto(details);
    }

    public void delete(String id) {
        detailsRepository.deleteById(UUID.fromString(id));
    }

    public DetailsResponseDto update(DetailsDto detailsDto, String id) {
        Details details = detailsRepository.getById(UUID.fromString(id));
        details.setFuelType(detailsDto.getFuelType());
        details.setIcon(detailsDto.getIcon());
        details = detailsRepository.save(details);
        return new DetailsResponseDto(details);
    }
}

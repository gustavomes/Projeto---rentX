package projetoIntegrador.g5.demo.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import projetoIntegrador.g5.demo.dto.ImagesDto;
import projetoIntegrador.g5.demo.dto.ImagesResponseDto;
import projetoIntegrador.g5.demo.model.Images;
import projetoIntegrador.g5.demo.repository.ImagesRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class ImagesService {

    @Autowired
    private ImagesRepository imageRepository;

    public List<ImagesResponseDto> listAll() {
        List<Images> imagesList = imageRepository.findAll();
        List<ImagesResponseDto> imagesResponseDtoList = new ArrayList<>();
        for (Images image : imagesList) {
            imagesResponseDtoList.add(new ImagesResponseDto(image));
        }
        return imagesResponseDtoList;
    }
    public ImagesResponseDto find(String id) {
        Images image = imageRepository.findById(UUID.fromString(id)).get();
        return new ImagesResponseDto(image);
    }

    public ImagesResponseDto save(ImagesDto imagesDto) {
        Images image = new Images();
        BeanUtils.copyProperties(imagesDto, image);
        image = imageRepository.save(image);
        return new ImagesResponseDto(image);
    }

    public void delete(String id) {
        imageRepository.deleteById(UUID.fromString(id));
    }

    public ImagesResponseDto update(ImagesDto imagesDto, String id) {
        Images image = imageRepository.getById(UUID.fromString(id));
        image.setUrl(imagesDto.getUrl());
        image.setTitle(imagesDto.getTitle());

        image = imageRepository.save(image);
        return new ImagesResponseDto(image);
    }

}

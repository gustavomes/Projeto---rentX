package projetoIntegrador.g5.demo.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import projetoIntegrador.g5.demo.dto.ProductsDto;
import projetoIntegrador.g5.demo.dto.ProductsResponseDto;
import projetoIntegrador.g5.demo.exceptions.ResourceNotFindException;
import projetoIntegrador.g5.demo.model.Products;
import projetoIntegrador.g5.demo.repository.*;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class ProductsService {

    @Autowired
    private ProductsRepository productsRepository;

    @Autowired
    private DetailsRepository detailsRepository;

    @Autowired
    private CitiesRepository citiesRepository;

    @Autowired
    private ImagesRepository imagesRepository;

    @Autowired
    private CategoryRepository categoryRepository;


    public List<ProductsResponseDto> listAll() {
        List<Products> productsList = productsRepository.findAll();
        List<ProductsResponseDto> productsResponseDtoList = new ArrayList<>();
        for (Products product : productsList) {
            productsResponseDtoList.add(new ProductsResponseDto(product));
        }
        return productsResponseDtoList;
    }
    public ProductsResponseDto find(String id) {
        Products products = productsRepository.findById(UUID.fromString(id)).get();
        return new ProductsResponseDto(products);
    }

    public ProductsResponseDto save(ProductsDto productsDto) {
        Products products = new Products();
        BeanUtils.copyProperties(productsDto, products);

        products.getDetailsList().addAll(productsDto.getFuelType().stream().map(productsX -> detailsRepository.findByFuelType(productsX)).toList());
        if (products.getDetailsList().contains(null)){
            throw new ResourceNotFindException("Details not found");
        }

        products.setCities(citiesRepository.findByName(productsDto.getCity()));

        products.getImagesList().addAll(productsDto.getImages().stream().map(imageX -> imagesRepository.findByUrl(imageX)).toList());
        if (products.getImagesList().contains(null)) {
            throw new ResourceNotFindException("Image not found");
        }

        products.setCategory(categoryRepository.findByQualification(productsDto.getCategory()));

        products = productsRepository.save(products);

        return new ProductsResponseDto(products);
    }

    public void delete(String id) {
        productsRepository.deleteById(UUID.fromString(id));
    }

    public ProductsResponseDto update(ProductsDto productsDto, String id) {
        Products products = productsRepository.getById(UUID.fromString(id));
        products.setDescription(productsDto.getDescription());
        products.setAcceleration(productsDto.getAcceleration());
        products.setBrand(productsDto.getBrand());
        products.setCapacity(productsDto.getCapacity());
        products.setHorsePower(productsDto.getHorsePower());
        products.setPrice(productsDto.getPrice());
        products.setTitle(productsDto.getTitle());
        products.setTransmission(productsDto.getTransmission());
        products.setThumbnail(productsDto.getThumbnail());
        products.setVelocity(productsDto.getVelocity());

        products.setCities(citiesRepository.findByName(productsDto.getCity()));
        products.setCategory(categoryRepository.findByQualification(productsDto.getCategory()));

        products = productsRepository.save(products);
        return new ProductsResponseDto(products);
    }


    public List<ProductsResponseDto> listProductByCategory(String category) {
        List<Products> productsList = productsRepository.findByCategory(category);
        List<ProductsResponseDto> productsResponseDtoList = new ArrayList<>();
        for (Products product : productsList) {
            productsResponseDtoList.add(new ProductsResponseDto(product));
        }
        return productsResponseDtoList;
    }

    public List<ProductsResponseDto> listProductsByCity(String city) {
        List<Products> productsList = productsRepository.findByCity(city);
        List<ProductsResponseDto> productsResponseDtoList = new ArrayList<>();
        for (Products product : productsList) {
            productsResponseDtoList.add(new ProductsResponseDto(product));
        }
        return productsResponseDtoList;
    }

}

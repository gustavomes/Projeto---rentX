package projetoIntegrador.g5.demo.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import projetoIntegrador.g5.demo.dto.CategoryDto;
import projetoIntegrador.g5.demo.dto.CategoryResponseDto;
import projetoIntegrador.g5.demo.model.Category;
import projetoIntegrador.g5.demo.repository.CategoryRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    public List<CategoryResponseDto> listAll() {
        List<Category> categoryList = categoryRepository.findAll();
        List<CategoryResponseDto> categoryResponseDtoList = new ArrayList<>();
        for (Category category : categoryList) {
            categoryResponseDtoList.add(new CategoryResponseDto(category));
        }
        return categoryResponseDtoList;
    }

    public CategoryResponseDto find(String id) {
        Category category = categoryRepository.findById(UUID.fromString(id)).get();
        return new CategoryResponseDto(category);
    }

    public CategoryResponseDto save(CategoryDto categoryDto) {
        Category category = new Category();
        BeanUtils.copyProperties(categoryDto, category);
        category = categoryRepository.save(category);
        return new CategoryResponseDto(category);
    }

    public void delete(String id) {
        categoryRepository.deleteById(UUID.fromString(id));
    }

    public CategoryResponseDto update(CategoryDto categoryDto, String id) {
        Category category = categoryRepository.getById(UUID.fromString(id));
        category.setDescription(categoryDto.getDescription());
        category.setQualification(categoryDto.getQualification());
        category.setUrlImage(categoryDto.getUrlImage());
        category = categoryRepository.save(category);
        return new CategoryResponseDto(category);
    }

}
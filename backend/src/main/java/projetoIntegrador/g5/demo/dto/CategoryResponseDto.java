package projetoIntegrador.g5.demo.dto;

import projetoIntegrador.g5.demo.model.Category;

import java.util.UUID;

public class CategoryResponseDto {
    private UUID id;
    private String qualification;
    private String description;
    private String urlImage;

    public CategoryResponseDto() {
    }

    public CategoryResponseDto(Category category) {
        this.id = category.getId();
        this.qualification = category.getQualification();
        this.description = category.getDescription();
        this.urlImage = category.getUrlImage();
    }

    public UUID getId() {
        return id;
    }

    public String getQualification() {
        return qualification;
    }

    public String getDescription() {
        return description;
    }

    public String getUrlImage() {
        return urlImage;
    }
}

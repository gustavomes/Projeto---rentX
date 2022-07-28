package projetoIntegrador.g5.demo.dto;

import projetoIntegrador.g5.demo.model.Category;

public class CategoryDto {
    private String qualification;
    private String description;
    private String urlImage;

    public CategoryDto() {
    }

    public CategoryDto(Category category) {
        this.qualification = category.getQualification();
        this.description = category.getDescription();
        this.urlImage = category.getUrlImage();
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
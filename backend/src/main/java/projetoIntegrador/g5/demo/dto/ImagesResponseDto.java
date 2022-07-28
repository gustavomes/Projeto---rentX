package projetoIntegrador.g5.demo.dto;

import projetoIntegrador.g5.demo.model.Images;

import java.util.UUID;

public class ImagesResponseDto {
    private UUID id;
    private String title;
    private String url;

    public ImagesResponseDto() {
    }

    public ImagesResponseDto(Images images) {
        this.id = images.getId();
        this.title = images.getTitle();
        this.url = images.getUrl();
    }

    public UUID getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getUrl() {
        return url;
    }
}

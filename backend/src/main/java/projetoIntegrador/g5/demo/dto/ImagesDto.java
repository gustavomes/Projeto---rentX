package projetoIntegrador.g5.demo.dto;

import projetoIntegrador.g5.demo.model.Images;

public class ImagesDto {
    private String title;
    private String url;

    public ImagesDto() {
    }

    public ImagesDto(Images images) {
        this.url = images.getUrl();
        this.title = images.getTitle();
    }


    public String getTitle() {
        return title;
    }


    public String getUrl() {
        return url;
    }

}

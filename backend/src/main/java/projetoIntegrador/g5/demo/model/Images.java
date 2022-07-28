package projetoIntegrador.g5.demo.model;

import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.util.UUID;

@Entity
public class Images {

    @Id
    @GeneratedValue
    @Type(type = "uuid-char")
    private UUID id;
    private String title;
    private String url;

    public Images() {
    }

    public Images(UUID id, String title, String url) {
        this.id = id;
        this.title = title;
        this.url = url;
    }

    public Images(String title, String url) {
        this.title = title;
        this.url = url;
    }

    public UUID getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

}

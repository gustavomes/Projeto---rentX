package projetoIntegrador.g5.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import projetoIntegrador.g5.demo.dto.ImagesDto;
import projetoIntegrador.g5.demo.service.ImagesService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/images")
public class ImagesController {

    @Autowired
    private ImagesService imageService;

    @PostMapping
    public ResponseEntity<?> createImage(@RequestBody ImagesDto imagesDto) {
        try {
            return new ResponseEntity<>(imageService.save(imagesDto), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteImage(@PathVariable String id) {
        try {
            imageService.delete(id);
            return new ResponseEntity<>("Imagem removida com sucesso", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping
    public ResponseEntity<?> getAllImages(){
        try {
            return new ResponseEntity<>(imageService.listAll(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findById(@PathVariable String id) {
        try {
            return new ResponseEntity<>(imageService.find(id), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateImage(@PathVariable String id, @RequestBody ImagesDto imagesDto){
        try {
            return new ResponseEntity<>(imageService.update(imagesDto, id), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

}

package projetoIntegrador.g5.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import projetoIntegrador.g5.demo.dto.DetailsDto;
import projetoIntegrador.g5.demo.service.DetailsService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/details")
public class DetailsController {

   @Autowired
    private DetailsService detailsService;

   @PostMapping
   public ResponseEntity<?> createDetails(@RequestBody DetailsDto detailsDto) {
       try {
           return new ResponseEntity<>(detailsService.save(detailsDto), HttpStatus.OK);
       } catch (Exception e) {
           return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
       }
   }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteDetails(@PathVariable String id) {
        try {
            detailsService.delete(id);
            return new ResponseEntity<>("Característica removida com sucesso", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping
    public ResponseEntity<?> getAllDetails(){
        try {
            return new ResponseEntity<>(detailsService.listAll(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findDetailsById(@PathVariable String id) {
        try {
            return new ResponseEntity<>(detailsService.find(id), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateDetails(@PathVariable String id, @RequestBody DetailsDto detailsDto){
        try {
            return new ResponseEntity<>(detailsService.update(detailsDto, id), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

}

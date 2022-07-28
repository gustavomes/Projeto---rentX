package projetoIntegrador.g5.demo.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import projetoIntegrador.g5.demo.dto.CitiesDto;
import projetoIntegrador.g5.demo.service.CitiesService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/cities")
public class CitiesController {


    @Autowired
    private CitiesService citiesService;

    @PostMapping
    public ResponseEntity<?> createCities(@RequestBody CitiesDto citiesDto){
        try {
            return new ResponseEntity<>(citiesService.save(citiesDto), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    };
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCities(@PathVariable String id){
        try {
            citiesService.delete(id);
            return new ResponseEntity<>("Cidade removida com sucesso", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping
    public ResponseEntity<?> getAllCities(){
        try {
            return new ResponseEntity<>(citiesService.listAll(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findById(@PathVariable String id) {
        try {
            return new ResponseEntity<>(citiesService.find(id), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateCities(@PathVariable String id, @RequestBody CitiesDto citiesDto){
        try {
            return new ResponseEntity<>(citiesService.update(citiesDto, id), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}

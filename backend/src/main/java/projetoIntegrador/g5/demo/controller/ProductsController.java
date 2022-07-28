package projetoIntegrador.g5.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import projetoIntegrador.g5.demo.dto.ProductsDto;
import projetoIntegrador.g5.demo.service.ProductsService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/products")
public class ProductsController {

    @Autowired
    private ProductsService productsService;

    @PostMapping
    public ResponseEntity<?> createProducts(@RequestBody ProductsDto productsDto) {
        try {
            return new ResponseEntity<>(productsService.save(productsDto), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable String id) {
        try {
            productsService.delete(id);
            return new ResponseEntity<>("Produto removido com sucesso", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping
    public ResponseEntity<?> getAllProducts(){
        try {
            return new ResponseEntity<>(productsService.listAll(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findById(@PathVariable String id) {
        try {
            return new ResponseEntity<>(productsService.find(id), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/categories/{category}")
    public ResponseEntity<?> findProductByCategory(/*@RequestParam(value = "category")*/ @PathVariable String category) {
        try {
            return new ResponseEntity<>(productsService.listProductByCategory(category), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/cities/{city}")
    public ResponseEntity<?> findProductByCity(/*@RequestParam(value = "city")*/ @PathVariable String city) {
        try {
            return new ResponseEntity<>(productsService.listProductsByCity(city), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateProduct(@PathVariable String id, @RequestBody ProductsDto productsDto){
        try {
            return new ResponseEntity<>(productsService.update(productsDto, id), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

}

package projetoIntegrador.g5.demo.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import projetoIntegrador.g5.demo.dto.RolesDto;
import projetoIntegrador.g5.demo.service.RolesService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/roles")
public class RolesController {

    @Autowired
    private RolesService rolesService;


    @PostMapping
    public ResponseEntity<?> createRole(@RequestBody RolesDto rolesDto) {
        try {
            return new ResponseEntity<>(rolesService.save(rolesDto), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteRole(@PathVariable String id) {
        try {
            rolesService.delete(id);
            return new ResponseEntity<>("Função removida com sucesso", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping
    public ResponseEntity<?> getAllRoles(){
        try {
            return new ResponseEntity<>(rolesService.listAll(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findById(@PathVariable String id) {
        try {
            return new ResponseEntity<>(rolesService.find(id), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }

    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateRole(@PathVariable String id, @RequestBody RolesDto rolesDto){
        try {
            return new ResponseEntity<>(rolesService.update(rolesDto, id), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}
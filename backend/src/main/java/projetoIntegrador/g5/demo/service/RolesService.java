package projetoIntegrador.g5.demo.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import projetoIntegrador.g5.demo.dto.RolesDto;
import projetoIntegrador.g5.demo.dto.RolesResponseDto;
import projetoIntegrador.g5.demo.model.Roles;
import projetoIntegrador.g5.demo.repository.RolesRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class RolesService {

    @Autowired
    private RolesRepository rolesRepository;

    public List<RolesResponseDto> listAll() {
        List<Roles> rolesList = rolesRepository.findAll();
        List<RolesResponseDto> rolesResponseDtoList = new ArrayList<>();
        for (Roles role : rolesList) {
            rolesResponseDtoList.add(new RolesResponseDto(role));
        }
        return rolesResponseDtoList;
    }

    public RolesResponseDto find(String id) {
        Roles role = rolesRepository.findById(UUID.fromString(id)).get();
        return new RolesResponseDto(role);
    }

    public RolesResponseDto save(RolesDto rolesDto) {
        Roles roles = new Roles();
        BeanUtils.copyProperties(rolesDto, roles);
        roles = rolesRepository.save(roles);
        return new RolesResponseDto(roles);
    }

    public void delete(String id) {
        rolesRepository.deleteById(UUID.fromString(id));
    }

    public RolesResponseDto update(RolesDto rolesDto, String id) {
        Roles roles = rolesRepository.getById(UUID.fromString(id));
        roles.setName(rolesDto.getName());
        roles = rolesRepository.save(roles);
        return new RolesResponseDto(roles);
    }
}

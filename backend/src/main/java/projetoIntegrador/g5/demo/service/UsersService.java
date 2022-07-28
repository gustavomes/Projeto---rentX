package projetoIntegrador.g5.demo.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import projetoIntegrador.g5.demo.dto.UsersDto;
import projetoIntegrador.g5.demo.dto.UsersResponseDto;
import projetoIntegrador.g5.demo.model.Users;
import projetoIntegrador.g5.demo.repository.RolesRepository;
import projetoIntegrador.g5.demo.repository.UsersRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;


@Service
public class UsersService {

    @Autowired
    private UsersRepository usersRepository;

    @Autowired
    private PasswordEncoder encoder;
    @Autowired
    private RolesRepository rolesRepository;

    public List<UsersResponseDto> listAll() {
        List<Users> usersList = usersRepository.findAll();
        List<UsersResponseDto> usersResponseDtoList = new ArrayList<>();
        for (Users user : usersList) {
            usersResponseDtoList.add(new UsersResponseDto(user));
        }
        return usersResponseDtoList;
    }

    public UsersResponseDto find(String id) {
        Users user = usersRepository.findById(UUID.fromString(id)).get();
        return new UsersResponseDto(user);
    }

    public UsersResponseDto save(UsersDto usersDto) {
        Users users = new Users();
        BeanUtils.copyProperties(usersDto, users);
        users.setRoles(rolesRepository.findByName(usersDto.getRoles()));
        users.setPassword(encoder.encode(usersDto.getPassword()));
        users = usersRepository.save(users);
        return new UsersResponseDto(users);
    }

    public void delete(String id) {
        usersRepository.deleteById(UUID.fromString(id));
    }

    public UsersResponseDto update(UsersDto usersDto, String id) {
        Users users = usersRepository.getById(UUID.fromString(id));
        users.setName(usersDto.getName());
        users.setLastname(usersDto.getLastname());
        users.setEmail(usersDto.getEmail());
        users.setPassword(encoder.encode(usersDto.getPassword()));
        users.setRoles(rolesRepository.findByName(usersDto.getRoles()));
        users = usersRepository.save(users);
        return new UsersResponseDto(users);
    }
}

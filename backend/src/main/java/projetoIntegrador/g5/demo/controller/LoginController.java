package projetoIntegrador.g5.demo.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import projetoIntegrador.g5.demo.dto.Login;
import projetoIntegrador.g5.demo.dto.Session;
import projetoIntegrador.g5.demo.model.Users;
import projetoIntegrador.g5.demo.repository.UsersRepository;
import projetoIntegrador.g5.demo.security.JWTCreator;
import projetoIntegrador.g5.demo.security.JWTObject;
import projetoIntegrador.g5.demo.security.SecurityConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@EnableConfigurationProperties
@RestController
public class LoginController {

    @Autowired
    private PasswordEncoder encoder;

    @Autowired
    private SecurityConfig securityConfig;

    @Autowired
    private UsersRepository repository;

    @PostMapping("/login")
    public Session logar(@RequestBody Login login) {
        Users user = repository.findByEmail(login.getEmail());

        if (user != null) {
            boolean passwordOk = encoder.matches(login.getPassword(), user.getPassword());
            if (!passwordOk) {
                throw new RuntimeException("Senha inválida para o login: " + login.getEmail());
            }

            Session session = new Session();
            session.setLogin(user.getEmail());

            JWTObject jwtObject = new JWTObject();
            jwtObject.setIssuedAt(new Date(System.currentTimeMillis()));
            jwtObject.setExpiration(new Date(System.currentTimeMillis() + SecurityConfig.EXPIRATION));
            jwtObject.setRoles(user.getRoles().getName());
            session.setToken(JWTCreator.create(SecurityConfig.PREFIX, SecurityConfig.KEY, jwtObject));

            return session;
        } else {
            throw new RuntimeException("Erro ao tentar fazer login");
        }
    }
}

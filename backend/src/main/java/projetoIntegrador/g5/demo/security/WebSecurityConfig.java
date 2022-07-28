package projetoIntegrador.g5.demo.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebSecurityConfig {

    @Bean
    public BCryptPasswordEncoder encoder() {
        return new BCryptPasswordEncoder();
    }

    public static final String[] SWAGGER_WHITELIST = {
            "/v2/api-docs",
            "/swagger-resources",
            "/swagger-resources/**",
            "/configuration/ui",
            "/configuration/security",
            "/swagger-ui.html",
            "/webjars/**"
    };

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.headers().frameOptions().disable();
        http.cors().and().csrf().disable()
                .addFilterAfter(new JWTFilter(), UsernamePasswordAuthenticationFilter.class)
                .authorizeRequests()
                .antMatchers(SWAGGER_WHITELIST).permitAll()
                .antMatchers(HttpMethod.POST, "/login").permitAll()
                .antMatchers(HttpMethod.POST, "/users").permitAll()
                .antMatchers(HttpMethod.PUT, "/users/**").hasAnyRole("MANAGERS")
                .antMatchers(HttpMethod.POST,"/products").hasAnyRole("MANAGERS")
                .antMatchers(HttpMethod.DELETE,"/products").hasAnyRole("MANAGERS")
                .antMatchers(HttpMethod.PUT,"/products").hasAnyRole("MANAGERS")
                .antMatchers(HttpMethod.GET,"/products").permitAll()
                .antMatchers(HttpMethod.POST, "/booking").hasAnyRole("USERS", "MANAGERS")
                .antMatchers(HttpMethod.PUT, "/booking").hasAnyRole("USERS", "MANAGERS")
                .antMatchers(HttpMethod.DELETE, "/booking").hasAnyRole("USERS", "MANAGERS")
                .antMatchers(HttpMethod.GET, "/booking").permitAll()
                //.anyRequest().authenticated()
                .and()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
        return http.build();
    }
}
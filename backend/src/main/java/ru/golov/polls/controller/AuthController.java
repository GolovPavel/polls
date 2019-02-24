package ru.golov.polls.controller;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import ru.golov.polls.dto.request.LoginRequest;
import ru.golov.polls.dto.request.SignUpRequest;
import ru.golov.polls.dto.response.JwtAuthenticationResponse;
import ru.golov.polls.exceptions.auth.RoleNotFoundException;
import ru.golov.polls.exceptions.auth.UserExistsException;
import ru.golov.polls.model.RoleName;
import ru.golov.polls.model.entity.Role;
import ru.golov.polls.model.entity.User;
import ru.golov.polls.security.JwtTokenProvider;
import ru.golov.polls.service.UserService;

import javax.validation.Valid;
import java.net.URI;
import java.util.Collections;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final UserService userService;
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenProvider jwtTokenProvider;

    private static final Logger logger = LogManager.getLogger(AuthController.class);

    public AuthController(AuthenticationManager authenticationManager,
                          UserService userService,
                          PasswordEncoder passwordEncoder,
                          JwtTokenProvider jwtTokenProvider) {
        this.authenticationManager = authenticationManager;
        this.userService = userService;
        this.passwordEncoder = passwordEncoder;
        this.jwtTokenProvider = jwtTokenProvider;
    }

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsernameOrEmail(), loginRequest.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = jwtTokenProvider.generateToken(authentication);
        logger.info("User {} authenticated successfully", loginRequest.getUsernameOrEmail());
        return ResponseEntity.ok(new JwtAuthenticationResponse(jwt));
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignUpRequest request) {
        checkUserExists(request);

        String username = request.getUsername();
        Role userRole = userService.getRoleByName(RoleName.ROLE_USER)
                .orElseThrow(() -> new RoleNotFoundException(String.format("Can't find role with name: %s", RoleName.ROLE_USER.name())));
        User user = new User(request.getName(), username, request.getEmail(), passwordEncoder.encode(request.getPassword()));
        user.setRoles(Collections.singleton(userRole));
        userService.saveUser(user);

        URI userLocation = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/api/users/{username}").buildAndExpand(username).toUri();
        logger.info("User {} registered successfully", username);
        return ResponseEntity.created(userLocation).body(String.format("User %s registered successfully", username));
    }

    private void checkUserExists(SignUpRequest signUpRequest) {
        userService.getUserByUsername(signUpRequest.getUsername()).ifPresent((user) -> {
            throw new UserExistsException(String.format("User with username %s already exists", signUpRequest.getUsername()));
        });
        userService.getUserByEmail(signUpRequest.getEmail()).ifPresent((user) -> {
            throw new UserExistsException(String.format("User with email %s already exists", signUpRequest.getEmail()));
        });
    }
}

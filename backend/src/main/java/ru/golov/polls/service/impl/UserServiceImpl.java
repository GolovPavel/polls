package ru.golov.polls.service.impl;

import org.springframework.stereotype.Service;
import ru.golov.polls.model.RoleName;
import ru.golov.polls.model.entity.Role;
import ru.golov.polls.model.entity.User;
import ru.golov.polls.repository.RoleRepository;
import ru.golov.polls.repository.UserRepository;
import ru.golov.polls.service.UserService;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;

    public UserServiceImpl(UserRepository userRepository,
                           RoleRepository roleRepository) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
    }

    @Override
    public Optional<User> getUserByUsername(String username) {
        return userRepository.findByUserName(username);
    }

    @Override
    public Optional<User> getUserByEmail(String email) {
        return userRepository.findUserByEmail(email);
    }

    @Override
    public Optional<Role> getRoleByName(RoleName roleName) {
        return roleRepository.findByName(roleName);
    }

    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }
}

package ru.golov.polls.service;

import ru.golov.polls.model.RoleName;
import ru.golov.polls.model.entity.Role;
import ru.golov.polls.model.entity.User;

import java.util.Optional;

public interface UserService {

    Optional<User> getUserByUsername(String username);

    Optional<User> getUserByEmail(String email);

    Optional<Role> getRoleByName(RoleName roleName);

    User saveUser(User user);
}

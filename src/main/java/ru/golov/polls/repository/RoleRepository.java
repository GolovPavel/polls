package ru.golov.polls.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.golov.polls.model.RoleName;
import ru.golov.polls.model.entity.Role;
import ru.golov.polls.model.entity.User;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<User, Long> {

    Optional<Role> findByName(RoleName roleName);
}

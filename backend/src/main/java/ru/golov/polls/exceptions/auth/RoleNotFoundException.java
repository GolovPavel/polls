package ru.golov.polls.exceptions.auth;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;
import ru.golov.polls.exceptions.AppException;

@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
public class RoleNotFoundException extends AppException {

    public RoleNotFoundException(String message) {
        super(message);
    }

    public RoleNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
}

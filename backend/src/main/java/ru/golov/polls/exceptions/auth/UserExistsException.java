package ru.golov.polls.exceptions.auth;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;
import ru.golov.polls.exceptions.AppException;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class UserExistsException extends AppException {

    public UserExistsException(String message) {
        super(message);
    }

    public UserExistsException(String message, Throwable cause) {
        super(message, cause);
    }
}

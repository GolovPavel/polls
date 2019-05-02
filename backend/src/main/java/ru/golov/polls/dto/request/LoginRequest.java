package ru.golov.polls.dto.request;

import javax.validation.constraints.NotBlank;

public class LoginRequest {

    private String usernameOrEmail;
    private String password;

    @NotBlank
    public String getUsernameOrEmail() {
        return usernameOrEmail;
    }

    public void setUsernameOrEmail(String usernameOrEmail) {
        this.usernameOrEmail = usernameOrEmail;
    }

    @NotBlank
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

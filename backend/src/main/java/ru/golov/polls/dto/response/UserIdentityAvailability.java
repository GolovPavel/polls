package ru.golov.polls.dto.response;

public class UserIdentityAvailability {

    private Boolean available;

    public UserIdentityAvailability() {
    }

    public UserIdentityAvailability(Boolean available) {
        this.available = available;
    }

    public Boolean getAvailable() {
        return available;
    }

    public void setAvailable(Boolean available) {
        this.available = available;
    }
}

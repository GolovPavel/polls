package ru.golov.polls.dto.request;

import javax.validation.constraints.Max;
import javax.validation.constraints.NotNull;

public class PollLength {

    private Integer days;
    private Integer hours;

    @NotNull
    @Max(7)
    public int getDays() {
        return days;
    }

    public void setDays(int days) {
        this.days = days;
    }

    @NotNull
    @Max(23)
    public int getHours() {
        return hours;
    }

    public void setHours(int hours) {
        this.hours = hours;
    }
}

package ru.golov.polls.dto.request;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class ChoiceRequest {

    private String text;

    @NotBlank
    @Size(max = 40)
    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}

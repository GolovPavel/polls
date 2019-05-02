package ru.golov.polls.dto.request;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.List;

public class PollCreationRequest {

    private String question;
    private List<ChoiceRequest> choices;
    private PollLength pollLength;

    @NotBlank
    @Size(max = 140)
    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    @NotNull
    @Size(min = 2, max = 6)
    @Valid
    public List<ChoiceRequest> getChoices() {
        return choices;
    }

    public void setChoices(List<ChoiceRequest> choices) {
        this.choices = choices;
    }

    @NotNull
    @Valid
    public PollLength getPollLength() {
        return pollLength;
    }

    public void setPollLength(PollLength pollLength) {
        this.pollLength = pollLength;
    }
}

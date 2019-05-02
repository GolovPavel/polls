package ru.golov.polls.dto.request;

import javax.validation.constraints.NotNull;

public class VoteRequest {

    private Long choiceId;

    @NotNull
    public Long getChoiceId() {
        return choiceId;
    }

    public void setChoiceId(Long choiceId) {
        this.choiceId = choiceId;
    }
}

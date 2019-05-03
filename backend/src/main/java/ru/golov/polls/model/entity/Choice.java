package ru.golov.polls.model.entity;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name = "choices")
public class Choice {

    private Long id;
    private String text;
    private Poll poll;

    public Choice() {

    }

    public Choice(String text) {
        this.text = text;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long getId() {
        return id;
    }

    @NotBlank
    @Size(max = 40)
    public String getText() {
        return text;
    }

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    public Poll getPoll() {
        return poll;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setText(String text) {
        this.text = text;
    }

    public void setPoll(Poll poll) {
        this.poll = poll;
    }
}

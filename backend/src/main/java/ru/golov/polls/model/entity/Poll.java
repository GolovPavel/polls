package ru.golov.polls.model.entity;

import org.hibernate.annotations.BatchSize;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import ru.golov.polls.model.audit.UserDateAudit;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.Instant;
import java.util.List;

@Entity
@Table(name = "polls")
public class Poll extends UserDateAudit {

    private Long id;
    private String question;
    private List<Choice> choices;
    private Instant expirationDateTime;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long getId() {
        return id;
    }

    @NotBlank
    @Size(max = 140)
    public String getQuestion() {
        return question;
    }

    @OneToMany(
            mappedBy = "poll",
            cascade = CascadeType.ALL,
            fetch = FetchType.EAGER,
            orphanRemoval = true
    )
    @Size(min = 2, max = 6)
    @Fetch(FetchMode.SELECT)
    @BatchSize(size = 30)
    public List<Choice> getChoices() {
        return choices;
    }

    @NotNull
    public Instant getExpirationDateTime() {
        return expirationDateTime;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public void setChoices(List<Choice> choices) {
        this.choices = choices;
    }

    public void setExpirationDateTime(Instant expirationDateTime) {
        this.expirationDateTime = expirationDateTime;
    }
}

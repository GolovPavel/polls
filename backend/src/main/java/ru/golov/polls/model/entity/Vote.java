package ru.golov.polls.model.entity;

import ru.golov.polls.model.audit.DateAudit;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name = "votes", uniqueConstraints = {
        @UniqueConstraint(columnNames = {
                "poll_id",
                "user_id"
        })
})
public class Vote extends DateAudit {

    private Long id;
    private Poll poll;
    private Choice choice;
    private User user;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long getId() {
        return id;
    }

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "poll_id", nullable = false)
    public Poll getPoll() {
        return poll;
    }

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "choice_id", nullable = false)
    public Choice getChoice() {
        return choice;
    }

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    public User getUser() {
        return user;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setPoll(Poll poll) {
        this.poll = poll;
    }

    public void setChoice(Choice choice) {
        this.choice = choice;
    }

    public void setUser(User user) {
        this.user = user;
    }
}

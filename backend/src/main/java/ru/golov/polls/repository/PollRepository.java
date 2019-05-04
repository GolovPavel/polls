package ru.golov.polls.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.golov.polls.model.entity.Poll;

import java.util.List;

@Repository
public interface PollRepository extends JpaRepository<Long, Poll> {

    Page<Poll> findByCreatedBy(Long userId, Pageable pageable);

    long countByCreatedBy(Long userId);

    List<Poll> findByIdIn(List<Long> pollIds, Sort sort);
}

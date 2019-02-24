package ru.golov.polls.property;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class AppProperties {

    @Value("${app.web.maxAgeSeconds}")
    private Long maxAge;

    public Long getMaxAge() {
        return maxAge;
    }
}

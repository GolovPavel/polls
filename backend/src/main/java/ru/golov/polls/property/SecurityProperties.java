package ru.golov.polls.property;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;

@Component
@PropertySource(value = "security.properties")
public class SecurityProperties {

    @Value("${security.jwtSecretKey}")
    private String jwtSecretKey;
    @Value("${security.jwtExpirationInMs}")
    private Long jwtExpirationTimeMs;

    public String getJwtSecretKey() {
        return jwtSecretKey;
    }

    public Long getJwtExpirationTimeMs() {
        return jwtExpirationTimeMs;
    }
}

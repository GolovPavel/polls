package ru.golov.polls.property;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;

@Component
@PropertySource(value = "constants.properties")
public class ConstantsProperties {

    @Value("${page.numbers.default}")
    private Integer defaultPageNumbers;

    @Value("${page.size.default}")
    private Integer defaultPageSize;

    public Integer getDefaultPageNumbers() {
        return defaultPageNumbers;
    }

    public Integer getDefaultPageSize() {
        return defaultPageSize;
    }
}

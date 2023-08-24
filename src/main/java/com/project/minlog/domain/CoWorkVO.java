package com.project.minlog.domain;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@ToString
@RequiredArgsConstructor
@AllArgsConstructor
@Builder
public class CoWorkVO {
    private Long co_id;
    private LocalDateTime create_date;
    private String co_name;
    private String co_company;
    private String co_department;
    private String co_position;
    private String co_content;
    private String co_password;
}

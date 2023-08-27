package com.project.minlog.domain;

import lombok.*;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@ToString
@Builder
public class adminVO {
    private long adminNo;
    private String adminId;
    private String adminPw;
    private String adminName;

}

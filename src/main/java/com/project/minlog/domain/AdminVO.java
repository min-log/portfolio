package com.project.minlog.domain;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@ToString
@Builder
public class AdminVO {
    private long adminNo;
    private String adminId;
    private String adminPw;
    private String adminName;

}

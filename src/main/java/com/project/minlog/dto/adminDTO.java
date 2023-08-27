package com.project.minlog.dto;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Builder
public class adminDTO {
    private long adminNo;
    private String adminId;
    private String adminPw;
    private String adminName;
    
}

package com.project.minlog.dto;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Builder
public class AdminDTO {
    private long adminNo;
    @NotEmpty(message = "아이디를 입력해주세요.")
    private String adminId;
    @NotEmpty(message = "비밀번호를 입력해주세요.")
    private String adminPw;
    @NotEmpty(message = "이름을 입력해주세요.")
    private String adminName;
    
}

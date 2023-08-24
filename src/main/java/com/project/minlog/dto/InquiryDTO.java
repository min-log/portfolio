package com.project.minlog.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import org.springframework.validation.annotation.Validated;

import java.time.LocalDateTime;

@Setter
@Getter
@ToString
@RequiredArgsConstructor
@AllArgsConstructor
@Builder
@Validated
public class InquiryDTO {

    private Long inquiry_id;
    private LocalDateTime create_date;
    @NotNull(message = "제목을 입력해주세요.")
    @Max(value = 100,message = "제목을 100글자 이내로 입력해주세요.")
    private String inquiry_title;
    @NotNull(message = "내용을 입력해주세요.")
    @Max(value = 500,message = "내용을 500글자 이내로 입력해주세요.")
    private String inquiry_content;
    @NotNull(message = "연락처를 입력해주세요.")
    private String inquiry_tel;
    @NotNull(message = "이메일을 입력해주세요.")
    @Email(message = "올바른 이메일 형식을 입력해주세요.")
    private String inquiry_email;
    @NotNull(message = "이름을 입력해주세요.")
    private String inquiry_name;
}

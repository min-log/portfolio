package com.project.minlog.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;
import org.springframework.validation.annotation.Validated;

import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@ToString
@Setter
@Getter
@Builder
@Validated
public class InquiryDTO {

    private Long inquiryId;
    private LocalDateTime createDate;
    @NotNull(message = "제목을 입력해주세요.")
    @Size(min= 1,max = 100,message = "제목을 100글자 이내로 입력해주세요.")
    private String inquiryTitle;
    @NotNull(message = "내용을 입력해주세요.")
    @Size(min = 100,max = 500,message = "내용을 100글자 이상 500글자 이내로 입력해주세요.")
    private String inquiryContent;
    @NotNull(message = "연락처를 입력해주세요.")
    private String inquiryTel;
    @NotNull(message = "이메일을 입력해주세요.")
    @Email(message = "올바른 이메일 형식을 입력해주세요.")
    private String inquiryEmail;
    @NotNull(message = "이름을 입력해주세요.")
    private String inquiryName;
}

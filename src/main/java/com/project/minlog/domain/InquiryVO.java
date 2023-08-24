package com.project.minlog.domain;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.time.LocalDateTime;


@NoArgsConstructor
@AllArgsConstructor
@Getter
@ToString
@Builder
public class InquiryVO {

    private Long inquiryId;
    private LocalDateTime createDate;
    private String inquiryTitle;
    private String inquiryContent;
    private String inquiryTel;
    private String inquiryEmail;
    private String inquiryName;
}

package com.project.minlog.dto;

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
public class InquiryDTO {
    private Long inquiry_id;
    private LocalDateTime create_date;
    private String inquiry_title;
    private String inquiry_content;
    private String inquiry_tel;
    private String inquiry_email;
    private String inquiry_name;
}

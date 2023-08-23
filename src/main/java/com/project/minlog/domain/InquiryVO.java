package com.project.minlog.domain;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@ToString
@RequiredArgsConstructor
@AllArgsConstructor
@Builder
public class InquiryVO {
    private Long inquiry_id;
    private LocalDateTime create_date;
    private String inquiry_title;
    private String inquiry_content;
    private String inquiry_tel;
    private String inquiry_email;
    private String inquiry_name;
}

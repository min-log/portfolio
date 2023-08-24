package com.project.minlog.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;


@NoArgsConstructor
@AllArgsConstructor
@Getter
@ToString
@Builder
public class CoWorkVO {
    private Long coId;

    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    private LocalDateTime createDate;
    private String coName;
    private String coCompany;
    private String coDepartment;
    private String coPosition;
    private String coContent;
    private String coPassword;
}

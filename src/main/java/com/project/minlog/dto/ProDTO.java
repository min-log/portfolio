package com.project.minlog.dto;

import lombok.*;

import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Builder
public class ProDTO {
    private long proId;
    private String proTitle;
    private LocalDateTime createDate;
    private long proType;
    private long proStack;
    private String proLink;
    private String proGit;
    private String proImg;

}

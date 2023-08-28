package com.project.minlog.dto;

import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

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
    private String proLink;
    private String proGit;
    private String proImg;

    private List<String> proType;
    private List<String> proStack;

}

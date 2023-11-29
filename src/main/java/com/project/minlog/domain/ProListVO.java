package com.project.minlog.domain;

import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@ToString
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Builder
public class ProListVO {
    private long proId;
    private String proTitle;
    private String proImg;
    private String proInfo;

    private List<String> proType;
    private List<String> proStack;
    private LocalDateTime dateStart;
    private LocalDateTime dateEnd;
}

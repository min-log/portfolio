package com.project.minlog.domain;

import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@ToString
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Builder
public class ProListSizeVO {
    private String proType;
    private int pageStart;
    private int pageEnd;
}

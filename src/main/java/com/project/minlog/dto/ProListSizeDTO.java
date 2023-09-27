package com.project.minlog.dto;

import lombok.*;

@ToString
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Builder
public class ProListSizeDTO {
    private String proType;
    private int pageStart;
    private int pageEnd;
}

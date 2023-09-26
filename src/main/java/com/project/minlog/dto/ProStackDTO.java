package com.project.minlog.dto;

import lombok.*;


@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Builder
public class ProStackDTO {
    long proStackId;
    long proId;
    String proValue;

}

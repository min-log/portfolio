package com.project.minlog.domain;

import lombok.*;

import java.time.LocalDateTime;


@NoArgsConstructor
@AllArgsConstructor
@Getter
@ToString
@Builder
public class ProStackVO {
    long proStackId;
    long proId;
    String proStackValue;

}

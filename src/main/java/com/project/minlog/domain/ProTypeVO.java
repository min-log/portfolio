package com.project.minlog.domain;

import lombok.*;


@NoArgsConstructor
@AllArgsConstructor
@Getter
@ToString
@Builder
public class ProTypeVO {
    long proTypeId;
    long proId;
    String proValue;

}

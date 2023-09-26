package com.project.minlog.dto;

import lombok.*;


@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Builder
public class ProTypeDTO {
    long proTypeId;
    long proId;
    String proValue;

}

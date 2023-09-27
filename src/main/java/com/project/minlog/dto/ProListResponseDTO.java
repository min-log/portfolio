package com.project.minlog.dto;

import lombok.*;


import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
@Setter
@Getter
public class ProListResponseDTO {

    private List<ProListDTO> proList;
    private int proStart;
    private int proEnd;
    private int proAll;
    private String proType;

}

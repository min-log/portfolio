package com.project.minlog.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;
import lombok.extern.log4j.Log4j2;

import java.time.LocalDateTime;
import java.util.List;


@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Builder
public class ProListDTO {
    private long proId;
    private List<String> proType;
    private String proTitle;
    private LocalDateTime createDate;

    private String proLink;
    private String proGit;
    private String proImg;


    private List<String> proStack;

    private String proDateStart;
    private String proDateEnd;
    private String proInfo;

    private LocalDateTime dateStart;
    private LocalDateTime dateEnd;
}

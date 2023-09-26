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
    private String proTitle;
    private String proImg;

    private List<String> proType;
    private List<String> proStack;

    private String proDateStart;
    private String proDateEnd;
    private LocalDateTime dateStart;
    private LocalDateTime dateEnd;
}

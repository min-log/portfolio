package com.project.minlog.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;
import org.springframework.validation.annotation.Validated;

import java.time.LocalDateTime;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Builder
@Validated
public class ProDTO {
    private long proId;
    @NotNull(message = "프로젝트 타입")
    private List<String> proType;
    @NotBlank(message = "프로젝트명")
    private String proTitle;
    private LocalDateTime createDate;

    private String proLink;
    private String proGit;
    private String proImg;
    private String proImgValue;
    private boolean proStatus;


    private List<String> proStack;


    @NotBlank(message = "시작날짜")
    private String proDateStart;
    @NotBlank(message = "종료날짜")
    private String proDateEnd;

    private String proContent;
    private String proInfo;

    private LocalDateTime dateStart;
    private LocalDateTime dateEnd;


}

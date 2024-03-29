package com.project.minlog.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.*;
import org.springframework.validation.annotation.Validated;

import java.time.LocalDateTime;


@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
@Builder
@Validated
public class CoWorkDTO {
    private Long coId;
    private LocalDateTime createDate;
    @NotNull(message = "이름을 입력해주세요.")
    private String coName;

    @NotNull(message = "회사 또는 함께한 단체를 입력해주세요.")
    private String coCompany;
    @NotNull(message = "부서를 입력해주세요.")
    private String coDepartment;
    @NotNull(message = "직위를 입력해주세요.")
    private String coPosition;
    @NotNull(message = "내용을 입력해주세요.")
    @Size(min = 100,max = 200, message = "내용을 100자 이상 200자 이하 입력해주세요")
    private String coContent;
    @NotNull(message = "비밀번호를 입력해주세요.")
    @Min(value = 4 , message = "4자리 이상 비밀번호를 입력해주세요.")
    private String coPassword;

    @NotNull(message = "암호를 입력하세요")
    @Pattern(regexp = "01038967340", message = "올바른 암호를 입력하세요.")
    private String coLock;

}


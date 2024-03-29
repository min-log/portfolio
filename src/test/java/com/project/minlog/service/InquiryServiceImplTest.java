package com.project.minlog.service;

import com.project.minlog.domain.InquiryVO;
import com.project.minlog.dto.InquiryDTO;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;


@SpringBootTest
class InquiryServiceImplTest {

    @Autowired
    private InquiryService inquiryService;

    @Test
    @DisplayName("test")
    public void insert(){
        InquiryDTO dto = InquiryDTO.builder()
                .inquiryTitle("test")
                .inquiryContent("test")
                .inquiryTel("test")
                .inquiryEmail("test")
                .inquiryName("test")
                .build();
        inquiryService.register(dto);
    }
}
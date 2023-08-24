package com.project.minlog.service;

import com.project.minlog.dto.CoWorkDTO;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class CoWorkServiceTest {

    @Autowired
    private CoWorkService coWorkService;

    @Test
    @DisplayName("저장")
    public void insert(){
        CoWorkDTO dto = CoWorkDTO.builder()
                .co_name("테스트")
                .co_content("테스트")
                .co_department("테스트")
                .co_position("테스트")
                .co_company("테스트")
                .co_password("12345")
                .co_name("테스트")
                .build();
        coWorkService.register(dto);
    }


    @Test
    void getList() {
        List<CoWorkDTO> list = coWorkService.getList();

    }
}
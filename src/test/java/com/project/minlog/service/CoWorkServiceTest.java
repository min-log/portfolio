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
                .coContent("테스트1")
                .coDepartment("테스트1")
                .coPosition("테스트1")
                .coCompany("테스트1")
                .coPassword("123451")
                .coName("테스트1")
                .build();
        coWorkService.register(dto);
    }


    @Test
    void getList() {
        List<CoWorkDTO> list = coWorkService.getList();
        for(CoWorkDTO dto : list){
            System.out.println(dto);
        }
    }

    @Test
    void getOne() {
        CoWorkDTO one = coWorkService.getOne(2L);
        System.out.println(one);
    }
}
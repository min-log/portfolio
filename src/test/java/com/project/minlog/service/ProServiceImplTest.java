package com.project.minlog.service;

import com.project.minlog.domain.ProType;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;


@SpringBootTest
class ProServiceImplTest {

    @Autowired
    private ProService proService;
    @Test
    void selectList() {
        proService.selectList(ProType.BackEnd,0);
    }
}
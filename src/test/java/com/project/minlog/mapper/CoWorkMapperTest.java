package com.project.minlog.mapper;

import com.project.minlog.domain.CoWorkVO;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class CoWorkMapperTest {
    @Autowired
    private CoWorkMapper coWorkMapper;
    @Test
    void selectAll() {
        List<CoWorkVO> list = coWorkMapper.selectAll();
        for (CoWorkVO i : list ){
            System.out.println(i);
        }
    }
}
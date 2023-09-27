package com.project.minlog.mapper;

import com.project.minlog.domain.ProListSizeVO;
import com.project.minlog.domain.ProListVO;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;


@SpringBootTest
class ProMapperTest {

    @Autowired
    private ProMapper proMapper;

    @Test
    void selectList() {
        List<ProListVO> backEnd = proMapper.selectList(ProListSizeVO.builder().proType("BackEnd").pageStart(0).pageEnd(2).build());
        backEnd.forEach(item->{
            System.out.println(item);
        });
    }
}
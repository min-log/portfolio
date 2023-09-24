package com.project.minlog.mapper;

import com.project.minlog.domain.ProVO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ProMapper {
    int insertOne(ProVO vo);
    ProVO selectOne(long proId);
}

package com.project.minlog.mapper;

import com.project.minlog.domain.AdminVO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface AdminMapper {
    void insertOne(AdminVO vo);
    AdminVO selectOne(AdminVO vo);
}

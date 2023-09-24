package com.project.minlog.mapper;

import com.project.minlog.domain.ProStackVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ProStackMapper {
    int insertOne(ProStackVO vo);
    List<ProStackVO> selectOne(long proId);
}

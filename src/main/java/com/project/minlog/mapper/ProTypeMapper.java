package com.project.minlog.mapper;

import com.project.minlog.domain.ProTypeVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ProTypeMapper {
    int insertOne(ProTypeVO vo);
    List<ProTypeVO> selectOne(long proId);
    List<ProTypeVO> selectOneType(String proType);
    void deleteOne(long proId);

}

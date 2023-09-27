package com.project.minlog.mapper;

import com.project.minlog.domain.ProListSizeVO;
import com.project.minlog.domain.ProListVO;
import com.project.minlog.domain.ProVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ProMapper {
    int insertOne(ProVO vo);
    int uploadOne(ProVO vo);
    int selectAllNumber(String proType);
    ProVO selectOne(long proId);

    List<ProListVO> selectList(ProListSizeVO pageSize);

}

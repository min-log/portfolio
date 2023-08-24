package com.project.minlog.mapper;

import com.project.minlog.domain.CoWorkVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CoWorkMapper {
    void oneInsert(CoWorkVO vo);
    List<CoWorkVO> selectAll();
    CoWorkVO getOne(Long no);
    CoWorkVO getPassword(Long no,String pw);

}

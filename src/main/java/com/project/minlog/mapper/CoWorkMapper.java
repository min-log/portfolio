package com.project.minlog.mapper;

import com.project.minlog.domain.CoWorkVO;
import lombok.RequiredArgsConstructor;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CoWorkMapper {
    void oneInsert(CoWorkVO vo);
    List<CoWorkVO> selectAll();
}

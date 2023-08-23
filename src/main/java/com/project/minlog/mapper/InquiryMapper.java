package com.project.minlog.mapper;

import com.project.minlog.domain.InquiryVO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface InquiryMapper {
    void oneInsert(InquiryVO vo);

}

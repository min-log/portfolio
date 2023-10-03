package com.project.minlog.service;

import com.project.minlog.domain.InquiryVO;
import com.project.minlog.dto.InquiryDTO;

import java.util.List;

public interface InquiryService {

    void register(InquiryDTO dto) throws Exception;
}

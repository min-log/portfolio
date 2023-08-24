package com.project.minlog.service;

import com.project.minlog.dto.CoWorkDTO;
import com.project.minlog.dto.InquiryDTO;

import java.util.List;

public interface CoWorkService {
    void register(CoWorkDTO dto);
    List<CoWorkDTO> getList();

}

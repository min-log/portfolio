package com.project.minlog.service;

import com.project.minlog.domain.ProType;
import com.project.minlog.dto.ProDTO;
import com.project.minlog.dto.ProListDTO;
import com.project.minlog.dto.ProListResponseDTO;

import java.util.List;

public interface ProService {
    void registerType(long proId, List<String> proStackList, List<String> proTypeList);
    long register(ProDTO dto);
    long upload(ProDTO dto);


    ProDTO selectOne(long proId);

    int selectListNumber(ProType proType);
    ProListResponseDTO selectList(ProType proType, int start);
}

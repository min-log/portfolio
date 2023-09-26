package com.project.minlog.service;

import com.project.minlog.domain.ProType;
import com.project.minlog.dto.ProDTO;
import com.project.minlog.dto.ProListDTO;

import java.util.List;

public interface ProService {
    void registerType(long proId, List<String> proStackList, List<String> proTypeList);
    long register(ProDTO dto);
    long upload(ProDTO dto);


    ProDTO selectOne(long proId);
    List<ProListDTO> selectList(ProType proType);
}

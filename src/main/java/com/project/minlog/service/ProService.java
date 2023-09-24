package com.project.minlog.service;

import com.project.minlog.dto.ProDTO;

public interface ProService {
    long register(ProDTO dto);
    ProDTO selectOne(long proId);
}

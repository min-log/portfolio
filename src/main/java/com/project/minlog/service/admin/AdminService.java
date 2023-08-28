package com.project.minlog.service.admin;

import com.project.minlog.dto.AdminDTO;

public interface AdminService {
    void register(AdminDTO dto);
    AdminDTO getOne(AdminDTO dto);
}

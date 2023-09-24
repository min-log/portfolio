package com.project.minlog.service.admin;

import com.project.minlog.domain.AdminVO;
import com.project.minlog.dto.AdminDTO;
import com.project.minlog.mapper.AdminMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Log4j2
@Service
@RequiredArgsConstructor
public class AdminServiceImpl implements AdminService {
    private final ModelMapper modelMapper;
    private final AdminMapper adminMapper;
    private final SequriyService sequriyService;


    @Override
    public void register(AdminDTO dto) {
        log.info("admin user register------------");
        dto.setAdminPw(sequriyService.encodePassword(dto.getAdminPw()));
        AdminVO vo = modelMapper.map(dto, AdminVO.class);
        adminMapper.insertOne(vo);
    }

    @Override
    public AdminDTO getOne(AdminDTO dto) {
        AdminDTO result = null;
        AdminVO adminVO = null;
        log.info("dto : {}" , dto);

        dto.setAdminPw(sequriyService.encodePassword(dto.getAdminPw()));
        log.info("dto : {}" , dto);
        try {
            adminVO = adminMapper.selectOne(modelMapper.map(dto, AdminVO.class));
            log.info("adminVO : " + adminVO);
        }catch (Exception e){
            e.printStackTrace();
        }finally {
            if(adminVO != null) result = modelMapper.map(adminVO, AdminDTO.class);

            return result;
        }

    }


}

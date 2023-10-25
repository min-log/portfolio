package com.project.minlog.service;

import com.project.minlog.domain.CoWorkVO;
import com.project.minlog.dto.CoWorkDTO;
import com.project.minlog.mapper.CoWorkMapper;
import com.project.minlog.service.admin.SequriyService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

@Log4j2
@RequiredArgsConstructor
@Service
public class CoWorkServiceImpl implements CoWorkService{
    private final CoWorkMapper coWorkMapper;
    private final ModelMapper modelMapper;
    private final SequriyService sequriyService;



    @Override
    public void register(CoWorkDTO dto) {
        log.info("register -------------------");
        String pw = sequriyService.encodePassword(dto.getCoPassword());
        dto.setCoPassword(pw);
        CoWorkVO vo = modelMapper.map(dto, CoWorkVO.class);
        coWorkMapper.insertOne(vo);

    }

    @Override
    public List<CoWorkDTO> getList() {
        log.info("co work list ---------------------------");
        List<CoWorkVO> voList = coWorkMapper.selectAll();
        List<CoWorkDTO> dtoList = voList.stream().map(
                 vo -> {
                     CoWorkDTO dto= modelMapper.map(vo, CoWorkDTO.class);
                     dto.setCoName(nameMasking(vo.getCoName()));
                     return dto;
                 }
        ).collect(Collectors.toList());
        return dtoList;
    }


    public String nameMasking(String name)  {
        // 한글만 (영어, 숫자 포함 이름은 제외)
        String regex = "(^[가-힣]+)$";
        String middleMask = "";
        Matcher matcher = Pattern.compile(regex).matcher(name);
        if(matcher.find()) {
            int length = name.length();
            if(length > 2) {
                middleMask = name.substring(0,1);
            } else {	// 이름이 외자
                middleMask = name.substring(0,1);
            }
            for(int i = 0; i<length; i++) {
                if(i > 0){
                    middleMask += "*";
                }
            }
        }
        return middleMask;
    }


    @Override
    public CoWorkDTO getOne(Long no) {
        log.info("co work getOne ---------------------------");
        CoWorkVO vo = coWorkMapper.getOne(no);
        CoWorkDTO dto = modelMapper.map(vo, CoWorkDTO.class);
        dto.setCoPassword(sequriyService.decodePassword(dto.getCoPassword()));
        return dto;
    }

    @Override
    public boolean getPasswordCk(Long no, String pw) {
        String password = sequriyService.encodePassword(pw);
        CoWorkVO vo = coWorkMapper.getPassword(no, password);
        if(vo == null) return false;
        return true;
    }

    @Override
    public void modify(CoWorkDTO dto) {
        coWorkMapper.modify(modelMapper.map(dto,CoWorkVO.class));
    }

    @Override
    public void removeOne(Long no) {
        coWorkMapper.deleteOne(no);
    }
}

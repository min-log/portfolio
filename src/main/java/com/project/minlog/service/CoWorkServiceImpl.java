package com.project.minlog.service;

import com.project.minlog.domain.CoWorkVO;
import com.project.minlog.dto.CoWorkDTO;
import com.project.minlog.mapper.CoWorkMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.Base64;
import java.util.List;
import java.util.stream.Collectors;

@Log4j2
@RequiredArgsConstructor
@Service
public class CoWorkServiceImpl implements CoWorkService{
    private final CoWorkMapper coWorkMapper;
    private final ModelMapper modelMapper;

    private String encodePassword(String pw){
        log.info("password encode-------------");
        String encodedPassword = Base64.getEncoder().encodeToString(pw.getBytes());
        log.info(encodedPassword);

        return encodedPassword;
    }

    private String decodePassword(String pw){
        log.info("password decode-------------");
        byte[] encodedPassword = Base64.getDecoder().decode(pw);
        return new String(encodedPassword);
    }



    @Override
    public void register(CoWorkDTO dto) {
        log.info("register -------------------");
        String pw = encodePassword(dto.getCoPassword());
        dto.setCoPassword(pw);
        CoWorkVO vo = modelMapper.map(dto, CoWorkVO.class);
        coWorkMapper.insertOne(vo);

    }

    @Override
    public List<CoWorkDTO> getList() {
        log.info("co work list ---------------------------");
        List<CoWorkVO> voList = coWorkMapper.selectAll();
        List<CoWorkDTO> dtoList = voList.stream().map(vo -> modelMapper.map(vo, CoWorkDTO.class)).collect(Collectors.toList());
        return dtoList;
    }

    @Override
    public CoWorkDTO getOne(Long no) {
        log.info("co work getOne ---------------------------");
        CoWorkVO vo = coWorkMapper.getOne(no);
        CoWorkDTO dto = modelMapper.map(vo, CoWorkDTO.class);
        dto.setCoPassword(decodePassword(dto.getCoPassword()));
        return dto;
    }

    @Override
    public boolean getPasswordCk(Long no, String pw) {
        String password = encodePassword(pw);
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

package com.project.minlog.service;

import com.project.minlog.domain.ProStackVO;
import com.project.minlog.domain.ProTypeVO;
import com.project.minlog.domain.ProVO;
import com.project.minlog.dto.ProDTO;
import com.project.minlog.dto.ProTypeDTO;
import com.project.minlog.mapper.ProMapper;
import com.project.minlog.mapper.ProStackMapper;
import com.project.minlog.mapper.ProTypeMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Log4j2
@Service
@RequiredArgsConstructor
public class ProServiceImpl implements ProService {
    private final ModelMapper modelMapper;
    private final ProMapper proMapper;
    private final ProTypeMapper proTypeMapper;
    private final ProStackMapper proStackMapper;
    private final FileService fileService;

    @Override
    public long register(ProDTO dto) {
        log.info("dto : {}",dto);
        ProVO vo = modelMapper.map(dto, ProVO.class);
        try {
            int result = proMapper.insertOne(vo);
            if(result == 0) return -1;

            long proId = vo.getProId();

            // 프로젝트에 포함되는 타입 저장
            List<String> proStackList = dto.getProStack();
            proStackList.forEach(item->{
                proStackMapper.insertOne(ProStackVO.builder().proId(proId).proStackValue(item).build());
            });
            // 프로젝트에 포함되는 사용된 기술 저장
            List<String> proTypeList = dto.getProType();
            proTypeList.forEach(item->{
                proTypeMapper.insertOne(ProTypeVO.builder().proId(proId).proTypeValue(item).build());
            });

            return proId;
        }catch (Exception e){
            e.printStackTrace();
        }

        return -1;
    }

    @Override
    public ProDTO selectOne(long proId) {
        log.info("게시판 내용");
        ProVO vo = proMapper.selectOne(proId);
        log.info("vo:"+vo);
        ProDTO dto = modelMapper.map(vo, ProDTO.class);
        List<String> proTypeList = new ArrayList<>();
        proTypeMapper.selectOne(proId).forEach(item -> {
            proTypeList.add(item.getProTypeValue());
        });

        List<String> proStackList = new ArrayList<>();
        proStackMapper.selectOne(proId).forEach(item -> {
            proStackList.add(item.getProStackValue());
        });

        dto.setProType(proTypeList);
        dto.setProStack(proStackList);

        log.info("dto.getProContent() :{}",dto.getProContent());
        String readBoardContent = fileService.readBoardContent(dto.getProContent());
        dto.setProContent(readBoardContent);





        String formatStart = dto.getDateStart().format(DateTimeFormatter.ofPattern("yyyy-MM-dd"));
        String formatEnd = dto.getDateEnd().format(DateTimeFormatter.ofPattern("yyyy-MM-dd"));
        dto.setProDateStart(formatStart);
        dto.setProDateEnd(formatEnd);

        return dto;
    }
}

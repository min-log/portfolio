package com.project.minlog.service;

import com.project.minlog.domain.*;
import com.project.minlog.dto.ProDTO;
import com.project.minlog.dto.ProListDTO;
import com.project.minlog.mapper.ProMapper;
import com.project.minlog.mapper.ProStackMapper;
import com.project.minlog.mapper.ProTypeMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
    public void registerType(long proId, List<String> proStackList,List<String> proTypeList){
        // 프로젝트에 포함되는 타입 저장
        proStackList.forEach(item->{
            proStackMapper.insertOne(ProStackVO.builder().proId(proId).proValue(item).build());
        });
        // 프로젝트에 포함되는 사용된 기술 저장
        proTypeList.forEach(item->{
            proTypeMapper.insertOne(ProTypeVO.builder().proId(proId).proValue(item).build());
        });
    }

    @Override
    public long register(ProDTO dto) {
        ProVO vo = modelMapper.map(dto, ProVO.class);
        try {
            int result = proMapper.insertOne(vo);
            if(result == 0) return -1;

            long proId = vo.getProId();
            List<String> proStackList = dto.getProStack();
            List<String> proTypeList = dto.getProType();

            // 타입, 스텍 저장
            registerType(proId,proStackList,proTypeList);

            return proId;
        }catch (Exception e){
            e.printStackTrace();
        }

        return -1;
    }

    @Override
    public long upload(ProDTO dto) {
        ProVO vo = modelMapper.map(dto, ProVO.class);
        try {
            int result = proMapper.uploadOne(vo);
            if(result == 0) return -1;

            long proId = vo.getProId();
            List<String> proStackList = dto.getProStack();
            List<String> proTypeList = dto.getProType();
            // 이전 내역 삭제
            proStackMapper.deleteOne(proId);
            proTypeMapper.deleteOne(proId);

            // 타입, 스텍 저장
            registerType(proId,proStackList,proTypeList);

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
        ProDTO dto = modelMapper.map(vo, ProDTO.class);
        List<String> proTypeList = new ArrayList<>();
        proTypeMapper.selectOne(proId).forEach(item -> {
            proTypeList.add(item.getProValue());
        });

        List<String> proStackList = new ArrayList<>();
        proStackMapper.selectOne(proId).forEach(item -> {
            proStackList.add(item.getProValue());
        });

        dto.setProType(proTypeList);
        dto.setProStack(proStackList);

        String readBoardContent = fileService.readBoardContent(dto.getProContent());
        dto.setProContent(readBoardContent);

        // 날짜
        dto.setProDateStart(dto.getDateStart().format(DateTimeFormatter.ofPattern("yyyy-MM-dd")));
        dto.setProDateEnd(dto.getDateEnd().format(DateTimeFormatter.ofPattern("yyyy-MM-dd")));


        return dto;
    }

    @Transactional
    @Override
    public List<ProListDTO> selectList(ProType proType) {
        log.info("# 게시판 리스트 가져오기");
        //다른 방법 아이에 db에서 join 해서
        List<ProTypeVO> proTypeVOS = proTypeMapper.selectOneType(String.valueOf(proType));
        List<ProListDTO> proDTOList = proTypeVOS.stream().map(item -> {
            ProListDTO dto = modelMapper.map(proMapper.selectOne(item.getProId()), ProListDTO.class);
            List<ProTypeVO> proTypes = proTypeMapper.selectOne(item.getProId());
            List<String> typeList = proTypes.stream().map(type -> {
                return type.getProValue();
            }).collect(Collectors.toList());

            List<ProStackVO> proStacks = proStackMapper.selectOne(item.getProId());
            List<String> stackList = proStacks.stream().map(stack -> {
                return stack.getProValue();
            }).collect(Collectors.toList());
            dto.setProType(typeList);
            dto.setProStack(stackList);

            // 날짜
            dto.setProDateStart(dto.getDateStart().format(DateTimeFormatter.ofPattern("yyyy-MM-dd")));
            dto.setProDateEnd(dto.getDateEnd().format(DateTimeFormatter.ofPattern("yyyy-MM-dd")));



            return dto;
        }).collect(Collectors.toList());

        return proDTOList;
    }
}

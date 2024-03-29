package com.project.minlog.service;

import com.project.minlog.domain.*;
import com.project.minlog.dto.ProDTO;
import com.project.minlog.dto.ProListDTO;
import com.project.minlog.dto.ProListResponseDTO;
import com.project.minlog.mapper.ProMapper;
import com.project.minlog.mapper.ProStackMapper;
import com.project.minlog.mapper.ProTypeMapper;
import jakarta.servlet.http.HttpSession;
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
        if(proStackList != null){
            proStackList.forEach(item->{
                proStackMapper.insertOne(ProStackVO.builder().proId(proId).proValue(item).build());
            });
        }
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
    public boolean uploadStatus(long id, boolean status) {
        int i = proMapper.uploadStatus(ProVO.builder().proId(id).proStatus(status).build());
        if(i == 1) return true;
        return false;
    }

    @Override
    public boolean delete(long id) {
        int i = proMapper.deleteOne(id);
        if(i == 1) return true;
        return false;
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

    @Override
    public int selectListNumber(ProType proType) {
        int number = proMapper.selectAllNumber(String.valueOf(proType));
        return number;
    }

    @Transactional
    @Override
    public ProListResponseDTO selectList(ProType proType, int start, int size) {
        log.info("# 게시판 리스트 가져오기");
        int end = 0;
        int allSize = 0;
        int sizeSet = 6; // 6개씩 출력
        sizeSet = size;
        allSize = selectListNumber(proType);
        if(start == allSize) return null;
        end = start + sizeSet;
        if(end > allSize){
            end = allSize;
        }

        // log.info("proType {} ,start {},size {},sizeSet {}",proType,start,size ,sizeSet);

        List<ProListVO> proListVOS = proMapper.selectList(ProListSizeVO.builder().proType(String.valueOf(proType)).pageStart(start).pageEnd(sizeSet).build());
        List<ProListDTO> proListDTOS = proListVOS.stream().map(item -> {
            ProListDTO listItem = modelMapper.map(item, ProListDTO.class);
            // 날짜
            listItem.setProDateStart(item.getDateStart().format(DateTimeFormatter.ofPattern("yyyy-MM-dd")));
            listItem.setProDateEnd(item.getDateEnd().format(DateTimeFormatter.ofPattern("yyyy-MM-dd")));

            List<String> typeList = proTypeMapper.selectOne(item.getProId()).stream().map(type -> {
                return type.getProValue();
            }).collect(Collectors.toList());
            listItem.setProType(typeList);
            listItem.setProInfo(item.getProInfo());
            return listItem;
        }).collect(Collectors.toList());

        ProListResponseDTO result = ProListResponseDTO.builder().proList(proListDTOS)
                .proType(String.valueOf(proType))
                .proStart(start)
                .proEnd(end)
                .proAll(allSize).build();
        return result;
    }
}

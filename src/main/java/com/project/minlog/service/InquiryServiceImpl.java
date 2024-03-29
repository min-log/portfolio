package com.project.minlog.service;

import com.project.minlog.domain.EmailType;
import com.project.minlog.domain.InquiryVO;
import com.project.minlog.dto.InquiryDTO;
import com.project.minlog.mapper.InquiryMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;


@Log4j2
@Service
@RequiredArgsConstructor
public class InquiryServiceImpl implements InquiryService {
    private final ModelMapper modelMapper;
    private final InquiryMapper mapper;
    private final MailService mailService;


    @Override
    public void register(InquiryDTO dto) throws Exception {
        log.info("Inquiry register ------------------- ");
        log.info(dto);
        InquiryVO vo = modelMapper.map(dto, InquiryVO.class);
        log.info(vo);
        dto.setCreateDate(LocalDateTime.now());
        mailService.sendEmail(EmailType.inquiry,dto);
        mapper.insertOne(vo);
    }



}

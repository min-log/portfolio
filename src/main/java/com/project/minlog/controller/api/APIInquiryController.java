package com.project.minlog.controller.api;

import com.project.minlog.dto.InquiryDTO;
import com.project.minlog.service.InquiryService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.*;

@Log4j2
@RequiredArgsConstructor
@RestController
@RequestMapping("/apiInquiry")
public class APIInquiryController {

    private final InquiryService inquiryService;

    @PostMapping("/register")
    public boolean register(@RequestBody InquiryDTO dto) {
        log.info("register -----------!");
        log.info("dto 2: {}",dto);
        inquiryService.register(dto);

        return true;
    }
}

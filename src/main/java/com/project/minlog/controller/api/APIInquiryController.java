package com.project.minlog.controller.api;

import com.project.minlog.dto.InquiryDTO;
import com.project.minlog.service.InquiryService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Log4j2
@RequiredArgsConstructor
@RestController
@RequestMapping("/apiInquiry")
public class APIInquiryController {

    private final InquiryService inquiryService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody @Valid InquiryDTO dto, BindingResult bindingResult) {
        log.info("register -----------!");
        log.info("dto 2: {}",dto);
        if(bindingResult.hasErrors()) {
            // 에러를 List로 저장
            List<ObjectError> list = bindingResult.getAllErrors();
            for( ObjectError error : list ) {
                System.out.println(error);
            }
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(list);
        }
        inquiryService.register(dto);

        return ResponseEntity.ok(true);
    }
}

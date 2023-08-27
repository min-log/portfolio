package com.project.minlog.controller.api;


import com.project.minlog.service.MailService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


@Log4j2
@RequiredArgsConstructor
@RestController
@RequestMapping("/apiAdmin")
public class APIAdminController {

    private final MailService mailService;

    @ResponseBody
    @GetMapping("/mailCheck")
    public String mailCheck() throws Exception { // 관리자가 암호 전달 필요
        System.out.println("이메일 인증 요청");

        String userCheck = mailService.sendEmail("userCheck");// 인증 번호
        log.info("이메일 인증 번호 : " + userCheck);

        return null;
    }
}

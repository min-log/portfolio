package com.project.minlog.controller;

import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.support.RequestContextUtils;

import java.util.Map;


@Log4j2
@Controller
@RequestMapping(name = "/")
public class MainController {


    public String main(HttpServletRequest request, Model model){
        log.info("main page ------------------");




        Map<String, ?> flashMap = RequestContextUtils.getInputFlashMap(request); // redirect 에러메시지
        if(flashMap!=null) {
            model.addAttribute("msg",flashMap.get("msg"));
            model.addAttribute("position",flashMap.get("position"));
        }

        return "index";
    }


}

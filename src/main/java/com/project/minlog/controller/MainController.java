package com.project.minlog.controller;

import com.project.minlog.dto.CoWorkDTO;
import com.project.minlog.service.CoWorkService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.support.RequestContextUtils;

import java.util.List;
import java.util.Map;


@Log4j2
@RequiredArgsConstructor
@Controller
@RequestMapping(name = "/")
public class MainController {

    private final CoWorkService coWorkService;


    @GetMapping("")
    public String main(HttpServletRequest request, Model model){
        log.info("main page ------------------");

        List<CoWorkDTO> coList = coWorkService.getList();
        model.addAttribute("list",coList);

        Map<String, ?> flashMap = RequestContextUtils.getInputFlashMap(request); // redirect 에러메시지
        if(flashMap!=null) {
            model.addAttribute("msg",flashMap.get("msg"));
            model.addAttribute("position",flashMap.get("position"));
        }

        return "index";
    }


}

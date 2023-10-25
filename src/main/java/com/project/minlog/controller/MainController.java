package com.project.minlog.controller;

import com.project.minlog.domain.ProStackBack;
import com.project.minlog.domain.ProStackDB;
import com.project.minlog.domain.ProStackFront;
import com.project.minlog.domain.ProType;
import com.project.minlog.dto.CoWorkDTO;
import com.project.minlog.dto.ProListResponseDTO;
import com.project.minlog.service.CoWorkService;
import com.project.minlog.service.ProService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.support.RequestContextUtils;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;


@Log4j2
@RequiredArgsConstructor
@Controller
@RequestMapping(name = "/")
public class MainController {

    private final CoWorkService coWorkService;
    private final ProService proService;

    @GetMapping("")
    public String main(HttpServletRequest request, Model model){
        log.info("main page ------------------");

        // 스텍
        List<String> stackBack = new ArrayList<>();
        for (ProStackBack value : ProStackBack.values()) {
            stackBack.add(String.valueOf(value));
        }
        for (ProStackDB value : ProStackDB.values()) {
            stackBack.add(String.valueOf(value));
        }
        model.addAttribute("stackBack",stackBack);

        List<String> stackFront = new ArrayList<>();
        for (ProStackFront value : ProStackFront.values()) {
            stackFront.add(String.valueOf(value));
        }
        model.addAttribute("stackFront",stackFront);

        // 일한 사람들 후기
        List<CoWorkDTO> coList = coWorkService.getList();
        model.addAttribute("list",coList);

        // back list
        ProListResponseDTO proListResponseBack = proService.selectList(ProType.BackEnd,0,1);
        model.addAttribute("proBack",proListResponseBack);
        // front list
        ProListResponseDTO proListResponseDTO = proService.selectList(ProType.FrontEnd,0,5);
        model.addAttribute("proFront",proListResponseDTO);



        Map<String, ?> flashMap = RequestContextUtils.getInputFlashMap(request); // redirect 에러메시지
        if(flashMap!=null) {
            model.addAttribute("msg",flashMap.get("msg"));
            model.addAttribute("position",flashMap.get("position"));
        }

        return "/index";
    }


}

package com.project.minlog.controller;

import com.project.minlog.domain.ProStackBack;
import com.project.minlog.domain.ProStackDB;
import com.project.minlog.domain.ProStackFront;
import com.project.minlog.domain.ProType;
import com.project.minlog.dto.ProDTO;
import com.project.minlog.dto.ProListDTO;
import com.project.minlog.dto.ProListResponseDTO;
import com.project.minlog.service.ProService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;
import java.util.List;

@Log4j2
@RequiredArgsConstructor
@Controller
@RequestMapping(value = "/board")
public class boardController {
    private final ProService proService;

    @GetMapping(value = {"/list","/list/{path}"})
    public String boardList(@PathVariable(value = "path",required = false) ProType boardPath, Model model){
        // # 리스트 페이지
        ProType path = ProType.BackEnd;
        if(boardPath == null) boardPath = path;
        List<String> stack = new ArrayList<>();
        switch (boardPath){
            case BackEnd -> {
                model.addAttribute("tit","Back And Site");
                for (ProStackBack value : ProStackBack.values()) {
                    stack.add(String.valueOf(value));
                }
                for (ProStackDB value : ProStackDB.values()) {
                    stack.add(String.valueOf(value));
                }
                model.addAttribute("titSub",stack);
                break;
            }
            case FrontEnd -> {
                model.addAttribute("tit","Front And Site");
                for (ProStackFront value : ProStackFront.values()) {
                    stack.add(String.valueOf(value));
                }
                model.addAttribute("titSub",stack);
                break;
            }
            case Marketing -> {
                model.addAttribute("tit","Marketing");
                stack.add("SNS 운영");
                stack.add("언론보도");
                stack.add("이벤트 기획");
                stack.add("행사모집 · 운영");
                model.addAttribute("titSub",stack);
                break;
            }
        }

        int start = 0;
        ProListResponseDTO proListResponseDTO = proService.selectList(boardPath, start);
        model.addAttribute("proPage",proListResponseDTO);
        return "boardList";
    }

    @GetMapping("/view/{boardId}")
    public String boardView(@PathVariable(value = "boardId") long boardId, Model model){
        log.info("게시판 상세");
        ProDTO proDTO = proService.selectOne(boardId);
        log.info(proDTO);
        model.addAttribute("pro",proDTO);
        return "boardView";
    }

}

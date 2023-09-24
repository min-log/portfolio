package com.project.minlog.controller;

import com.project.minlog.dto.ProDTO;
import com.project.minlog.service.ProService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Log4j2
@RequiredArgsConstructor
@Controller
@RequestMapping(value = "/board")
public class boardController {
    private final ProService proService;

    @GetMapping("/view/{boardId}")
    public String board(@PathVariable(value = "boardId") long boardId, Model model){
        log.info("게시판 상세");
        ProDTO proDTO = proService.selectOne(boardId);
        log.info(proDTO);
        model.addAttribute("pro",proDTO);
        return "boardView";
    }
}

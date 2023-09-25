package com.project.minlog.controller;

import com.project.minlog.domain.ProType;
import com.project.minlog.dto.ProDTO;
import com.project.minlog.service.ProService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Log4j2
@RequiredArgsConstructor
@Controller
@RequestMapping(value = "/board")
public class boardController {
    private final ProService proService;

    @GetMapping(value = {"/list","/list/{path}"})
    public String boardList(@PathVariable(value = "path",required = false) ProType boardPath, Model model){
        log.info(boardPath);
        ProType path = ProType.BackEnd;
        if(boardPath == null) boardPath = path;
        switch (boardPath){
            case BackEnd -> {
                model.addAttribute("tit","Back And Site");
                model.addAttribute("titSub","Back");
                break;
            }
            case FrontEnd -> {
                model.addAttribute("tit","Front And Site");
                model.addAttribute("titSub","Front");
                break;
            }
        }

        List<ProDTO> proDTOS = proService.selectList(boardPath);


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

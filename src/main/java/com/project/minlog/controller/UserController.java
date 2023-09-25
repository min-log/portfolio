package com.project.minlog.controller;

import com.project.minlog.domain.ProStackBack;
import com.project.minlog.domain.ProStackDB;
import com.project.minlog.domain.ProStackFront;
import com.project.minlog.domain.ProType;
import com.project.minlog.dto.AdminDTO;
import com.project.minlog.dto.ProDTO;
import com.project.minlog.service.ProService;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


@Log4j2
@Controller
@RequiredArgsConstructor
@RequestMapping("/user")
public class UserController {
    private final HttpSession httpSession;
    private final ProService proService;

    public String loginCheck(RedirectAttributes redirectAttributes){
        AdminDTO admin = (AdminDTO)httpSession.getAttribute("admin");
        if(admin == null) {
            redirectAttributes.addFlashAttribute("msg","로그인이 필요한 페이지 입니다.");
            return "redirect:/";
        }
        return null;
    }

    @GetMapping("/boardWrite")
    public String boardForm(@RequestParam(value = "no",required = false) String boardId, Model model, RedirectAttributes rett){
        log.info("게시판 작성 --------------------------");
        if(loginCheck(rett) != null) return  loginCheck(rett);
        ProDTO pro = ProDTO.builder().build();
        ProType[] types = ProType.values();

        List<String> stackList = new ArrayList<>();
        List<ProStackBack> proStackBacks = Arrays.stream(ProStackBack.values()).toList();
        List<ProStackDB> proStackDBs = Arrays.stream(ProStackDB.values()).toList();
        List<ProStackFront> proStackFronts = Arrays.stream(ProStackFront.values()).toList();
        proStackBacks.forEach(item->{
            stackList.add(String.valueOf(item));
        });
        proStackDBs.forEach(item->{
            stackList.add(String.valueOf(item));
        });
        proStackFronts.forEach(item->{
            stackList.add(String.valueOf(item));
        });


        if(boardId != null) {
            pro = proService.selectOne(Long.parseLong(boardId));
            log.info("pro :{}",pro);
        };


        model.addAttribute("pro",pro);
        model.addAttribute("types",types);
        model.addAttribute("stacks",stackList);


        return "admin/boardWrite";
    }
}

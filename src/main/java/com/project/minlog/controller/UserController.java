package com.project.minlog.controller;

import com.project.minlog.domain.ProStackBack;
import com.project.minlog.domain.ProStackDB;
import com.project.minlog.domain.ProStackFront;
import com.project.minlog.domain.ProType;
import com.project.minlog.dto.AdminDTO;
import com.project.minlog.dto.ProDTO;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;


@Log4j2
@Controller
@RequiredArgsConstructor
@RequestMapping("/user")
public class UserController {
    private final HttpSession httpSession;

    public String loginCheck(RedirectAttributes redirectAttributes){
        AdminDTO admin = (AdminDTO)httpSession.getAttribute("admin");
        if(admin == null) {
            redirectAttributes.addFlashAttribute("msg","로그인이 필요한 페이지 입니다.");
            return "redirect:/";
        }
        return null;
    }

    @GetMapping("/boardWrite")
    public String boardForm(Model model,RedirectAttributes rett){
        log.info("게시판 작성 --------------------------");
        if(loginCheck(rett) != null) return  loginCheck(rett);

        ProDTO pro = ProDTO.builder().build();

        ProType[] types = ProType.values();
        ProStackBack[] stacksBack = ProStackBack.values();
        ProStackDB[] stacksDb = ProStackDB.values();
        ProStackFront[] stackFront = ProStackFront.values();

        model.addAttribute("pro",pro);
        model.addAttribute("types",types);
        model.addAttribute("stacksBack",stacksBack);
        model.addAttribute("stacksDb",stacksDb);
        model.addAttribute("stackFront",stackFront);

        return "admin/boardWrite";
    }
}

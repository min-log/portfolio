package com.project.minlog.controller;

import com.project.minlog.domain.ProStack;
import com.project.minlog.dto.AdminDTO;
import com.project.minlog.dto.ProDTO;
import com.project.minlog.service.admin.AdminService;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.List;

@Log4j2
@RequiredArgsConstructor
@Controller
@RequestMapping("/admin")
public class AdminController {

    private final AdminService adminService;

    @GetMapping("")
    public String adminMain(HttpServletRequest request,
                            RedirectAttributes redirectAttributes){
        log.info("login from ----------------");

        //세션이 있으면 있는 세션 반환, 없으면 신규 세션을 생성
        HttpSession session = request.getSession();
        //세션에 로그인 회원 정보 보관
        AdminDTO admin = (AdminDTO)session.getAttribute("admin");

        if(admin != null) {
            redirectAttributes.addFlashAttribute("msg","로그인 상태입니다.");
            return "redirect:/";
        }

        return "admin/main";
    }

    @GetMapping("/joinFrom")
    public String adminJoinForm(Model model){
        log.info("회원가입 form----------------");
        model.addAttribute("adminDTO",new AdminDTO());

        return "admin/join";
    }


    @PostMapping("/join")
    public String adminJoin(@ModelAttribute("adminDTO") @Valid AdminDTO adminDTO, BindingResult bindingResult,
                            RedirectAttributes redirectAttributes){
        log.info("회원가입----------------");
        if (bindingResult.hasErrors()){
            log.info("저장 실패");
            List<ObjectError> list = bindingResult.getAllErrors();
            for( ObjectError error : list ) {
                System.out.println(error);
            }
            return "admin/join";
        }
        adminService.register(adminDTO);
        redirectAttributes.addFlashAttribute("msg","회원가입이 완료되었습니다.");

        return "redirect:/admin";
    }

    @PostMapping("/login")
    public String adminLogin(AdminDTO dto,
                             RedirectAttributes redirectAttributes,
                             HttpServletRequest request){
        log.info("login --------------------------");
        AdminDTO result = adminService.getOne(dto);
        if(result == null){
            redirectAttributes.addFlashAttribute("msg","아이디 또는 비밀번호를 정확하게 입력해주세요.");
            return "redirect:/admin";
        }

        //로그인 성공 처리
        //세션이 있으면 있는 세션 반환, 없으면 신규 세션을 생성
        HttpSession session = request.getSession();
        //세션에 로그인 회원 정보 보관
        session.setAttribute("admin", result);

        redirectAttributes.addFlashAttribute("msg","로그인이 성공했습니다.");

        return "redirect:/";
    }


    @GetMapping("/logout")
    public String adminLogout(HttpServletRequest request,RedirectAttributes redirectAttributes){
        //로그인 성공 처리

        HttpSession session = request.getSession(false);
        if (session != null) {
            session.invalidate();
        }
        redirectAttributes.addFlashAttribute("msg","로그아웃 되었습니다.");
        return "redirect:/";
    }


    @GetMapping("/boardWrite")
    public String boardForm(Model model){
        log.info("게시판 작성 --------------------------");
        ProDTO pro = ProDTO.builder().build();
        model.addAttribute("pro",pro);

        return "admin/boardWrite";
    }
}
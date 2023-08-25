package com.project.minlog.controller;

import com.project.minlog.dto.CoWorkDTO;
import com.project.minlog.service.CoWorkService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.web.servlet.support.RequestContextUtils;

import java.util.List;
import java.util.Map;

@Log4j2
@RequiredArgsConstructor
@RequestMapping("/coWork")
@Controller
public class CoWorkController {

    private final CoWorkService coWorkService;


    @GetMapping("/form")
    public String coWork(){
        log.info("co work page ------------------");
        return "co_work";
    }


    @PostMapping("/register")
    public String coWorkRegister(@Valid CoWorkDTO dto, BindingResult bindingResult, RedirectAttributes redirectAttributes){
        log.info("co work register --------------------");
        if (bindingResult.hasErrors()){
            log.info("저장 실패");
            List<ObjectError> list = bindingResult.getAllErrors();
            for( ObjectError error : list ) {
                System.out.println(error);
            }

            return "co_work";
        }
        log.info("dto : {}", dto);
        coWorkService.register(dto);

        redirectAttributes.addFlashAttribute("msg","메시지가 저장되었습니다.");
        redirectAttributes.addFlashAttribute("position","coWork");

        return "redirect:/";

    }

    @GetMapping("/modify")
    public String coWorkModifyForm(@Param(value = "no") Long no, Model model, HttpServletRequest request){
        log.info("modify from ----------------------");
        CoWorkDTO dto = coWorkService.getOne(no);
        model.addAttribute("type","modify");
        model.addAttribute("dto",dto);

        Map<String, ?> flashMap = RequestContextUtils.getInputFlashMap(request); // redirect 에러메시지
        if(flashMap!=null) {
            model.addAttribute("msg",flashMap.get("msg"));
        }

        return "co_work";
    }

    @GetMapping("/modifyRe")
    public String coWorkModify(@Valid CoWorkDTO dto, BindingResult bindingResult,
                               RedirectAttributes redirectAttributes){
        log.info("modify ----------------------");
        if (bindingResult.hasErrors()){
            log.info("저장 실패");
            List<ObjectError> list = bindingResult.getAllErrors();
            for( ObjectError error : list ) {
                System.out.println(error);
            }

            redirectAttributes.addFlashAttribute("msg","수정이 실패했습니다.");
            return "redirect:/";
        }
        coWorkService.modify(dto);
        redirectAttributes.addFlashAttribute("msg","메시지 수정이 완료 되었습니다.");
        return "redirect:/";
    }

    @GetMapping("/remove")
    public String coWorkRemove(@Param(value = "no") Long no, RedirectAttributes redirectAttributes){
        log.info("remove ----------------------");
        coWorkService.removeOne(no);
        redirectAttributes.addFlashAttribute("msg","메시지가 삭제 되었습니다.");

        return "redirect:/";
    }
}

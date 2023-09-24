package com.project.minlog.controller.api;

import com.project.minlog.dto.CoWorkDTO;
import com.project.minlog.service.CoWorkService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.*;

@Log4j2
@RestController
@RequiredArgsConstructor
@RequestMapping("/apiCoWork")
public class APIcoWorkController {

    private final CoWorkService coWorkService;

    @PostMapping("password")
    public boolean password(@RequestBody CoWorkDTO dto){
        log.info("password check --------------");
        log.info("pw : {}",dto);
        boolean result = coWorkService.getPasswordCk(dto.getCoId(), dto.getCoPassword());
        return result;
    }

}

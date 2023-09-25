package com.project.minlog.controller.api;

import com.project.minlog.dto.ProDTO;
import com.project.minlog.service.BoardService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.FileCopyUtils;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;


@Log4j2
@RestController
@RequiredArgsConstructor
@RequestMapping("/apiBoard")
public class APIBoardController {

    @Value("${spring.servlet.multipart.location}")
    private String uploadPath;
    private final BoardService boardService;


    @GetMapping("/getImg")
    public ResponseEntity<byte[]> boardImgGet(@RequestParam("url") String url){
        ResponseEntity<byte[]> result = null;
        log.info("board images : {}",url);
        File file = new File(uploadPath +  File.separator + url);
        try{
            HttpHeaders headers = new HttpHeaders();
            //MIME타입 처리
            headers.add("Content-Type" , Files.probeContentType(file.toPath()));
            // 파일 데이터처리
            result = new ResponseEntity<>(FileCopyUtils.copyToByteArray(file), headers, HttpStatus.OK);
            return result;
        }catch ( Exception e){
            log.error(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }


    @PostMapping("/contentImg")
    public String boardContentImg(@RequestParam("file") MultipartFile files){
        log.info("저장 ----------------");
        String result = boardService.contentImgRegister(files);
        return result;
    }

    @PostMapping("/boardRegister")
    public ResponseEntity<?> boardRegister(
            @RequestPart(value = "dto") @Valid ProDTO proDTO,
            BindingResult bindingResult,
            @RequestPart(value = "proImg",required = false) MultipartFile proImg
    ){
        if(bindingResult.hasErrors()){
            log.info("저장 실패");
            List<String> list = new ArrayList<>();
            List<ObjectError> allErrors = bindingResult.getAllErrors();
            allErrors.forEach(item ->{
                 list.add(item.getDefaultMessage());
            });

            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(list);

        }

        // 프로젝트 저장 및 썸내일 이미지 저장
        long result = boardService.boardRegister(proDTO,proImg);
        return ResponseEntity.status(HttpStatus.OK).body(result);


    }




    @PostMapping("/boardUpload")
    public ResponseEntity<?> boardUpload(
            @RequestPart(value = "dto") @Valid ProDTO proDTO,
            BindingResult bindingResult,
            @RequestPart(value = "proImg",required = false) MultipartFile proImg
    ){
        log.info("수정 -----------");
        if(bindingResult.hasErrors()){
            log.info("저장 실패");
            List<String> list = new ArrayList<>();
            List<ObjectError> allErrors = bindingResult.getAllErrors();
            allErrors.forEach(item ->{
                list.add(item.getDefaultMessage());
            });

            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(list);
        }

        // 프로젝트 저장 및 썸내일 이미지 저장
        long result = boardService.boardRegister(proDTO,proImg);
        return ResponseEntity.status(HttpStatus.OK).body(result);


    }

}

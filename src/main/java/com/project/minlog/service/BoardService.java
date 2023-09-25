package com.project.minlog.service;

import com.project.minlog.dto.ProDTO;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;

public interface BoardService {
    String contentImgRegister(MultipartFile files);
    long boardRegister(ProDTO proDTO, MultipartFile boardFile);

    LocalDateTime dateType(String date);



}

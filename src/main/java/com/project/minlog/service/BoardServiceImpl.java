package com.project.minlog.service;

import com.google.gson.JsonObject;
import com.project.minlog.dto.ProDTO;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Log4j2
@RequiredArgsConstructor
@Service
public class BoardServiceImpl implements BoardService {

    private final FileService fileService;
    private final ProService proService;


    @Override
    public String contentImgRegister(MultipartFile files) {
        JsonObject contentImg = fileService.createContentImage(files, "contentImg");
        String result = contentImg.toString();
        return result;
    }


    @Transactional
    @Override
    public long boardRegister(ProDTO proDTO, MultipartFile boardFile) {
        // 컨텐츠 파일 저장
        String contentTxt = null;
        String boardImgName = null;

        if(! proDTO.getProContent().isEmpty()){
            contentTxt = fileService.createContentTxt(proDTO.getProTitle(), proDTO.getProContent(), "contentTxt");
            if(contentTxt == null)  return -1;
        }

        // 썸네일 저장
        if(boardFile != null){
            JsonObject contentThum = fileService.createImageThumbnail(boardFile, "contentThum");
            if (contentThum == null) {
                // 썸네일 저장 되지 않고 오류 생길 경우 --저장된 게시글도 제거
                log.info("썸네일 이미지 저장 실패");
                if(contentTxt != null) fileService.removeContentTxt(contentTxt);
                return -1;
            }
            boardImgName = contentThum.get("fileName").getAsString();
        }

        // project 저장
        proDTO.setProImg(boardImgName);
        proDTO.setProContent(contentTxt);
        proDTO.setDateEnd(dateType(proDTO.getProDateEnd()));
        proDTO.setDateStart(dateType(proDTO.getProDateStart()));
        long result;

        if(proDTO.getProId() != 0) result = proService.register(proDTO); // 기존 데이터 업데이트
        result = proService.register(proDTO);
        log.info("result :{}",result);
        return result;
    }

    @Override
    public long boardUpdate(ProDTO proDTO, MultipartFile boardFile) {
        // 컨텐츠 파일 저장
        String contentTxt = null;
        String boardImgName = null;

        if(! proDTO.getProContent().isEmpty()){
            contentTxt = fileService.createContentTxt(proDTO.getProTitle(), proDTO.getProContent(), "contentTxt");
            if(contentTxt == null)  return -1;
        }

        // 썸네일 저장
        if(boardFile != null){
            JsonObject contentThum = fileService.createImageThumbnail(boardFile, "contentThum");
            if (contentThum == null) {
                // 썸네일 저장 되지 않고 오류 생길 경우 --저장된 게시글도 제거
                log.info("썸네일 이미지 저장 실패");
                if(contentTxt != null) fileService.removeContentTxt(contentTxt);
                return -1;
            }
            boardImgName = contentThum.get("fileName").getAsString();
        }

        // project 저장
        proDTO.setProImg(boardImgName);
        proDTO.setProContent(contentTxt);
        proDTO.setDateEnd(dateType(proDTO.getProDateEnd()));
        proDTO.setDateStart(dateType(proDTO.getProDateStart()));
        long result;

        if(proDTO.getProId() != 0) result = proService.upload(proDTO); // 기존 데이터 업데이트
        result = proService.upload(proDTO);
        log.info("result :{}",result);
        return result;
    }

    @Override
    public LocalDateTime dateType(String date) {
        String str = date + " 00:00:00.000";
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss.SSS");
        LocalDateTime dateTime = LocalDateTime.parse(str, formatter);
        return dateTime;
    }

}

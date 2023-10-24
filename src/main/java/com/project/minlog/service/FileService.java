package com.project.minlog.service;

import com.google.gson.JsonObject;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.net.URLDecoder;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Optional;
import java.util.UUID;

@Log4j2
@RequiredArgsConstructor
@Service
public class FileService {

    @Value("${spring.servlet.multipart.location}")
    private String uploadPath;

    // 컨텐츠 이미지 저장
    public JsonObject createContentImage(MultipartFile uploadFile, String folderPath) {
        log.info("컨텐츠 이미지---------------------------");

        JsonObject jsonObject = new JsonObject();
        String folderPathMake = makeFolder(folderPath);


        String uploadFileName = uploadFile.getOriginalFilename();
        String fileName = uploadFileName.substring(uploadFileName.lastIndexOf("\\") + 1 );
        log.info("fileName : " + fileName);

        String uuid = UUID.randomUUID().toString();
        String originalName = uuid + "_"+ fileName;

        String saveName = uploadPath + File.separator + folderPathMake + File.separator + originalName;
        String url =  "/"+ folderPathMake  + "/" + originalName;
        Path savePath=  Paths.get(saveName);

        try {
            //실제 이미지 저장
            uploadFile.transferTo(savePath);

            log.info("url: {}",url);
            //화면에 전달할 DTO 생성
            jsonObject.addProperty("url", url);
            jsonObject.addProperty("responseCode", "succcess");

        } catch (IOException e) {
            jsonObject.addProperty("responseCode", "error");
            e.printStackTrace();
            log.warn("업로드 폴더 생성 실패: " + e.getMessage());
        }

        return jsonObject;
    }


    // 컨텐츠 내용 txt 파일 저장
    public String createContentTxt(String title,String content, String folderPath){
        log.info("일반 컨텐츠 텍스트파일 저장 ==========================");

        //1. 파일 경로 폴더를 생성
        String folderPathMake = makeFolder(folderPath);
        String fileName = title + ".txt";

        //UUID
        String uuid = UUID.randomUUID().toString();
        String originalName = uuid + "_"+ fileName;

        //저장할 파일 이름 중간에 _ 를 이용하여 구분
        String saveName = uploadPath + File.separator + folderPathMake + File.separator + originalName;
        File file = new File(saveName);

        try {
            BufferedWriter writer = new BufferedWriter(new FileWriter(file));
            writer.write(content);
            writer.close();
            return folderPath + "/" + originalName;
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }

    public String readBoardContent(String fileName) {
        File file = new File(uploadPath + File.separator + fileName);
        BufferedReader br;
        String retStr = "";

        try {
            br = new BufferedReader(new FileReader(file));
            String line;
            while ((line = br.readLine()) != null) {
                System.out.println("line: " + line);
                retStr += line + "\n";
            }

            br.close();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

        return retStr;
    }




    // 컨텐츠 썸네일 이미지 저장
    public JsonObject createImageThumbnail(MultipartFile uploadFile, String folderPath) {
        log.info("썸네일 이미지 저장 ==========================");

        JsonObject jsonObject = new JsonObject();

        String folderPathMake = makeFolder(folderPath);

        String uploadFileName = uploadFile.getOriginalFilename();
        String fileName = uploadFileName.substring(uploadFileName.lastIndexOf("\\") + 1 );
        log.info("fileName : " + fileName);

        //UUID
        String uuid = UUID.randomUUID().toString();
        String originalName = uuid + "_"+ fileName;


        //저장할 파일 이름 중간에 _ 를 이용하여 구분
        String saveName = uploadPath + File.separator + folderPathMake + File.separator + originalName;
        Path savePath=  Paths.get(saveName);

        try {
            log.info("실제 이미지 저장 -----------------------");
            //실제 이미지 저장
            uploadFile.transferTo(savePath);
            //화면에 전달할 DTO 생성
            jsonObject.addProperty("fileName", (String) folderPathMake + "/" + originalName);
            jsonObject.addProperty("url", saveName);
            jsonObject.addProperty("responseCode", "succcess");

        } catch (IOException e) {
            jsonObject.addProperty("responseCode", "error");
            e.printStackTrace();
            log.warn("업로드 폴더 생성 실패: " + e.getMessage());
        }


        return jsonObject;
    }


    protected String makeFolder(String folder) {
        String folderPath = folder.replace("/", File.separator);
        File uploadPathFolder = new File(uploadPath,folderPath);
        if (uploadPathFolder.exists() == false){
            uploadPathFolder.mkdirs();
        }
        return folderPath;
    }




    //파일 제거 ----------------------------------------------------------------------

    public boolean removeContentTxt(String fileName){
        log.info("파일 제거 로직--------------");
        try{
            String fileUrl = uploadPath + File.separator + fileName;
            File file = new File(fileUrl);
            log.info(file);
            if (file.delete()){ //// f.delete 파일 삭제에 성공하면 true, 실패하면 false
                log.info("파일이 삭제되었습니다.");
                return true;
            }else {
                log.info("파일삭제가 실패했습니다.");
                return false;
            }

        }catch (Exception e){
            e.printStackTrace();
        }
        return false;
    }

    public ResponseEntity<Boolean> removeContentThum(String fileName){
        log.info("이미지 제거 로직");
        String srcFileName = null;
        try {
            srcFileName = URLDecoder.decode(fileName,"utf-8");
            File file = new File(srcFileName);
            log.info(file);
            boolean result = file.delete();
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
            return new ResponseEntity<>(false,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }





}

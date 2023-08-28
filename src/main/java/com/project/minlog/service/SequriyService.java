package com.project.minlog.service;

import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import java.util.Base64;


@Service
public class SequriyService {
    public String encodePassword(String pw){
        String encodedPassword = Base64.getEncoder().encodeToString(pw.getBytes());
        return encodedPassword;
    }

    public String decodePassword(String pw){
        byte[] encodedPassword = Base64.getDecoder().decode(pw);
        return new String(encodedPassword);
    }

}

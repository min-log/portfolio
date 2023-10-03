package com.project.minlog.service;

import com.project.minlog.domain.EmailType;
import com.project.minlog.dto.InquiryDTO;
import lombok.RequiredArgsConstructor;
import org.apache.commons.mail.EmailException;
import org.apache.commons.mail.HtmlEmail;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.Random;


@RequiredArgsConstructor
@Service
public class MailService {

    @Value("${spring.mail.host}")
    String host;

    @Value("${spring.mail.port}")
    int port;
    @Value("${spring.mail.username}")
    String username;

    @Value("${spring.mail.password}")
    String password;

    String ePw; // 랜덤 인증번호

    // 전달할 이메일 내용
    String msgTit = "[minlog]";
    String msgTxt = "";



    public String createPassword() {
        StringBuffer key = new StringBuffer();
        Random rnd = new Random();

        for (int i = 0; i < 8; i++) { // 인증코드 8자리
            int index = rnd.nextInt(3); // 0~2 까지 랜덤

            switch (index) {
                case 0:
                    key.append((char) ((int) (rnd.nextInt(26)) + 97));
                    //  a~z  (ex. 1+97=98 => (char)98 = 'b')
                    break;
                case 1:
                    key.append((char) ((int) (rnd.nextInt(26)) + 65));
                    //  A~Z
                    break;
                case 2:
                    key.append((rnd.nextInt(10)));
                    // 0~9
                    break;
            }
        }
        return ePw=key.toString();
    }


    //메일보내기
    public String sendEmail(EmailType type, Object object) throws Exception {
        try {
            createPassword(); // 인증번호 생성

            HtmlEmail email = new HtmlEmail();
            email.setCharset("euc-kr"); // 한글 인코딩
            email.setHostName(host); //SMTP서버 설정
            email.setSmtpPort(port);
            email.setSSL(true);
            email.setAuthentication(username, password); //메일인증

            try {
                email.addTo(username,username); // 수신자
            } catch (EmailException e) {
                e.printStackTrace();
            }

            try {
                email.setFrom(username, "minlog"); // 발신자
            } catch (EmailException e) {
                e.printStackTrace();
            }

            // Create the email message
            email.addTo(username, username);  //수신자
            email.setFrom(username, "minlog"); // 발신자


            // 메일 제목 & 내용 설정
            switch (type){
                case userCheck -> {
                    //아이디 체크 인증번호가 있을 시 인증 메일 내용 전달
                    msgTit += " - 관리자 회원가입";
                    msgTxt = msgEmailPw();
                    break;
                }
                case inquiry ->{
                    msgTit += " - 문의 글 등록 확인";
                    msgTxt += msgInquiry((InquiryDTO)object);;
                    break;
                }
            }


            email.setSubject(msgTit); // 메일 제목
            email.setHtmlMsg(msgTxt); // 메일 내용

            // set the alternative message
            //email.setTextMsg("Your email client does not support HTML messages");
            email.send();
        } catch (EmailException e) {
            e.printStackTrace();
        }



        return ePw;
    }


    // 메일 제목 & 내용 설정
    public String msgEmailPw(){
        msgTit = "[minlog] 이메일 인증번호 전달";
        //content
        StringBuffer strBuf = new StringBuffer();
        strBuf.append("<html xmlns=\"http://www.w3.org/1999/xhtml\" xml:lang=\"ko\">");
        strBuf.append("<head>");
        strBuf.append("<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">");
        strBuf.append("<meta http-equiv=\"Content-Script-Type\" content=\"text/javascript\">");
        strBuf.append("<meta http-equiv=\"Content-Style-Type\" content=\"text/css\">");
        strBuf.append("<title>[minlog]이메일인증 번호</title>");
        strBuf.append("</head>");
        strBuf.append("<body style=\"margin:0;font-size:1em\">");
        strBuf.append("<div>");
        strBuf.append("<h1 style='font-size:1.3em;margin-bottom:10px;'>안녕하세요 'minlog' 입니다.</h1>");
        strBuf.append("<p>회원가입 <span style='font-weight:bold;color:red'>'인증번호'</span>란에 아래 번호를 넣어주세요.</p>");
        strBuf.append("<p style='margin:10px 0;border: 1px solid #ced4da;background:#eee;padding:20px;font-size:1.2em'>");
        strBuf.append("[ 인증번호 : <span style='font-weight:bold;color:red'>" + ePw + "</span> ]");
        strBuf.append("</p>");
        strBuf.append("<p>감사합니다.</p>");
        strBuf.append("</div>");
        strBuf.append("</body>");
        strBuf.append("</html>");
        msgTxt = strBuf.toString();
        return msgTxt;


    }



    public String msgInquiry(InquiryDTO dto){
        msgTit = "[minlog] 포트폴리오 문의";
        //content
        StringBuffer strBuf = new StringBuffer();
        strBuf.append("<html xmlns=\"http://www.w3.org/1999/xhtml\" xml:lang=\"ko\">");
        strBuf.append("<head>");
        strBuf.append("<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">");
        strBuf.append("<meta http-equiv=\"Content-Script-Type\" content=\"text/javascript\">");
        strBuf.append("<meta http-equiv=\"Content-Style-Type\" content=\"text/css\">");
        strBuf.append("<title>[minlog] 문의가 왔습니다.</title>");
        strBuf.append("</head>");
        strBuf.append("<body style=\"margin:0;font-size:1em\">");
        strBuf.append("<div>");
        strBuf.append("<p>- 문의 - </p>");
        strBuf.append("<h1 style='font-size:1.3em;margin-bottom:10px;'>"+dto.getInquiryTitle()+"</h1>");
        strBuf.append("<p> name : "+ dto.getInquiryName()+"</p>");
        strBuf.append("<p> email : "+ dto.getInquiryEmail() +"</p>");
        strBuf.append("<p> date : "+ dto.getCreateDate() +"</p>");
        strBuf.append("<p> tel : "+ dto.getInquiryTel() +"</p>");
        strBuf.append("<p style='margin-top:20px;border:1px solid #000;padding:20px;'>"+ dto.getInquiryContent() +"</p>");
        strBuf.append("</div>");
        strBuf.append("</body>");
        strBuf.append("</html>");
        msgTxt = strBuf.toString();
        return msgTxt;
    }






}

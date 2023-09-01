package com.project.minlog.domain;

import lombok.*;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@ToString
@Builder
public class ProVO {
    private long proId;
    private String proTitle;
    private LocalDateTime createDate;
    private LocalDateTime dateStart;
    private LocalDateTime dateEnd;

    private String proLink;
    private String proGit;
    private String proImg;


    //type
    private Set<String> typeSet = new HashSet<>();
    public void typeAdd(String type){
        typeSet.add(type);
    }


    //stack
    private Set<String> stackSet = new HashSet<>();
    public void stackAdd(String stack){
        stackSet.add(stack);
    }


}

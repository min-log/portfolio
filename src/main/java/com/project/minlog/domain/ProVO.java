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

    private String proLink;
    private String proGit;
    private String proImg;


    //stack
    private Set<ProStack> stackSet = new HashSet<>();
    public void stackAdd(ProStack stack){
        stackSet.add(stack);
    }
    //type
    private Set<ProType> typeSet = new HashSet<>();
    public void typeAdd(ProType type){
        typeSet.add(type);
    }

}

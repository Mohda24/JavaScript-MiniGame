// Staarting select selectors
number=document.querySelector("header .number")


score=document.querySelector('.text p:nth-child(2) span')
hightscore=document.querySelector('.text p:last-child span')
Mysecret=Math.floor(Math.random() * 21) + 1;
Checkbtn=document.getElementById('Check').addEventListener('click',function(){
    myinput=parseInt(document.getElementById("mynum").value)
    myfirstP=document.querySelector('.text p:first-child')
    if(!myinput){
        myfirstP.textContent="🤢🤔 No number"

    }
    else if(myinput>Mysecret){
        myfirstP.textContent="🤢🤔 Too Hight";
        if(score.textContent!="0"){
            score.textContent=parseInt(score.textContent)-1;
        }
        else{
            myfirstP.textContent="You lost !!!!!!";
        document.querySelector('header').style.backgroundColor='red'
        document.querySelector('main').style.backgroundColor='red'
        document.getElementById("mynum").readOnly='true'
        }
        
    }
    else if(myinput<Mysecret){
        myfirstP.textContent="🤢🤔 Too low";
        if(score.textContent!="0"){
            score.textContent=parseInt(score.textContent)-1;
        }
        else{
            myfirstP.textContent="You lost !!!!!!";
        document.querySelector('header').style.backgroundColor='red'
        document.querySelector('main').style.backgroundColor='red'
        document.getElementById("mynum").readOnly='true'
        }
        
    }
    else{
        myfirstP.textContent="🎉 Correct Number!!";
        document.querySelector('header').style.backgroundColor='green'
        document.querySelector('main').style.backgroundColor='green'
        number.textContent=`${myinput}`
        document.getElementById("mynum").readOnly='true'
        if(parseInt(score.textContent)>parseInt(hightscore.textContent)){
            hightscore.textContent=parseInt(score.textContent)
        }

    
    }
})
Again=document.getElementById("Again").addEventListener("click",function(){
    
})



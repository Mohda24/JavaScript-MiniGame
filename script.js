// Staarting select selectors
number=document.querySelector("header .number")


let score=document.querySelector('.text p:nth-child(2) span')
hightscore=document.querySelector('.text p:last-child span')
let Mysecret=Math.floor(Math.random() * 21) + 1;
let myscore=20;
Checkbtn=document.getElementById('Check').addEventListener('click',function(){
    myinput=parseInt(document.getElementById("mynum").value)
    myfirstP=document.querySelector('.text p:first-child')
    if (myscore>1){
        if(!myinput){
            myfirstP.textContent="🤢🤔 No number"
    
        }
        else if(myinput>Mysecret){
            myfirstP.textContent="📈 Too high!";
            myscore--;
            score.textContent=myscore;
            
            
        }
        else if(myinput<Mysecret){
            myfirstP.textContent="📉 Too low!";
            myscore--;
            score.textContent=myscore;
            
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
    

    
    }
    else if(myscore==1){
        myfirstP.textContent="You lost !!!!!!";
        document.querySelector('header').style.backgroundColor='#ED2939';
        document.querySelector('main').style.backgroundColor='#ED2939';
        document.getElementById("mynum").readOnly='true';
        myscore--;
        score.textContent=myscore;
        

    }
})

// Function of Again
myAgain=document.getElementById("Again").addEventListener("click",function(){
    myscore=20;
    score.textContent=myscore;
    document.querySelector('header').style.backgroundColor='#232B2B';
    document.querySelector('main').style.backgroundColor='#232B2B';
    document.getElementById("mynum").readOnly=false;
    Mysecret=Math.floor(Math.random() * 21) + 1;
    myfirstP.textContent=".... Start Guessing!!!";
    number.textContent="?"
    document.getElementById("mynum").value=""



})



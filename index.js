let user_score = 0;
let comp_score = 0;

 const choices = document.querySelectorAll(".choice");
 const userScorePara = document.querySelector("#user_score")
 const compScorePara = document.querySelector("#comp_score")
 let user=document.querySelector(".user")
 let machine=document.querySelector(".machine")
 let winModal=document.querySelector(".win-modal");
 let winner=document.querySelector(".winner");
 let play=document.querySelector(".play");
let score=JSON.parse(localStorage.getItem("score"))
let rulBtn=document.querySelector(".btn-rule")
let rulemodal=document.querySelector(".rule-modal")
let ruleimg=document.querySelector(".rule-img")
let scoreElem=document.getElementById("user_score");
if(score){
    scoreElem.innerText=user_score;
}
let count=0;
console.log(choices)
let random=Math.floor(Math.random()*3);
console.log(random)
let one=document.querySelector(".one")
console.log(one)
let two=document.querySelector(".two")
console.log(two)
let three=document.querySelector(".three")
console.log(three)
choices.forEach((element,index)=>{
    element.addEventListener("click",()=>{
        user.style.opacity="1";
        one.style.display="none";
        two.style.display="none";
        three.style.display="none";
        choices.forEach(item=>{
            item.style.display="none";
        });
        element.style.display="block";
        element.classList.add("show");
        setTimeout(()=>{
            machine.style.opacity="1";
            setTimeout(() => {
                choices[random].style.display="block";
                choices[random].classList.add("right");
            }, 1000);
        },500);
        setTimeout(() => {
            if(random==index){
                winModal.style.display="grid";
                winner.innerText="TIE UP";
            }else if(index==0 && random==2 || index==1 && random==0 || index==2 && random==1){
                winModal.style.display="grid";
                winner.innerText="YOU WIN";
                count=user_score;
                count++;
                scoreElem.innerText=count;
                localStorage.setItem("user-score",JSON.stringify(count));
            }else{
                winModal.style.display="grid";
                winner.innerText="YOU LOST";
            }
        }, 1500);
    }, 500);
})
play.addEventListener("click", ()=>{
    window.location.reload();
})
rulBtn.addEventListener("click", ()=>{
    rulemodal.style.display="grid";
    setTimeout(() => {
        ruleimg.style.transform="translateY(0)";
    }, 500);
})


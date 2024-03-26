let button=document.querySelectorAll(".box")
let restart=document.querySelector(".restart")
let turnO=true  //for check the condition
let score=document.querySelector(".score")
let winPattern=[
   [0,1,2],
   [3,4,5],
   [6,7,8],
   [0,3,6],
   [1,4,7],
   [2,5,8],
   [0,4,8],
   [2,4,6],
];
const restartgame=()=>{
   turnO=true
   enableddBoxes()
   score.innerText=""
   
   count=0
   
}
let buttonsound=new Audio("mixkit-retro-game-notification-212 (1).wav")
button.forEach((box)=>{
   box.addEventListener("click",()=>{
      
      count++
      
      if(turnO){
         box.innerText="X"
         turnO=false
         if (box.innerText="X"){
            box.style.color="red"
            buttonsound.play()
         }
      }else{
         box.innerText="O"
         turnO=true
         if (box.innerText="O"){
            box.style.color="yellow"
            buttonsound.play()
            
         }
      }
      box.disabled=true
      checkWinner();   
   })
})
const disabledBoxes=()=>{
   for(box of button){
      box.disabled=true
   }
}

const enableddBoxes=()=>{
   for(box of button){
      box.disabled=false
      box.innerText=""   
   }
}
const winner=(win)=>{
   score.innerText=`THE WINNER IS ${win}`
}
 
let count=0
let winsound= new Audio("mixkit-small-win-2020 (1).wav")
let drawSound= new Audio("mixkit-negative-guitar-tone-2324.wav")
const checkWinner=()=>{
   for(pattern of winPattern ){

         let pos1=   button[pattern[0]].innerText
         let pos2=   button[pattern[1]].innerText
         let pos3=   button[pattern[2]].innerText
         if(pos1!=""&&pos2!=""&&pos3!=""){
            if(pos1==pos2&&pos2==pos3){
               
               winner(pos1)
               winsound.play()
               disabledBoxes()
               return      //for exit the function early if the winner is check
            }
         }
      }
      if(count===9){
         score.innerText="IT'S A DRAW"
         drawSound.play()
      }

}
restart.addEventListener("click",()=>{
   restartgame()
   
   
})


   
   

   












   

      



  


















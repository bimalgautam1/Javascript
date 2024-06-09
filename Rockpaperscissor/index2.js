const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorBtn = document.getElementById("scissorBtn");


rockBtn.onclick = function(){
    let randomNum = Math.floor(Math.random() * 3)+ 1;
    if(randomNum==1){
        document.getElementById("myH3").innerHTML.textcontent='Draw';
    }
}

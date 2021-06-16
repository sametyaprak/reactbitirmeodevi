const randomNumber = Math.floor(Math.random() * 20);
console.log(randomNumber);
let rightsToHave =5;

let input = 0;
console.log(input);

document.getElementById("input-to-play").onkeypress = function(e){
    if(e.keyCode===13){
        //getScore();
    }
  }

function getScore(){
    input = document.getElementById("input-to-play").value;
    document.getElementById("input-to-play").value= "";
    console.log(input);    
    if(randomNumber==input){
        document.getElementById("center-box").innerHTML = ("😍");
        document.getElementById("rights-to-have").innerHTML = ``;
    } else{
        document.getElementById("center-box").innerHTML = ("🤦‍♂️");
        setTimeout(function(){
            document.getElementById("center-box").innerHTML = ("?");
        },5000);
        setTimeout(function(){
            document.getElementById("center-box").innerHTML = ("TEKRAR DENE");
        },2000);        
        setTimeout(function(){
            if(randomNumber>input){
                document.getElementById("center-box").innerHTML = ("DUSUK TAHMIN ETTIN");
            } else {
                document.getElementById("center-box").innerHTML = ("YUKSEK TAHMIN ETTIN");
            }            
        },1000);         
        rightsToHave--;
        document.getElementById("rights-to-have").innerHTML = `KALAN HAKKINIZ: ${rightsToHave}`;
        
    }
    if(rightsToHave==0){
        document.getElementById("center-box").innerHTML = ("😢");
    }
}


function tekrar(){
    window.location.reload();
}


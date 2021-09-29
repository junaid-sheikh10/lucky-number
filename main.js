var input=document.querySelector("#input");
var lucky=document.querySelector("#lucky");
var button=document.querySelector("#btn");
var output=document.querySelector("#output-div")

button.addEventListener("click",checkinput);

function datesum(date){
    let sum=0;
    date=date.replaceAll("-","");
    for(let d of date){
        sum=sum+Number(d);
    }
    return sum
}

function calculateluckynum (date,num){
    
    if(date%num===0){
        console.log("lucky num")
        var lo=num+ " is a lucky number";
        output.innerHTML=lo;
    }
    else{
        console.log("not lucky enough");
        var numo="not lucky enough";
        output.innerHTML=numo;

    }
}

function checkinput(){
    console.log("clicked");
    var inp =input.value;
    var luc=lucky.value;
    if (inp && luc) {
      
    var dsum= datesum(inp);
    calculateluckynum(dsum,luc);
        
    }

    else{
        console.log("enter both fileds");
        var m="enter both fields"
        output.innerHTML=m

    }
    
}

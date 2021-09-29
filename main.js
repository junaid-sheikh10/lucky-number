var input=document.querySelector("#input");
var lucky=document.querySelector("#lucky");
var button=document.querySelector("#btn");

button.addEventListener(click,checkinput);

function checkinput(){
    console.log("clicked")
    var inp =input.value;
    var luc=lucky.value;
    if(inp && luc){

    }
    else{
        showMessage("please enter both fields")
        console.log("else")
    }
}
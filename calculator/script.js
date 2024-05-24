const Display = document.getElementById("GiveInput");

function appendtoGiveInput(input){
    Display.value +=input;
}


function AllClear(){
    Display.value = "";
}

function Clear(){
    Display.value = Display.value.slice(0,-1);
}

function Calculate(){
    try{
        Display.value = eval(Display.value);
    }
    catch(error){
        Display.value = "ERROR" ;
    } 
}
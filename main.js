// function aclr() { 
//     document.getElementById("result").value = "" 
// } 

// function dis(val) { 
//     document.getElementById("result").value += val 
// } 

// function backspace(){
//     document.getElementById("result").value=slice()
// }


// function calculate(){
//     document.getElementById("result").value=eval(document.getElementById("result").value)
// }

const display= document.getElementById("display");


function appendToDisplay(input){
    display.value += input;
}

function cleardisplay(){
    display.value ="";
}
function backspace(){
    display.value = display.value.slice(0,-1);
    
}
function calculate(){
    display.value =eval(display.value);
    try{
        display.value =eval(display.value);
    }
    catch(error){
        display.value ="error"
        
    }

}
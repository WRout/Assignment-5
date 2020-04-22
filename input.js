// This script exists to print the user's name


function getInput(){
  let input = prompt("Welcome to The Website! Please input your name: ");
  return input;
}


function returnInput(getInput){
  if(getInput.toUpperCase() === "SCOTT"){
    document.write("<br><em>Scott is stinky</em><br>");
          
  } else if((getInput === null) || (getInput === "")){
    document.write("<br>Welcome, Mr. TooLazyToWriteTheirName!<br>");

  } else {
    document.write("<br>Welcome, <strong>" + getInput + "!</strong><br>");   
  }
}

returnInput(getInput());
// This script exists to print my family's ages 


function ages(){

  let momAge = 44;
  let dadAge = 47;
  let myAge = 15;
  let meDadAgeDiff = (dadAge - myAge);
  let meMomAgeDiff = (momAge - myAge);
  let dadMomAgeDiff = (dadAge - momAge);
  let totalAge = (momAge + dadAge + myAge);

  document.write("<br>My mother is " + momAge + " years old ");
  document.write("while my father is ", dadAge);
  document.write(`<br>My age is ${myAge}<br>`);
  document.write("<br>The difference in age between me and my father is " + meDadAgeDiff);
  document.write("<br>The difference in age between me and my mother is " + meMomAgeDiff);
  document.write("<br>The difference in age between my mother and father is " + dadMomAgeDiff);

  document.write("<br><p>The combined age of my family is: ");
  document.write(totalAge + "<br>");

  alert("The progam is finished!");
  }

ages();
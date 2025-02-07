window.setTimeout('closestartup()', 3900);
var bodyheight = 625;
var bodywidth = 360;
var logoheight = 180;
var logowidth = 180;
intrologo = document.getElementById("introshow");
window.onload = function(){positionlogo();}
function positionlogo(){
	intrologo.style.top = (bodyheight/2)-(logoheight/2);
	intrologo.style.left = (bodywidth/2)-(logowidth/2);
}
function closestartup(){
	intrologo.style.display="none";
	gamebody.style.display="block";
}
//card varibles
var card1_1=false;
var card1_2=false;
var card2_1=false;
var card2_2=false;
var card3_1=false;
var card3_2=false;
var card4_1=false;
var card4_2=false;
var card5_1=false;
var card5_2=false;
var card6_1=false;
var card6_2=false;
var card7_1=false;
var card7_2=false;
var card8_1=false;
var card8_2=false;
var card9_1=false;
var card9_2=false;
var card10_1=false;
var card10_2=false;
var card11_1=false;
var card11_2=false;
var card12_1=false;
var card12_2=false;
var card13_1=false;
var card13_2=false;
var card14_1=false;
var card14_2=false;
var card15_1=false;
var card15_2=false;
scorevalue=document.getElementById("scorevalue");
//func it
function definecards(){
globalThis["card1_1"]=false;
globalThis["card1_2"]=false;
globalThis["card2_1"]=false;
globalThis["card2_2"]=false;
globalThis["card3_1"]=false;
globalThis["card3_2"]=false;
globalThis["card4_1"]=false;
globalThis["card4_2"]=false;
globalThis["card5_1"]=false;
globalThis["card5_2"]=false;
globalThis["card6_1"]=false;
globalThis["card6_2"]=false;
globalThis["card7_1"]=false;
globalThis["card7_2"]=false;
globalThis["card8_1"]=false;
globalThis["card8_2"]=false;
globalThis["card9_1"]=false;
globalThis["card9_2"]=false;
globalThis["card10_1"]=false;
globalThis["card10_2"]=false;
globalThis["card11_1"]=false;
globalThis["card11_2"]=false;
globalThis["card12_1"]=false;
globalThis["card12_2"]=false;
globalThis["card13_1"]=false;
globalThis["card13_2"]=false;
globalThis["card14_1"]=false;
globalThis["card14_2"]=false;
globalThis["card15_1"]=false;
globalThis["card15_2"]=false;
}
var cardtest;
var cardlog1;
var cardlog2;
var card1test;
var card2test;
var card3test;
var card4test;
var card5test;
var card6test;
var card7test;
var card8test;
var card9test;
var card10test;
var card11test;
var card12test;
var card13test;
var card14test;
var card15test;
var score=0;
//flipping the cards
var j=0; //keep log to see if 2 cards are selected
$("#card1").on("click",function(){
   $("#card1").css("transform","rotateY(360deg)");
   $("#card1").attr("src","./images/1-tree.jpg");
   j++;
   card1_1=true;
   if(j%2==0){
   	cardlog1=document.getElementById("card1");
       testcards();
        globalThis['cardtest']=card1test;
       cardreverse();
       }
    else{
    	cardlog2=document.getElementById("card1");
    }
   })
$("#card2").on("click",function(){
   $("#card2").css("transform","rotateY(360deg)");
   $("#card2").attr("src","./images/10-building-night.jpg");
   j++;
   card10_1=true;
   if(j%2==0){
   	cardlog1=document.getElementById("card2");
       testcards();
        globalThis['cardtest']=card10test;
       cardreverse();
       }
    else{
    	cardlog2=document.getElementById("card2");
    }
   })
$("#card3").on("click",function(){
   $("#card3").css("transform","rotateY(360deg)");
   $("#card3").attr("src","./images/5-raining.jpg");
   j++;
   card5_1=true;
   if(j%2==0){
   	cardlog1=document.getElementById("card3");
       testcards();
        globalThis['cardtest']=card5test;
       cardreverse();
       }
    else{
    	cardlog2=document.getElementById("card3");
    }
   })
$("#card4").on("click",function(){
   $("#card4").css("transform","rotateY(360deg)");
   $("#card4").attr("src","./images/12-football.jpg");
   j++;
   card12_1=true;
   if(j%2==0){
   	cardlog1=document.getElementById("card4");
       testcards();
        globalThis['cardtest']=card12test;
       cardreverse();
       }
    else{
    	cardlog2=document.getElementById("card4");
    }
   })
$("#card5").on("click",function(){
   $("#card5").css("transform","rotateY(360deg)");
   $("#card5").attr("src","./images/15-cake.jpg");
   j++;
   card15_1=true;
   if(j%2==0){
   	cardlog1=document.getElementById("card5");
       testcards();
        globalThis['cardtest']=card15test;
       cardreverse();
       }
    else{
    	cardlog2=document.getElementById("card5");
    }
   })
$("#card6").on("click",function(){
   $("#card6").css("transform","rotateY(360deg)");
   $("#card6").attr("src","./images/8-mountain-night.jpg");
   j++;
   card8_1=true;
   if(j%2==0){
   	cardlog1=document.getElementById("card6");
       testcards();
        globalThis['cardtest']=card8test;
       cardreverse();
       }
    else{
    	cardlog2=document.getElementById("card6");
    }
   })
$("#card7").on("click",function(){
   $("#card7").css("transform","rotateY(360deg)");
   $("#card7").attr("src","./images/3-sun.jpg");
   j++;
   card3_1=true;
   if(j%2==0){
   	cardlog1=document.getElementById("card7");
       testcards();
        globalThis['cardtest']=card3test;
       cardreverse();
       }
    else{
    	cardlog2=document.getElementById("card7");
    }
   })
$("#card8").on("click",function(){
   $("#card8").css("transform","rotateY(360deg)");
   $("#card8").attr("src","./images/2-dead-tree.jpg");
   j++;
   card2_1=true;
   if(j%2==0){
   	cardlog1=document.getElementById("card8");
       testcards();
        globalThis['cardtest']=card2test;
       cardreverse();
       }
    else{
    	cardlog2=document.getElementById("card8");
    }
   })
$("#card9").on("click",function(){
   $("#card9").css("transform","rotateY(360deg)");
   $("#card9").attr("src","./images/2-dead-tree.jpg");
   j++;
   card2_2=true;
   if(j%2==0){
   	cardlog1=document.getElementById("card9");
       testcards();
        globalThis['cardtest']=card2test;
       cardreverse();
       }
    else{
    	cardlog2=document.getElementById("card9");
    }
   })
$("#card10").on("click",function(){
   $("#card10").css("transform","rotateY(360deg)");
   $("#card10").attr("src","./images/11-windmill.jpg");
   j++;
   card11_1=true;
   if(j%2==0){
   	cardlog1=document.getElementById("card10");
       testcards();
        globalThis['cardtest']=card11test;
       cardreverse();
       }
    else{
    	cardlog2=document.getElementById("card10");
    }
   })
$("#card11").on("click",function(){
   $("#card11").css("transform","rotateY(360deg)");
   $("#card11").attr("src","./images/4-cloudy.jpg");
   j++;
   card4_1=true;
   if(j%2==0){
   	cardlog1=document.getElementById("card11");
       testcards();
        globalThis['cardtest']=card4test;
       cardreverse();
       }
    else{
    	cardlog2=document.getElementById("card11");
    }
   })
$("#card12").on("click",function(){
   $("#card12").css("transform","rotateY(360deg)");
   $("#card12").attr("src","./images/11-windmill.jpg");
   j++;
   card11_2=true;
   if(j%2==0){
   	cardlog1=document.getElementById("card12");
       testcards();
        globalThis['cardtest']=card11test;
       cardreverse();
       }
    else{
    	cardlog2=document.getElementById("card12");
    }
   })
$("#card13").on("click",function(){
   $("#card13").css("transform","rotateY(360deg)");
   $("#card13").attr("src","./images/15-cake.jpg");
   j++;
   card15_2=true;
   if(j%2==0){
   	cardlog1=document.getElementById("card13");
       testcards();
        globalThis['cardtest']=card15test;
       cardreverse();
       }
    else{
    	cardlog2=document.getElementById("card13");
    }
   })
$("#card14").on("click",function(){
   $("#card14").css("transform","rotateY(360deg)");
   $("#card14").attr("src","./images/9-building.jpg");
   j++;
   card9_1=true;
   if(j%2==0){
   	cardlog1=document.getElementById("card14");
       testcards();
        globalThis['cardtest']=card9test;
       cardreverse();
       }
    else{
    	cardlog2=document.getElementById("card14");
    }
   })
$("#card15").on("click",function(){
   $("#card15").css("transform","rotateY(360deg)");
   $("#card15").attr("src","./images/14-rose.jpg");
   j++;
   card14_1=true;
   if(j%2==0){
   	cardlog1=document.getElementById("card15");
       testcards();
        globalThis['cardtest']=card14test;
       cardreverse();
       }
    else{
    	cardlog2=document.getElementById("card15");
    }
   })
$("#card16").on("click",function(){
   $("#card16").css("transform","rotateY(360deg)");
   $("#card16").attr("src","./images/9-building.jpg");
   j++;
   card9_2=true;
   if(j%2==0){
   	cardlog1=document.getElementById("card16");
       testcards();
        globalThis['cardtest']=card9test;
       cardreverse();
       }
    else{
    	cardlog2=document.getElementById("card16");
    }
   })
$("#card17").on("click",function(){
   $("#card17").css("transform","rotateY(360deg)");
   $("#card17").attr("src","./images/10-building-night.jpg");
   j++;
   card10_2=true;
   if(j%2==0){
   	cardlog1=document.getElementById("card17");
       testcards();
        globalThis['cardtest']=card10test;
       cardreverse();
       }
    else{
    	cardlog2=document.getElementById("card17");
    }
   })
$("#card18").on("click",function(){
   $("#card18").css("transform","rotateY(360deg)");
   $("#card18").attr("src","./images/6-lightining.jpg");
   j++;
   card6_1=true;
   if(j%2==0){
   	cardlog1=document.getElementById("card18");
       testcards();
        globalThis['cardtest']=card6test;
       cardreverse();
       }
    else{
    	cardlog2=document.getElementById("card18");
    }
   })
$("#card19").on("click",function(){
   $("#card19").css("transform","rotateY(360deg)");
   $("#card19").attr("src","./images/4-cloudy.jpg");
   j++;
   card4_2=true;
   if(j%2==0){
   	cardlog1=document.getElementById("card19");
       testcards();
        globalThis['cardtest']=card4test;
       cardreverse();
       }
    else{
    	cardlog2=document.getElementById("card19");
    }
   })
$("#card20").on("click",function(){
   $("#card20").css("transform","rotateY(360deg)");
   $("#card20").attr("src","./images/12-football.jpg");
   j++;
   card12_2=true;
   if(j%2==0){
   	cardlog1=document.getElementById("card20");
       testcards();
        globalThis['cardtest']=card12test;
       cardreverse();
       }
    else{
    	cardlog2=document.getElementById("card20");
    }
   })
$("#card21").on("click",function(){
   $("#card21").css("transform","rotateY(360deg)");
   $("#card21").attr("src","./images/13-light.jpg");
   j++;
   card13_1=true;
   if(j%2==0){
   	cardlog1=document.getElementById("card21");
       testcards();
        globalThis['cardtest']=card13test;
       cardreverse();
       }
    else{
    	cardlog2=document.getElementById("card21");
    }
   })
$("#card22").on("click",function(){
   $("#card22").css("transform","rotateY(360deg)");
   $("#card22").attr("src","./images/14-rose.jpg");
   j++;
   card14_2=true;
   if(j%2==0){
   	cardlog1=document.getElementById("card22");
       testcards();
        globalThis['cardtest']=card14test;
       cardreverse();
       }
    else{
    	cardlog2=document.getElementById("card22");
    }
   })
$("#card23").on("click",function(){
   $("#card23").css("transform","rotateY(360deg)");
   $("#card23").attr("src","./images/3-sun.jpg");
   j++;
   card3_2=true;
   if(j%2==0){
   	cardlog1=document.getElementById("card23");
       testcards();
        globalThis['cardtest']=card3test;
       cardreverse();
       }
    else{
    	cardlog2=document.getElementById("card23");
    }
   })
$("#card24").on("click",function(){
   $("#card24").css("transform","rotateY(360deg)");
   $("#card24").attr("src","./images/13-light.jpg");
   j++;
   card13_2=true;
   if(j%2==0){
   	cardlog1=document.getElementById("card24");
       testcards();
        globalThis['cardtest']=card13test;
       cardreverse();
       }
    else{
    	cardlog2=document.getElementById("card24");
    }
   })
$("#card25").on("click",function(){
   $("#card25").css("transform","rotateY(360deg)");
   $("#card25").attr("src","./images/6-lightining.jpg");
   j++;
   card6_2=true;
   if(j%2==0){
   	cardlog1=document.getElementById("card25");
       testcards();
        globalThis['cardtest']=card6test;
       cardreverse();
       }
    else{
    	cardlog2=document.getElementById("card25");
    }
   })
$("#card26").on("click",function(){
   $("#card26").css("transform","rotateY(360deg)");
   $("#card26").attr("src","./images/1-tree.jpg");
   j++;
   card1_2=true;
   if(j%2==0){
   	cardlog1=document.getElementById("card26");
       testcards();
        globalThis['cardtest']=card1test;
       cardreverse();
       }
    else{
    	cardlog2=document.getElementById("card26");
    }
   })
$("#card27").on("click",function(){
   $("#card27").css("transform","rotateY(360deg)");
   $("#card27").attr("src","./images/5-raining.jpg");
   j++;
   card5_2=true;
   if(j%2==0){
   	cardlog1=document.getElementById("card27");
       testcards();
        globalThis['cardtest']=card5test;
       cardreverse();
       }
    else{
    	cardlog2=document.getElementById("card27");
    }
   })
$("#card28").on("click",function(){
   $("#card28").css("transform","rotateY(360deg)");
   $("#card28").attr("src","./images/7-mountain.jpg");
   j++;
   card7_1=true;
   if(j%2==0){
   	cardlog1=document.getElementById("card28");
       testcards();
        globalThis['cardtest']=card7test;
       cardreverse();
       }
    else{
    	cardlog2=document.getElementById("card28");
    }
   })
$("#card29").on("click",function(){
   $("#card29").css("transform","rotateY(360deg)");
   $("#card29").attr("src","./images/8-mountain-night.jpg");
   j++;
   card8_2=true;
   if(j%2==0){
   	cardlog1=document.getElementById("card29");
       testcards();
        globalThis['cardtest']=card8test;
       cardreverse();
       }
    else{
    	cardlog2=document.getElementById("card29");
    }
   })
$("#card30").on("click",function(){
   $("#card30").css("transform","rotateY(360deg)");
   $("#card30").attr("src","./images/7-mountain.jpg");
   j++;
   card7_2=true;
   if(j%2==0){
   	cardlog1=document.getElementById("card30");
       testcards();
        globalThis['cardtest']=card7test;
       cardreverse();
       }
    else{
    	cardlog2=document.getElementById("card30");
    }
   })




//test if cards match
function testcards(){
	  this['card1test']=card1_1&&card1_2;
	  this['card2test']=card2_1&&card2_2;
	  this['card3test']=card3_1&&card3_2;
	  this['card4test']=card4_1&&card4_2;
	  this['card5test']=card5_1&&card5_2;
	  this['card6test']=card6_1&&card6_2;
	  this['card7test']=card7_1&&card7_2;
	  this['card8test']=card8_1&&card8_2;
	  this['card9test']=card9_1&&card9_2;
	  this['card10test']=card10_1&&card10_2;
	  this['card11test']=card11_1&&card11_2;
	  this['card12test']=card12_1&&card12_2;
	  this['card13test']=card13_1&&card13_2;
	  this['card14test']=card14_1&&card14_2;
	  this['card15test']=card15_1&&card15_2;
}
//get the card back to old position
function cardreverse(){
	if(cardtest==false){
	  definecards();
	  score++;
	  document.getElementById("scorevalue").innerHTML ='-'+score;
      setTimeout(function(){ 
   	  $(cardlog1).css("transform","rotateY(0deg)");
         $(cardlog1).attr("src","./images/cards-back.jpg");
         $(cardlog2).css("transform","rotateY(0deg)");
         $(cardlog2).attr("src","./images/cards-back.jpg");
  }, 1000);
 }
    if(cardtest==true){
    	 cardtest=false;
   	  $(cardlog1).animate({
                    opacity: "0",
                },{
                	duration:800,
              });
         $(cardlog2).animate({
                    opacity: "0",
                },{
                	duration:800,
              });
 }
}



















var h=document.getElementById("boxcontainer").offsetHeight;
var w=document.getElementById("boxcontainer").offsetWidth;
counter2048=0;
function colorbox(){
	 i = 1;
while (i < 18) {
	boxnum=document.getElementById("tile"+i).innerHTML;
if(boxnum==0){
 	document.getElementById("tile"+i).style.color='lightgreen';
     document.getElementById("tile"+i).style.backgroundColor='lightgreen';
     document.getElementById("tile"+i).style.fontSize='25px';
}
 if(boxnum==2){
 	document.getElementById("tile"+i).style.color='white';
     document.getElementById("tile"+i).style.backgroundColor='darkred';
     document.getElementById("tile"+i).style.fontSize='25px';
}
if(boxnum==4){
 	document.getElementById("tile"+i).style.color='white';
     document.getElementById("tile"+i).style.backgroundColor='red';
     document.getElementById("tile"+i).style.fontSize='25px';
}
if(boxnum==8){
 	document.getElementById("tile"+i).style.color='white';
     document.getElementById("tile"+i).style.backgroundColor='orange';
     document.getElementById("tile"+i).style.fontSize='25px';
}
if(boxnum==16){
 	document.getElementById("tile"+i).style.color='white';
     document.getElementById("tile"+i).style.backgroundColor='gold';
     document.getElementById("tile"+i).style.fontSize='25px';
}
if(boxnum==32){
 	document.getElementById("tile"+i).style.color='black';
     document.getElementById("tile"+i).style.backgroundColor='yellow';
     document.getElementById("tile"+i).style.fontSize='25px';
}
if(boxnum==64){
 	document.getElementById("tile"+i).style.color='black';
     document.getElementById("tile"+i).style.backgroundColor='#00FFFF';
     document.getElementById("tile"+i).style.fontSize='25px';
}
if(boxnum==128){
 	document.getElementById("tile"+i).style.color='white';
     document.getElementById("tile"+i).style.backgroundColor='blue';
     document.getElementById("tile"+i).style.fontSize='25px';
}
if(boxnum==256){
 	document.getElementById("tile"+i).style.color='white';
     document.getElementById("tile"+i).style.backgroundColor='darkblue';
     document.getElementById("tile"+i).style.fontSize='25px';
}
if(boxnum==512){
 	document.getElementById("tile"+i).style.color='white';
     document.getElementById("tile"+i).style.backgroundColor='teal';
     document.getElementById("tile"+i).style.fontSize='25px';
}
if(boxnum==1024){
 	document.getElementById("tile"+i).style.color='white';
     document.getElementById("tile"+i).style.backgroundColor='green';
     document.getElementById("tile"+i).style.fontSize='20px';
}
if(boxnum==2048&&counter2048==0){
 	document.getElementById("tile"+i).style.color='white';
     document.getElementById("tile"+i).style.backgroundColor='darkgreen';
     document.getElementById("tile"+i).style.fontSize='20px';     
     counter2048++;
     decide2048();
}
if(boxnum==4096){
 	document.getElementById("tile"+i).style.color='white';
     document.getElementById("tile"+i).style.backgroundColor='black';
     document.getElementById("tile"+i).style.fontSize='20px';
}
if(boxnum==8192){
 	document.getElementById("tile"+i).style.color='white';
     document.getElementById("tile"+i).style.backgroundColor='#777777';
     document.getElementById("tile"+i).style.fontSize='20px';
}
if(boxnum==16384){
 	document.getElementById("tile"+i).style.color='black';
     document.getElementById("tile"+i).style.backgroundColor='white';
     document.getElementById("tile"+i).style.fontSize='17px';
}
if(boxnum==32768){
 	document.getElementById("tile"+i).style.color='white';
     document.getElementById("tile"+i).style.backgroundColor='khaki';
     document.getElementById("tile"+i).style.fontSize='17px';
}
if(boxnum>65535){
 	document.getElementById("tile"+i).style.color='white';
     document.getElementById("tile"+i).style.backgroundColor='darkkhaki';
     document.getElementById("tile"+i).style.fontSize='17px';
}
 i++;
 if(i==17){
     break;
}
  }
}
//2048 decider
function decide2048(){
i=1;
while(i<17){
	 document.getElementById("tile"+i).style.display="none";
	 i++;
 }
     document.getElementById("xxx").style.display="inline-block";
     document.getElementById("xxxi").style.display="none";
     document.getElementById("boxcontainer").style.height=h-12+"px";
     document.getElementById("boxcontainer").style.width=w-12+"px";
     document.getElementById("confirm").style.display="block";
     document.getElementById("continue").style.display="inline-block";
}
//all box comp checker
function gameover(){
	i=1;
	while(i<17){
	this["tiles"+i]=document.getElementById("tile"+i).innerHTML; 
	 i++;
 }
	 compcheck = tiles1!=0&&tiles2!=0&&tiles3!=0&&tiles4!=0&&tiles5!=0&&tiles6!=0&&tiles7!=0&&tiles8!=0&&tiles9!=0&&tiles10!=0&&tiles11!=0&&tiles12!=0&&tiles13!=0&&tiles14!=0&&tiles15!=0&&tiles16!=0;
	 compcheckh1 = tiles1!=tiles2&&tiles2!=tiles3&&tiles3!=tiles4;
	 compcheckh2 = tiles5!=tiles6&&tiles6!=tiles7&&tiles7!=tiles8;
	 compcheckh3 = tiles9!=tiles10&&tiles10!=tiles11&&tiles11!=tiles12;
	 compcheckh4 = tiles13!=tiles14&&tiles14!=tiles15&&tiles15!=tiles16;
	 compcheckv1 = tiles1!=tiles5&&tiles5!=tiles9&&tiles9!=tiles13;
	 compcheckv2 = tiles2!=tiles6&&tiles6!=tiles10&&tiles10!=tiles14;
	 compcheckv3 = tiles3!=tiles7&&tiles7!=tiles11&&tiles11!=tiles15;
	 compcheckv4 = tiles4!=tiles8&&tiles8!=tiles12&&tiles12!=tiles16;
if (compcheck==true&&compcheckh1==true&&compcheckh2==true&&compcheckh3==true&&compcheckh4==true&&compcheckv1==true&&compcheckv2==true&&compcheckv3==true&&compcheckv4==true){
	i=1;
	while(i<17){
	 document.getElementById("tile"+i).style.display="none";
	 i++;
 }
     document.getElementById("confirm").style.display="block";
     document.getElementById("xxxi").style.display="inline-block";
     document.getElementById("xxx").style.display="none";
     document.getElementById("continue").style.display="none";
     document.getElementById("boxcontainer").style.height=h-12+"px";
     document.getElementById("boxcontainer").style.width=w-12+"px";
  }
}
	

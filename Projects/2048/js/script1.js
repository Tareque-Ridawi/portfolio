function reset(){	i=1;	while(i<17){	 document.getElementById("tile"+i).innerHTML =0;	 i++; }	document.getElementById("amount").innerHTML =0;    document.getElementById("addition").innerHTML =""+""+"";	dos();	colorbox();	};function cont(){	 document.getElementById("confirm").style.display="none";	i=1;while(i<17){	 document.getElementById("tile"+i).style.display="inline-block";	 i++; }//function for spawning numbers after every swipe }function spawn1(){	if(spawn!=0){var i;for (i = 0; i < 30; i++) { r=printnumbers(1,16);rightcheck=document.getElementById("tile"+r).innerHTML;if(rightcheck==0){	document.getElementById("tile"+r).innerHTML ="2";    document.getElementById("tile"+r).style.color='darkgreen';    break;    }    }spawn=0;  } }
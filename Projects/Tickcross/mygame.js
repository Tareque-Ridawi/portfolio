window.setTimeout('closestartup()', 4100);function closestartup(){document.getElementById("startup").style.display="none";document.getElementById("body").style.display="block";}var count=1;var m = "M";var box1 = document.getElementById("choose1").innerHTML;var box2 = document.getElementById("choose2").innerHTML;var box3 = document.getElementById("choose3").innerHTML;var box4 = document.getElementById("choose4").innerHTML;var box5 = document.getElementById("choose5").innerHTML;var box6 = document.getElementById("choose6").innerHTML;var box7 = document.getElementById("choose7").innerHTML;var box8 = document.getElementById("choose8").innerHTML;var box9 = document.getElementById("choose9").innerHTML;function task1(){if (box1==m && count%2!=0){	document.getElementById("choose1").style.color='darkgreen';	document.getElementById("choose1").innerHTML ="✔️";	count++;     box1 = "✔️";     document.getElementById("turn").innerHTML ="&nbsp &nbsp Player 2's turn &nbsp &nbsp";	}else if (box1==m && count%2==0){	document.getElementById("choose1").style.color='darkred';	document.getElementById("choose1").innerHTML ="✖️";	count++;	 box1 = "✖️";	document.getElementById("turn").innerHTML ="&nbsp &nbsp Player 1's turn &nbsp &nbsp";	}}function task2(){if (box2==m&&count%2!=0){	document.getElementById("choose2").style.color='darkgreen';	document.getElementById("choose2").innerHTML ="✔️";	count++;	box2 = "✔️";	document.getElementById("turn").innerHTML ="&nbsp &nbsp Player 2's turn &nbsp &nbsp";	}else if (box2==m&&count%2==0){	document.getElementById("choose2").style.color='darkred';	document.getElementById("choose2").innerHTML ="✖️";	count++;	box2 = "✖️";	document.getElementById("turn").innerHTML ="&nbsp &nbsp Player 1's turn &nbsp &nbsp";	}}function task3(){if ((box3==m)&&(count%2!=0)){	document.getElementById("choose3").style.color='darkgreen';	document.getElementById("choose3").innerHTML ="✔️";	count++;	box3 = "✔️";	document.getElementById("turn").innerHTML ="&nbsp &nbsp Player 2's turn &nbsp &nbsp";	}else if ((box3==m)&&(count%2==0)){	document.getElementById("choose3").style.color='darkred';	document.getElementById("choose3").innerHTML ="✖️";	count++;	box3 = "✖️";	document.getElementById("turn").innerHTML ="&nbsp &nbsp Player 1's turn &nbsp &nbsp";	}}function task4(){if ((box4==m)&&(count%2!=0)){	document.getElementById("choose4").style.color='darkgreen';	document.getElementById("choose4").innerHTML ="✔️";	count++;	box4 = "✔️";	document.getElementById("turn").innerHTML ="&nbsp &nbsp Player 2's turn &nbsp &nbsp";	}else if ((box4==m)&&(count%2==0)){	document.getElementById("choose4").style.color='darkred';	document.getElementById("choose4").innerHTML ="✖️";	count++;	box4 = "✖️";	document.getElementById("turn").innerHTML ="&nbsp &nbsp Player 1's turn &nbsp &nbsp";	}}function task5(){if ((box5==m)&&(count%2!=0)){	document.getElementById("choose5").style.color='darkgreen';	document.getElementById("choose5").innerHTML ="✔️";	count++;	box5 = "✔️";	document.getElementById("turn").innerHTML ="&nbsp &nbsp Player 2's turn &nbsp &nbsp";	}else if ((box5==m)&&(count%2==0)){	document.getElementById("choose5").style.color='darkred';	document.getElementById("choose5").innerHTML ="✖️";	count++;	box5 = "✖️";	document.getElementById("turn").innerHTML ="&nbsp &nbsp Player 1's turn &nbsp &nbsp";	}}function task6(){if ((box6==m)&&(count%2!=0)){	document.getElementById("choose6").style.color='darkgreen';	document.getElementById("choose6").innerHTML ="✔️";	count++;	box6 = "✔️";	document.getElementById("turn").innerHTML ="&nbsp &nbsp Player 2's turn &nbsp &nbsp";	}else if ((box6==m)&&(count%2==0)){	document.getElementById("choose6").style.color='darkred';	document.getElementById("choose6").innerHTML ="✖️";	count++;	box6 = "✖️";	document.getElementById("turn").innerHTML ="&nbsp &nbsp Player 1's turn &nbsp &nbsp";	}}function task7(){if ((box7==m)&&(count%2!=0)){	document.getElementById("choose7").style.color='darkgreen';	document.getElementById("choose7").innerHTML ="✔️";	count++;	box7 = "✔️";	document.getElementById("turn").innerHTML ="&nbsp &nbsp Player 2's turn &nbsp &nbsp";	}else if ((box7==m)&&(count%2==0)){	document.getElementById("choose7").style.color='darkred';	document.getElementById("choose7").innerHTML ="✖️";	count++;	box7 = "✖️";	document.getElementById("turn").innerHTML ="&nbsp &nbsp Player 1's turn &nbsp &nbsp";	}}function task8(){if ((box8==m)&&(count%2!=0)){	document.getElementById("choose8").style.color='darkgreen';	document.getElementById("choose8").innerHTML ="✔️";	count++;	box8 = "✔️";	document.getElementById("turn").innerHTML ="&nbsp &nbsp Player 2's turn &nbsp &nbsp";	}else if ((box8==m)&&(count%2==0)){	document.getElementById("choose8").style.color='darkred';	document.getElementById("choose8").innerHTML ="✖️";	count++;	box8 = "✖️";	document.getElementById("turn").innerHTML ="&nbsp &nbsp Player 1's turn &nbsp &nbsp";	}}function task9(){if ((box9==m)&&(count%2!=0)){	document.getElementById("choose9").style.color='darkgreen';	document.getElementById("choose9").innerHTML ="✔️";	count++;	box9 = "✔️";	document.getElementById("turn").innerHTML ="&nbsp &nbsp Player 2's turn &nbsp &nbsp";	}else if ((box9==m)&&(count%2==0)){	document.getElementById("choose9").style.color='darkred';	document.getElementById("choose9").innerHTML ="✖️";	count++;	box9 = "✖️";	document.getElementById("turn").innerHTML ="&nbsp &nbsp Player 1's turn &nbsp &nbsp";	}}function check(){if (box1=="✔️" &&box2=="✔️" &&box3=="✔️"){	document.getElementById("choose1").style.backgroundColor='white';	document.getElementById("choose2").style.backgroundColor='white';	document.getElementById("choose3").style.backgroundColor='white';	document.getElementById("reset").style.display='inline-block';	document.getElementById("turn").style.backgroundColor='darkgreen';	document.getElementById("turn").style.color='white';	document.getElementById("turn").innerHTML='&nbsp &nbsp &nbsp Player 1 wins &nbsp &nbsp &nbsp';	box1 = 'T';	box2 = 'T';	box3 = 'T';	box4 = 'T';	box5 = 'T';	box6 = 'T';	box7 = 'T';	box8 = 'T';	box9 = 'T';	}else if (box1=="✖️" &&box2=="✖️" &&box3=="✖️"){	document.getElementById("choose1").style.backgroundColor='white';	document.getElementById("choose2").style.backgroundColor='white';	document.getElementById("choose3").style.backgroundColor='white';	document.getElementById("reset").style.display='inline-block';	document.getElementById("turn").style.backgroundColor='darkgreen';	document.getElementById("turn").style.color='white';	document.getElementById("turn").innerHTML='&nbsp &nbsp &nbsp Player 2 wins &nbsp &nbsp &nbsp';	box1 = 'T';	box2 = 'T';	box3 = 'T';	box4 = 'T';	box5 = 'T';	box6 = 'T';	box7 = 'T';	box8 = 'T';	box9 = 'T';	}else if (box4=="✔️" &&box5=="✔️" &&box6=="✔️"){	document.getElementById("choose4").style.backgroundColor='white';	document.getElementById("choose5").style.backgroundColor='white';	document.getElementById("choose6").style.backgroundColor='white';	document.getElementById("reset").style.display='inline-block';	document.getElementById("turn").style.backgroundColor='darkgreen';	document.getElementById("turn").style.color='white';	document.getElementById("turn").innerHTML='&nbsp &nbsp &nbsp Player 1 wins &nbsp &nbsp &nbsp';	box1 = 'T';	box2 = 'T';	box3 = 'T';	box4 = 'T';	box5 = 'T';	box6 = 'T';	box7 = 'T';	box8 = 'T';	box9 = 'T';	}else if (box4=="✖️" &&box5=="✖️" &&box6=="✖️"){	document.getElementById("choose4").style.backgroundColor='white';	document.getElementById("choose5").style.backgroundColor='white';	document.getElementById("choose6").style.backgroundColor='white';	document.getElementById("reset").style.display='inline-block';	document.getElementById("turn").style.backgroundColor='darkgreen';	document.getElementById("turn").style.color='white';	document.getElementById("turn").innerHTML='&nbsp &nbsp &nbsp Player 2 wins &nbsp &nbsp &nbsp';	box1 = 'T';	box2 = 'T';	box3 = 'T';	box4 = 'T';	box5 = 'T';	box6 = 'T';	box7 = 'T';	box8 = 'T';	box9 = 'T';	}else if (box7=="✔️" &&box8=="✔️" &&box9=="✔️"){	document.getElementById("choose7").style.backgroundColor='white';	document.getElementById("choose8").style.backgroundColor='white';	document.getElementById("choose9").style.backgroundColor='white';	document.getElementById("reset").style.display='inline-block';	document.getElementById("turn").style.backgroundColor='darkgreen';	document.getElementById("turn").style.color='white';	document.getElementById("turn").innerHTML='&nbsp &nbsp &nbsp Player 1 wins &nbsp &nbsp &nbsp';	box1 = 'T';	box2 = 'T';	box3 = 'T';	box4 = 'T';	box5 = 'T';	box6 = 'T';	box7 = 'T';	box8 = 'T';	box9 = 'T';	}else if (box7=="✖️" &&box8=="✖️" &&box9=="✖️"){	document.getElementById("choose7").style.backgroundColor='white';	document.getElementById("choose8").style.backgroundColor='white';	document.getElementById("choose9").style.backgroundColor='white';	document.getElementById("reset").style.display='inline-block';	document.getElementById("turn").style.backgroundColor='darkgreen';	document.getElementById("turn").style.color='white';	document.getElementById("turn").innerHTML='&nbsp &nbsp &nbsp Player 2 wins &nbsp &nbsp &nbsp';	box1 = 'T';	box2 = 'T';	box3 = 'T';	box4 = 'T';	box5 = 'T';	box6 = 'T';	box7 = 'T';	box8 = 'T';	box9 = 'T';	}else if (box1=="✔️" &&box4=="✔️" &&box7=="✔️"){	document.getElementById("choose1").style.backgroundColor='white';	document.getElementById("choose4").style.backgroundColor='white';	document.getElementById("choose7").style.backgroundColor='white';	document.getElementById("reset").style.display='inline-block';	document.getElementById("turn").style.backgroundColor='darkgreen';	document.getElementById("turn").style.color='white';	document.getElementById("turn").innerHTML='&nbsp &nbsp &nbsp Player 1 wins &nbsp &nbsp &nbsp';	box1 = 'T';	box2 = 'T';	box3 = 'T';	box4 = 'T';	box5 = 'T';	box6 = 'T';	box7 = 'T';	box8 = 'T';	box9 = 'T';	}else if (box1=="✖️" &&box4=="✖️" &&box7=="✖️"){	document.getElementById("choose1").style.backgroundColor='white';	document.getElementById("choose4").style.backgroundColor='white';	document.getElementById("choose7").style.backgroundColor='white';	document.getElementById("reset").style.display='inline-block';	document.getElementById("turn").style.backgroundColor='darkgreen';	document.getElementById("turn").style.color='white';	document.getElementById("turn").innerHTML='&nbsp &nbsp &nbsp Player 2 wins &nbsp &nbsp &nbsp';	box1 = 'T';	box2 = 'T';	box3 = 'T';	box4 = 'T';	box5 = 'T';	box6 = 'T';	box7 = 'T';	box8 = 'T';	box9 = 'T';	}else if (box2=="✔️" &&box5=="✔️" &&box8=="✔️"){	document.getElementById("choose2").style.backgroundColor='white';	document.getElementById("choose5").style.backgroundColor='white';	document.getElementById("choose8").style.backgroundColor='white';	document.getElementById("reset").style.display='inline-block';	document.getElementById("turn").style.backgroundColor='darkgreen';	document.getElementById("turn").style.color='white';	document.getElementById("turn").innerHTML='&nbsp &nbsp &nbsp Player 1 wins &nbsp &nbsp &nbsp';	box1 = 'T';	box2 = 'T';	box3 = 'T';	box4 = 'T';	box5 = 'T';	box6 = 'T';	box7 = 'T';	box8 = 'T';	box9 = 'T';	}else if (box2=="✖️" &&box5=="✖️" &&box8=="✖️"){	document.getElementById("choose2").style.backgroundColor='white';	document.getElementById("choose5").style.backgroundColor='white';	document.getElementById("choose8").style.backgroundColor='white';	document.getElementById("reset").style.display='inline-block';	document.getElementById("turn").style.backgroundColor='darkgreen';	document.getElementById("turn").style.color='white';	document.getElementById("turn").innerHTML='&nbsp &nbsp &nbsp Player 2 wins &nbsp &nbsp &nbsp';	box1 = 'T';	box2 = 'T';	box3 = 'T';	box4 = 'T';	box5 = 'T';	box6 = 'T';	box7 = 'T';	box8 = 'T';	box9 = 'T';	}else if (box3=="✔️" &&box6=="✔️" &&box9=="✔️"){	document.getElementById("choose3").style.backgroundColor='white';	document.getElementById("choose6").style.backgroundColor='white';	document.getElementById("choose9").style.backgroundColor='white';	document.getElementById("reset").style.display='inline-block';	document.getElementById("turn").style.backgroundColor='darkgreen';	document.getElementById("turn").style.color='white';	document.getElementById("turn").innerHTML='&nbsp &nbsp &nbsp Player 1 wins &nbsp &nbsp &nbsp';	box1 = 'T';	box2 = 'T';	box3 = 'T';	box4 = 'T';	box5 = 'T';	box6 = 'T';	box7 = 'T';	box8 = 'T';	box9 = 'T';	}else if (box3=="✖️" &&box6=="✖️" &&box9=="✖️"){	document.getElementById("choose3").style.backgroundColor='white';	document.getElementById("choose6").style.backgroundColor='white';	document.getElementById("choose9").style.backgroundColor='white';	document.getElementById("reset").style.display='inline-block';	document.getElementById("turn").style.backgroundColor='darkgreen';	document.getElementById("turn").style.color='white';	document.getElementById("turn").innerHTML='&nbsp &nbsp &nbsp Player 2 wins &nbsp &nbsp &nbsp';	box1 = 'T';	box2 = 'T';	box3 = 'T';	box4 = 'T';	box5 = 'T';	box6 = 'T';	box7 = 'T';	box8 = 'T';	box9 = 'T';	}else if (box1=="✔️" &&box5=="✔️" &&box9=="✔️"){	document.getElementById("choose1").style.backgroundColor='white';	document.getElementById("choose5").style.backgroundColor='white';	document.getElementById("choose9").style.backgroundColor='white';	document.getElementById("reset").style.display='inline-block';	document.getElementById("turn").style.backgroundColor='darkgreen';	document.getElementById("turn").style.color='white';	document.getElementById("turn").innerHTML='&nbsp &nbsp &nbsp Player 1 wins &nbsp &nbsp &nbsp';	box1 = 'T';	box2 = 'T';	box3 = 'T';	box4 = 'T';	box5 = 'T';	box6 = 'T';	box7 = 'T';	box8 = 'T';	box9 = 'T';	}else if (box1=="✖️" &&box5=="✖️" &&box9=="✖️"){	document.getElementById("choose1").style.backgroundColor='white';	document.getElementById("choose5").style.backgroundColor='white';	document.getElementById("choose9").style.backgroundColor='white';	document.getElementById("reset").style.display='inline-block';	document.getElementById("turn").style.backgroundColor='darkgreen';	document.getElementById("turn").style.color='white';	document.getElementById("turn").innerHTML='&nbsp &nbsp &nbsp Player 2 wins &nbsp &nbsp &nbsp';	box1 = 'T';	box2 = 'T';	box3 = 'T';	box4 = 'T';	box5 = 'T';	box6 = 'T';	box7 = 'T';	box8 = 'T';	box9 = 'T';	}else if (box3=="✔️" &&box5=="✔️" &&box7=="✔️"){	document.getElementById("choose3").style.backgroundColor='white';	document.getElementById("choose5").style.backgroundColor='white';	document.getElementById("choose7").style.backgroundColor='white';	document.getElementById("reset").style.display='inline-block';	document.getElementById("turn").style.backgroundColor='darkgreen';	document.getElementById("turn").style.color='white';	document.getElementById("turn").innerHTML='&nbsp &nbsp &nbsp Player 1 wins &nbsp &nbsp &nbsp';	box1 = 'T';	box2 = 'T';	box3 = 'T';	box4 = 'T';	box5 = 'T';	box6 = 'T';	box7 = 'T';	box8 = 'T';	box9 = 'T';	}else if (box3=="✖️" &&box5=="✖️" &&box7=="✖️"){	document.getElementById("choose3").style.backgroundColor='white';	document.getElementById("choose5").style.backgroundColor='white';	document.getElementById("choose7").style.backgroundColor='white';	document.getElementById("reset").style.display='inline-block';	document.getElementById("turn").style.backgroundColor='darkgreen';	document.getElementById("turn").style.color='white';	document.getElementById("turn").innerHTML='&nbsp &nbsp &nbsp Player 2 wins &nbsp &nbsp &nbsp';	box1 = 'T';	box2 = 'T';	box3 = 'T';	box4 = 'T';	box5 = 'T';	box6 = 'T';	box7 = 'T';	box8 = 'T';	box9 = 'T';	}else if(box1!='M'&&box2!='M'&&box3!='M'&&box4!='M'&&box5!='M'&&box6!='M'&&box7!='M'&&box8!='M'&&box9!='M'&&box1!='T'){	document.getElementById("reset").style.display='inline-block';	document.getElementById("turn").innerHTML='&nbsp &nbsp &nbsp Match Draw &nbsp &nbsp &nbsp';	document.getElementById("turn").style.backgroundColor='darkgreen';	box1 = 'T';	box2 = 'T';	box3 = 'T';	box4 = 'T';	box5 = 'T';	box6 = 'T';	box7 = 'T';	box8 = 'T';	box9 = 'T';	document.getElementById("choose1").style.backgroundColor='white';	document.getElementById("choose2").style.backgroundColor='white';	document.getElementById("choose3").style.backgroundColor='white';	document.getElementById("choose4").style.backgroundColor='white';	document.getElementById("choose5").style.backgroundColor='white';	document.getElementById("choose6").style.backgroundColor='white';	document.getElementById("choose7").style.backgroundColor='white';	document.getElementById("choose8").style.backgroundColor='white';	document.getElementById("choose9").style.backgroundColor='white'; }}function reset(){	box1='M';	box2='M';	box3='M';	box4='M';	box5='M';	box6='M';	box7='M';	box8='M';	box9='M';	count=1;	document.getElementById("choose1").innerHTML="M";	document.getElementById("choose2").innerHTML="M";	document.getElementById("choose3").innerHTML="M";	document.getElementById("choose4").innerHTML="M";	document.getElementById("choose5").innerHTML="M";	document.getElementById("choose6").innerHTML="M";	document.getElementById("choose7").innerHTML="M";	document.getElementById("choose8").innerHTML="M";	document.getElementById("choose9").innerHTML="M";	document.getElementById("choose1").style.backgroundColor='lightgreen';	document.getElementById("choose2").style.backgroundColor='lightgreen';	document.getElementById("choose3").style.backgroundColor='lightgreen';	document.getElementById("choose4").style.backgroundColor='lightgreen';	document.getElementById("choose5").style.backgroundColor='lightgreen';	document.getElementById("choose6").style.backgroundColor='lightgreen';	document.getElementById("choose7").style.backgroundColor='lightgreen';	document.getElementById("choose8").style.backgroundColor='lightgreen';	document.getElementById("choose9").style.backgroundColor='lightgreen';	document.getElementById("choose1").style.color='lightgreen';	document.getElementById("choose2").style.color='lightgreen';	document.getElementById("choose3").style.color='lightgreen';	document.getElementById("choose4").style.color='lightgreen';	document.getElementById("choose5").style.color='lightgreen';	document.getElementById("choose6").style.color='lightgreen';	document.getElementById("choose7").style.color='lightgreen';	document.getElementById("choose8").style.color='lightgreen';	document.getElementById("choose9").style.color='lightgreen';	document.getElementById("reset").style.display='none';	document.getElementById("turn").style.backgroundColor='white';	document.getElementById("turn").innerHTML ="&nbsp &nbsp Player 1's turn &nbsp &nbsp";	document.getElementById("turn").style.color='gold';}
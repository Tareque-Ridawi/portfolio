function mergeTiles(){
if (C1==D1&&C1!=0) {
      d1.innerHTML =C1*2;
      c1.innerHTML =0;
      D1=C1*2;
      C1=0; 
      spawn++;
      score=+score+D1;
      document.getElementById("amount").innerHTML =+score;
      document.getElementById("addition").innerHTML ="+"+D1;
} 
if (C1==0&&B1==D1&&B1!=0) {
      d1.innerHTML =B1*2;
      b1.innerHTML =0;
      D1=B1*2;
      B1=0; 
      spawn++; 
      score=+score+D1;
      document.getElementById("amount").innerHTML =+score;
      document.getElementById("addition").innerHTML ="+"+D1;
} 
else if (B1==C1&&B1!=0) {
      c1.innerHTML =B1*2;
      b1.innerHTML =0;
      C1=B1*2;
      B1=0; 
      spawn++; 
      score=+score+C1;
      document.getElementById("amount").innerHTML =+score;
      document.getElementById("addition").innerHTML ="+"+C1;
} 
if (B1==0&&C1==0&&A1==D1&&A1!=0) {
      d1.innerHTML =A1*2;
      a1.innerHTML =0;
      D1=A1*2;
      A1=0; 
      spawn++; 
      score=+score+D1;
      document.getElementById("amount").innerHTML =+score;
      document.getElementById("addition").innerHTML ="+"+D1;
} 
else if (B1==0&&A1==C1&&A1!=0) {
      c1.innerHTML =A1*2;
      a1.innerHTML =0;
      C1=A1*2;
      A1=0; 
      spawn++; 
      score=+score+C1;
      document.getElementById("amount").innerHTML =+score;
      document.getElementById("addition").innerHTML ="+"+C1;
} 
else if (A1==B1&&A1!=0) {
      b1.innerHTML =A1*2;
      a1.innerHTML =0;
      B1=A1*2;
      A1=0; 
      spawn++; 
      score=+score+B1;
      document.getElementById("amount").innerHTML =+score;
      document.getElementById("addition").innerHTML ="+"+B1;
 } 
}

function moveTiles(){
	if (D1==0&&C1!=0) {
      d1.innerHTML =C1; 
      c1.innerHTML =0;
      D1=C1;
      C1=0; 
      spawn++; 
} 
if (C1==0&&D1==0&&B1!=0) {
      d1.innerHTML =B1; 
      b1.innerHTML =0;
      D1=B1;
      B1=0; 
      spawn++; 
} 
else if (C1==0&&B1!=0) {
      c1.innerHTML =B1; 
      b1.innerHTML =0;
      C1=B1;
      B1=0; 
      spawn++; 
} 
if (B1==0&&C1==0&&D1==0&&A1!=0) {
      d1.innerHTML =A1; 
      a1.innerHTML =0;
      D1=A1;
      A1=0; 
      spawn++; 
} 
else if (B1==0&&C1==0&&A1!=0) {
      c1.innerHTML =A1;
      a1.innerHTML =0;
      C1=A1;
      A1=0; 
      spawn++; 
} 
else if (B1==0&&A1!=0) {
      b1.innerHTML =A1;
      a1.innerHTML =0;
      B1=A1;
      A1=0; 
      spawn++; 
 }
}
	
	
	
	
	
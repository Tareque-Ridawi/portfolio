function mergeTiles(){
if (C1==D1&&C1!=0) {
    $(c1).css({zIndex:99,});
var mergeAnime=[$(c1).animate({left: h1,top:h2},200,).promise()];
$.when.apply($, mergeAnime).then(function() {
 	 d1.innerHTML =C1*2;
      colorbox();
      c1.style.opacity=0;
      merge1n();
});
function merge1n(){ 
      c1.style.zIndex=1;
      c1.innerHTML =0;
      colorbox();
      D1=C1*2;
      C1=0; 
      c1.style.left=g1;
      c1.style.top=g2;
      c1.style.opacity=1;
      spawn++;
      score=+score+D1;
      document.getElementById("amount").innerHTML =+score;
      document.getElementById("addition").innerHTML ="+"+D1;
  }
} 
if (C1==0&&B1==D1&&B1!=0) {
    $(b1).css({zIndex:99,});
	$(b1).animate({left: h1,top:h2},200,function(){$(this).after(merge1a());},);
function merge1a(){
 	 d1.innerHTML =B1*2;
      colorbox();
      b1.style.opacity=0;
      merge1b();
   }
function merge1b(){ 
      b1.style.zIndex=1;
      b1.innerHTML =0;
      colorbox();
      D1=B1*2;
      B1=0; 
      b1.style.left=f1;
      b1.style.top=f2;
      b1.style.opacity=1;
      spawn++;
      score=+score+D1;
      document.getElementById("amount").innerHTML =+score;
      document.getElementById("addition").innerHTML ="+"+D1;
  }
} 
else if (B1==C1&&B1!=0) {
    $(b1).css({zIndex:99,});
	$(b1).animate({left: g1,top:g2},200,function(){$(this).after(merge1a());},);
function merge1a(){
 	 c1.innerHTML =B1*2;
      colorbox();
      b1.style.opacity=0;
      merge1b();
   }
function merge1b(){ 
      b1.style.zIndex=1;
      b1.innerHTML =0;
      colorbox();
      C1=B1*2;
      B1=0; 
      b1.style.left=f1;
      b1.style.top=f2;
      b1.style.opacity=1;
      spawn++;
      score=+score+C1;
      document.getElementById("amount").innerHTML =+score;
      document.getElementById("addition").innerHTML ="+"+C1;
  }
} 
if (B1==0&&C1==0&&A1==D1&&A1!=0) {
    $(a1).css({zIndex:99,});
	$(a1).animate({left: h1,top:h2},200,function(){$(this).after(merge1a());},);
function merge1a(){
 	 d1.innerHTML =A1*2;
      colorbox();
      a1.style.opacity=0;
      merge1b();
   }
function merge1b(){ 
      a1.style.zIndex=1;
      a1.innerHTML =0;
      colorbox();
      D1=A1*2;
      A1=0; 
      a1.style.left=e1;
      a1.style.top=e2;
      a1.style.opacity=1;
      spawn++;
      score=+score+D1;
      document.getElementById("amount").innerHTML =+score;
      document.getElementById("addition").innerHTML ="+"+D1;
  }
} 
else if (B1==0&&A1==C1&&A1!=0) {
    $(a1).css({zIndex:99,});
	$(a1).animate({left: g1,top:g2},200,function(){$(this).after(merge1a());},);
function merge1a(){
 	 c1.innerHTML =A1*2;
      colorbox();
      a1.style.opacity=0;
      merge1b();
   }
function merge1b(){ 
      a1.style.zIndex=1;
      a1.innerHTML =0;
      colorbox();
      C1=A1*2;
      A1=0; 
      a1.style.left=e1;
      a1.style.top=e2;
      a1.style.opacity=1;
      spawn++;
      score=+score+C1;
      document.getElementById("amount").innerHTML =+score;
      document.getElementById("addition").innerHTML ="+"+C1;
  }
} 
else if (A1==B1&&A1!=0) {
    $(a1).css({zIndex:99,});
	$(a1).animate({left: f1,top:f2},200,function(){$(this).after(merge1a());},);
function merge1a(){
 	 b1.innerHTML =A1*2;
      colorbox();
      a1.style.opacity=0;
      merge1b();
   }
function merge1b(){ 
      a1.style.zIndex=1;
      a1.innerHTML =0;
      colorbox();
      B1=A1*2;
      A1=0; 
      a1.style.left=e1;
      a1.style.top=e2;
      a1.style.opacity=1;
      spawn++;
      score=+score+B1;
      document.getElementById("amount").innerHTML =+score;
      document.getElementById("addition").innerHTML ="+"+B1;
  }
 } 
}

function moveTiles(){
console.log("movetiles work");
if (D1==0&&C1!=0) {
	  baseo=c1;
	  targeto=d1;
	  varbaseo=C1;
	  vartargeto=D1;
	  xbase=g1;
	  ybase=g2;
	  xtarget=h1;
	  ytarget=h2;
      swipeMove();
} 
if (C1==0&&D1==0&&B1!=0) {
      baseo=b1;
	  targeto=d1;
	  varbaseo=B1;
	  vartargeto=D1;
	  xbase=f1;
	  ybase=f2;
	  xtarget=h1;
	  ytarget=h2;
      swipeMove();
} 
else if (C1==0&&B1!=0) {
      baseo=b1;
	  targeto=c1;
	  varbaseo=B1;
	  vartargeto=C1;
	  xbase=f1;
	  ybase=f2;
	  xtarget=g1;
	  ytarget=g2;
      swipeMove();
} 
if (B1==0&&C1==0&&D1==0&&A1!=0) {
      baseo=a1;
	  targeto=d1;
	  varbaseo=A1;
	  vartargeto=D1;
	  xbase=e1;
	  ybase=e2;
	  xtarget=h1;
	  ytarget=h2;
      swipeMove();
} 
else if (B1==0&&C1==0&&A1!=0) {
      baseo=a1;
	  targeto=c1;
	  varbaseo=A1;
	  vartargeto=C1;
	  xbase=e1;
	  ybase=e2;
	  xtarget=g1;
	  ytarget=g2;
      swipeMove(); 
} 
else if (B1==0&&A1!=0) {
      baseo=a1;
	  targeto=b1;
	  varbaseo=A1;
	  vartargeto=B1;
	  xbase=e1;
	  ybase=e2;
	  xtarget=f1;
	  ytarget=f2;
      swipeMove();
  }
}
//main merge engine
function swipeMerge(){
	$(animated).css({zIndex:99,});
	$(animated).animate({left: xdoubled,top:ydoubled},200,function(){$(this).after(merge1a());},);
function merge1a(){
 	 doubled.innerHTML =varanimated*2;
      colorbox();
      animated.style.opacity=0;
      merge1b();
   }
function merge1b(){ 
      animated.style.zIndex=1;
      animated.innerHTML =0;
      colorbox();
      vardoubled=varanimated*2;
      varanimated=0; 
      animated.style.left=xanimated;
      animated.style.top=yanimated;
      animated.style.opacity=1;
      spawn++;
      score=+score+vardoubled;
      document.getElementById("amount").innerHTML =+score;
      document.getElementById("addition").innerHTML ="+"+vardoubled;
  }
}
//Main move engine
function swipeMove(){
	console.log("off");
}
	
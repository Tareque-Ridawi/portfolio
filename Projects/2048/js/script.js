spawn=0;
window.setTimeout('closestartup()', 4100);
function closestartup(){
document.getElementById("startup").style.display="none";
document.getElementById("body").style.display="block";
}
window.onload = function(){printnumbers();dos();colorbox();};
function printnumbers(min,max){
 return Math.floor(Math.random() * (max - min + 1)) + min;
}
function dos(){
    l=printnumbers(1,16) ;
    p=printnumbers(1,16) ;
	document.getElementById("tile"+l).innerHTML ="2";
    document.getElementById("tile"+l).style.color='darkgreen';
    document.getElementById("tile"+p).innerHTML ="2";
    document.getElementById("tile"+p).style.color='darkgreen';
}
//dom for getting positions
lt1 = document.getElementById("tile1").getBoundingClientRect();
lt2 = document.getElementById("tile2").getBoundingClientRect();
lt3 = document.getElementById("tile3").getBoundingClientRect();
lt4 = document.getElementById("tile4").getBoundingClientRect();
lt5 = document.getElementById("tile5").getBoundingClientRect();
lt6 = document.getElementById("tile6").getBoundingClientRect();
lt7 = document.getElementById("tile7").getBoundingClientRect();
lt8 = document.getElementById("tile8").getBoundingClientRect();
lt9 = document.getElementById("tile9").getBoundingClientRect();
lt10= document.getElementById("tile10").getBoundingClientRect();
lt11= document.getElementById("tile11").getBoundingClientRect();
lt12= document.getElementById("tile12").getBoundingClientRect();
lt13= document.getElementById("tile13").getBoundingClientRect();
lt14= document.getElementById("tile14").getBoundingClientRect();
lt15= document.getElementById("tile15").getBoundingClientRect();
lt16= document.getElementById("tile16").getBoundingClientRect();


document.getElementById("boxcontainer").addEventListener("touchstart", sTouch, false);
document.getElementById("boxcontainer").addEventListener("touchmove", mTouch, false);
var initialX = null;
var initialY = null;
function sTouch(f) {
  initialX = f.touches[0].clientX;
  initialY = f.touches[0].clientY;
};
function mTouch(f) {
  if (initialX === null) {
    return;
  }
  if (initialY === null) {
    return;
  }
  var currentX = f.touches[0].clientX;
  var currentY = f.touches[0].clientY;
  var diffX = initialX - currentX;
  var diffY = initialY - currentY;
  score=document.getElementById("amount").innerHTML;
  tile1=document.getElementById("tile1").innerHTML;
  tile2=document.getElementById("tile2").innerHTML;
  tile3=document.getElementById("tile3").innerHTML;
  tile4=document.getElementById("tile4").innerHTML;
  tile5=document.getElementById("tile5").innerHTML;
  tile6=document.getElementById("tile6").innerHTML;
  tile7=document.getElementById("tile7").innerHTML;
  tile8=document.getElementById("tile8").innerHTML;
  tile9=document.getElementById("tile9").innerHTML;
  tile10=document.getElementById("tile10").innerHTML;
  tile11=document.getElementById("tile11").innerHTML;
  tile12=document.getElementById("tile12").innerHTML;
  tile13=document.getElementById("tile13").innerHTML;
  tile14=document.getElementById("tile14").innerHTML;
  tile15=document.getElementById("tile15").innerHTML;
  tile16=document.getElementById("tile16").innerHTML;
  
  if (Math.abs(diffX) > Math.abs(diffY)) {
if (diffX < 0) {
//right functions
A1=tile1;
B1=tile2;
C1=tile3;
D1=tile4;
a1=document.getElementById("tile1");
b1=document.getElementById("tile2");
c1=document.getElementById("tile3");
d1=document.getElementById("tile4");
e1=lt1.x+"px";
f1=lt2.x+"px";
g1=lt3.x+"px";
h1=lt4.x+"px";
e2=lt1.y+"px";
f2=lt2.y+"px";
g2=lt3.y+"px";
h2=lt4.y+"px";
console.log(g2);
console.log(g1);
mergeTiles();
moveTiles();
A1=tile5;
B1=tile6;
C1=tile7;
D1=tile8;
a1=document.getElementById("tile5");
b1=document.getElementById("tile6");
c1=document.getElementById("tile7");
d1=document.getElementById("tile8");
e1=lt5.x+"px";
f1=lt6.x+"px";
g1=lt7.x+"px";
h1=lt8.x+"px";
e2=lt5.y+"px";
f2=lt6.y+"px";
g2=lt7.y+"px";
h2=lt8.y+"px";
mergeTiles();
moveTiles();
A1=tile9;
B1=tile10;
C1=tile11;
D1=tile12;
a1=document.getElementById("tile9");
b1=document.getElementById("tile10");
c1=document.getElementById("tile11");
d1=document.getElementById("tile12");
e1=lt9.x+"px";
f1=lt10.x+"px";
g1=lt11.x+"px";
h1=lt12.x+"px";
e2=lt9.y+"px";
f2=lt10.y+"px";
g2=lt11.y+"px";
h2=lt12.y+"px";
mergeTiles();
moveTiles();
A1=tile13;
B1=tile14;
C1=tile15;
D1=tile16;
a1=document.getElementById("tile13");
b1=document.getElementById("tile14");
c1=document.getElementById("tile15");
d1=document.getElementById("tile16");
e1=lt13.x+"px";
f1=lt14.x+"px";
g1=lt15.x+"px";
h1=lt16.x+"px";
e2=lt13.y+"px";
f2=lt14.y+"px";
g2=lt15.y+"px";
h2=lt16.y+"px";
mergeTiles();
moveTiles();
spawn1();
}
    else if(diffX > 0){
//left functions
A1=tile4;
B1=tile3;
C1=tile2;
D1=tile1;
a1=document.getElementById("tile4");
b1=document.getElementById("tile3");
c1=document.getElementById("tile2");
d1=document.getElementById("tile1");
e1=lt4.x+"px";
f1=lt3.x+"px";
g1=lt2.x+"px";
h1=lt1.x+"px";
e2=lt4.y+"px";
f2=lt3.y+"px";
g2=lt2.y+"px";
h2=lt1.y+"px";
mergeTiles();
moveTiles();
A1=tile8;
B1=tile7;
C1=tile6;
D1=tile5;
a1=document.getElementById("tile8");
b1=document.getElementById("tile7");
c1=document.getElementById("tile6");
d1=document.getElementById("tile5");
e1=lt8.x+"px";
f1=lt7.x+"px";
g1=lt6.x+"px";
h1=lt5.x+"px";
e2=lt8.y+"px";
f2=lt7.y+"px";
g2=lt6.y+"px";
h2=lt5.y+"px";
mergeTiles();
moveTiles();
A1=tile12;
B1=tile11;
C1=tile10;
D1=tile9;
a1=document.getElementById("tile12");
b1=document.getElementById("tile11");
c1=document.getElementById("tile10");
d1=document.getElementById("tile9");
e1=lt12.x+"px";
f1=lt11.x+"px";
g1=lt10.x+"px";
h1=lt9.x+"px";
e2=lt12.y+"px";
f2=lt11.y+"px";
g2=lt10.y+"px";
h2=lt9.y+"px";
mergeTiles();
moveTiles();
A1=tile16;
B1=tile15;
C1=tile14;
D1=tile13;
a1=document.getElementById("tile16");
b1=document.getElementById("tile15");
c1=document.getElementById("tile14");
d1=document.getElementById("tile13");
e1=lt16.x+"px";
f1=lt15.x+"px";
g1=lt14.x+"px";
h1=lt13.x+"px";
e2=lt16.y+"px";
f2=lt15.y+"px";
g2=lt14.y+"px";
h2=lt13.y+"px";
mergeTiles();
moveTiles();
spawn1();
    }  
  } else {

    if (diffY > 0) {
//up functions
A1=tile13;
B1=tile9;
C1=tile5;
D1=tile1;
a1=document.getElementById("tile13");
b1=document.getElementById("tile9");
c1=document.getElementById("tile5");
d1=document.getElementById("tile1");
e1=lt13.x+"px";
f1=lt8.x+"px";
g1=lt5.x+"px";
h1=lt1.x+"px";
e2=lt13.y+"px";
f2=lt8.y+"px";
g2=lt5.y+"px";
h2=lt1.y+"px";
mergeTiles();
moveTiles();
A1=tile14;
B1=tile10;
C1=tile6;
D1=tile2;
a1=document.getElementById("tile14");
b1=document.getElementById("tile10");
c1=document.getElementById("tile6");
d1=document.getElementById("tile2");
e1=lt14.x+"px";
f1=lt10.x+"px";
g1=lt6.x+"px";
h1=lt2.x+"px";
e2=lt14.y+"px";
f2=lt10.y+"px";
g2=lt6.y+"px";
h2=lt2.y+"px";
mergeTiles();
moveTiles();
A1=tile15;
B1=tile11;
C1=tile7;
D1=tile3;
a1=document.getElementById("tile15");
b1=document.getElementById("tile11");
c1=document.getElementById("tile7");
d1=document.getElementById("tile3");
e1=lt15.x+"px";
f1=lt11.x+"px";
g1=lt7.x+"px";
h1=lt3.x+"px";
e2=lt15.y+"px";
f2=lt11.y+"px";
g2=lt7.y+"px";
h2=lt3.y+"px";
mergeTiles();
moveTiles();
A1=tile16;
B1=tile12;
C1=tile8;
D1=tile4;
a1=document.getElementById("tile16");
b1=document.getElementById("tile12");
c1=document.getElementById("tile8");
d1=document.getElementById("tile4");
e1=lt16.x+"px";
f1=lt12.x+"px";
g1=lt8.x+"px";
h1=lt4.x+"px";
e2=lt16.y+"px";
f2=lt12.y+"px";
g2=lt8.y+"px";
h2=lt4.y+"px";
mergeTiles();
moveTiles();
spawn1();

    } 
    else if(diffY < 0) {
//down functions
A1=tile1;
B1=tile5;
C1=tile9;
D1=tile13;
a1=document.getElementById("tile1");
b1=document.getElementById("tile5");
c1=document.getElementById("tile9");
d1=document.getElementById("tile13");
e1=lt1.x+"px";
f1=lt5.x+"px";
g1=lt9.x+"px";
h1=lt13.x+"px";
e2=lt1.y+"px";
f2=lt5.y+"px";
g2=lt9.y+"px";
h2=lt13.y+"px";
mergeTiles();
moveTiles();
A1=tile2;
B1=tile6;
C1=tile10;
D1=tile14;
a1=document.getElementById("tile2");
b1=document.getElementById("tile6");
c1=document.getElementById("tile10");
d1=document.getElementById("tile14");
e1=lt2.x+"px";
f1=lt6.x+"px";
g1=lt10.x+"px";
h1=lt14.x+"px";
e2=lt2.y+"px";
f2=lt6.y+"px";
g2=lt10.y+"px";
h2=lt14.y+"px";
mergeTiles();
moveTiles();
A1=tile3;
B1=tile7;
C1=tile11;
D1=tile15;
a1=document.getElementById("tile3");
b1=document.getElementById("tile7");
c1=document.getElementById("tile11");
d1=document.getElementById("tile15");
e1=lt3.x+"px";
f1=lt7.x+"px";
g1=lt11.x+"px";
h1=lt15.x+"px";
e2=lt3.y+"px";
f2=lt7.y+"px";
g2=lt11.y+"px";
h2=lt15.y+"px";
mergeTiles();
moveTiles();
A1=tile4;
B1=tile8;
C1=tile12;
D1=tile16;
a1=document.getElementById("tile4");
b1=document.getElementById("tile8");
c1=document.getElementById("tile12");
d1=document.getElementById("tile16");
e1=lt4.x+"px";
f1=lt8.x+"px";
g1=lt12.x+"px";
h1=lt16.x+"px";
e2=lt4.y+"px";
f2=lt8.y+"px";
g2=lt12.y+"px";
h2=lt16.y+"px";
mergeTiles();
moveTiles();
spawn1();
    }  
  }

colorbox();
gameover();
  initialX = null;
  initialY = null;
  f.preventDefault();
};
document.getElementById("boxcontainer").addEventListener('touchmove', function(x) {
        x.preventDefault();
}, false);


document.addEventListener('keydown', function(event) {
    switch(event.key) {
        case "ArrowRight":
            // Trigger right swipe functions
            handleRightSwipe();
            break;
        case "ArrowLeft":
            // Trigger left swipe functions
            handleLeftSwipe();
            break;
        case "ArrowUp":
            // Trigger up swipe functions
            handleUpSwipe();
            break;
        case "ArrowDown":
            // Trigger down swipe functions
            handleDownSwipe();
            break;
    }
});

function handleRightSwipe() {
    // Right swipe logic (existing right swipe logic)
    A1 = tile1;
    B1 = tile2;
    C1 = tile3;
    D1 = tile4;
    a1 = document.getElementById("tile1");
    b1 = document.getElementById("tile2");
    c1 = document.getElementById("tile3");
    d1 = document.getElementById("tile4");
    e1 = lt1.x + "px";
    f1 = lt2.x + "px";
    g1 = lt3.x + "px";
    h1 = lt4.x + "px";
    e2 = lt1.y + "px";
    f2 = lt2.y + "px";
    g2 = lt3.y + "px";
    h2 = lt4.y + "px";
    mergeTiles();
    moveTiles();
    spawn1();
}

function handleLeftSwipe() {
    // Left swipe logic (existing left swipe logic)
    A1 = tile4;
    B1 = tile3;
    C1 = tile2;
    D1 = tile1;
    a1 = document.getElementById("tile4");
    b1 = document.getElementById("tile3");
    c1 = document.getElementById("tile2");
    d1 = document.getElementById("tile1");
    e1 = lt4.x + "px";
    f1 = lt3.x + "px";
    g1 = lt2.x + "px";
    h1 = lt1.x + "px";
    e2 = lt4.y + "px";
    f2 = lt3.y + "px";
    g2 = lt2.y + "px";
    h2 = lt1.y + "px";
    mergeTiles();
    moveTiles();
    spawn1();
}

function handleUpSwipe() {
    // Up swipe logic (existing up swipe logic)
    A1 = tile13;
    B1 = tile9;
    C1 = tile5;
    D1 = tile1;
    a1 = document.getElementById("tile13");
    b1 = document.getElementById("tile9");
    c1 = document.getElementById("tile5");
    d1 = document.getElementById("tile1");
    e1 = lt13.x + "px";
    f1 = lt8.x + "px";
    g1 = lt5.x + "px";
    h1 = lt1.x + "px";
    e2 = lt13.y + "px";
    f2 = lt8.y + "px";
    g2 = lt5.y + "px";
    h2 = lt1.y + "px";
    mergeTiles();
    moveTiles();
    spawn1();
}

function handleDownSwipe() {
    // Down swipe logic (same as the touchmove down swipe logic)
    A1 = tile1;
    B1 = tile5;
    C1 = tile9;
    D1 = tile13;
    a1 = document.getElementById("tile1");
    b1 = document.getElementById("tile5");
    c1 = document.getElementById("tile9");
    d1 = document.getElementById("tile13");
    e1 = lt1.x + "px";
    f1 = lt5.x + "px";
    g1 = lt9.x + "px";
    h1 = lt13.x + "px";
    e2 = lt1.y + "px";
    f2 = lt5.y + "px";
    g2 = lt9.y + "px";
    h2 = lt13.y + "px";
    mergeTiles();
    moveTiles();

    A1 = tile2;
    B1 = tile6;
    C1 = tile10;
    D1 = tile14;
    a1 = document.getElementById("tile2");
    b1 = document.getElementById("tile6");
    c1 = document.getElementById("tile10");
    d1 = document.getElementById("tile14");
    e1 = lt2.x + "px";
    f1 = lt6.x + "px";
    g1 = lt10.x + "px";
    h1 = lt14.x + "px";
    e2 = lt2.y + "px";
    f2 = lt6.y + "px";
    g2 = lt10.y + "px";
    h2 = lt14.y + "px";
    mergeTiles();
    moveTiles();

    A1 = tile3;
    B1 = tile7;
    C1 = tile11;
    D1 = tile15;
    a1 = document.getElementById("tile3");
    b1 = document.getElementById("tile7");
    c1 = document.getElementById("tile11");
    d1 = document.getElementById("tile15");
    e1 = lt3.x + "px";
    f1 = lt7.x + "px";
    g1 = lt11.x + "px";
    h1 = lt15.x + "px";
    e2 = lt3.y + "px";
    f2 = lt7.y + "px";
    g2 = lt11.y + "px";
    h2 = lt15.y + "px";
    mergeTiles();
    moveTiles();

    A1 = tile4;
    B1 = tile8;
    C1 = tile12;
    D1 = tile16;
    a1 = document.getElementById("tile4");
    b1 = document.getElementById("tile8");
    c1 = document.getElementById("tile12");
    d1 = document.getElementById("tile16");
    e1 = lt4.x + "px";
    f1 = lt8.x + "px";
    g1 = lt12.x + "px";
    h1 = lt16.x + "px";
    e2 = lt4.y + "px";
    f2 = lt8.y + "px";
    g2 = lt12.y + "px";
    h2 = lt16.y + "px";
    mergeTiles();
    moveTiles();

    spawn1();
}





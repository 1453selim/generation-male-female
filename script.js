//Generation	Male	Female
/* -3	great grandfather	great grandmother
-2	grandfather	grandmother
-1	father	mother
0	me!	me!
1	son	daughter
2	grandson	granddaughter
3	great grandson	great granddaughter */


var x;
var y;

function generation(x, y) {
	if (x==0 && y==0){
    console.log("me")
  }else if (x==1 && y=="m"){
    console.log("son")
  }else	if (x==1 && y=="f"){
    console.log("daughter")
  }else	if (x==2 && y=="m"){
    console.log("grandson")
  }else	if (x==2 && y=="f"){
    console.log("granddaughter")
  }else	if (x==3 && y=="m"){
    console.log("great grandson")
  }else	if (x==3 && y=="f"){
    console.log("great granddaughter")
  }else	if (x==-1 && y=="m"){
    console.log("father")
  }else if (x==-1 && y=="f"){
    console.log("mother")
  }else if (x==-2 && y=="m"){
    console.log("grandfather")
  }else if (x==-2 && y=="f"){
    console.log("grandmother")
  }else if (x==-3 && y=="m"){
   console.log("great grandfather")
  }else if (x==-3 && y=="f"){
    console.log("great grandmother")
  }else {
    console.log("try again")
  }
}
generation(-1,"m")
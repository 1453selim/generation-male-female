//Generation	Male	Female
/* -3	great grandfather	great grandmother
-2	grandfather	grandmother
-1	father	mother
0	me!	me!
1	son	daughter
2	grandson	granddaughter
3	great grandson	great granddaughter */




  function generation(x, y) {
	if (x==0 && y==0){
    return "me"
  } 	if (x==1 && y=="m"){
    return "son"
  }	if (x==1 && y=="f"){
    return "daughter"
  }	if (x==2 && y=="m"){
    return "grandson"
  }	if (x==2 && y=="f"){
    return "granddaughter"
  }	if (x==3 && y=="m"){
    return "great grandson"
  }	if (x==3 && y=="f"){
    return "	great granddaughter"
  }	if (x==-1 && y=="m"){
    return "father"
  }if (x==-1 && y=="f"){
    return "mother"
  }if (x==-2 && y=="m"){
    return "grandfather"
  }if (x==-2 && y=="f"){
    return "grandmother"
  }if (x==-3 && y=="m"){
    return "great grandfather"
  }if (x==-3 && y=="f"){
    return "great grandmother"
  } else {
    console.log("bilgi yok")
  }
}
console.log(generation(-2,"f"))
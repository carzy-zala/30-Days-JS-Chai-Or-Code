const a = 12,
  b = 15,
  c = 13;

if(a<b){
    if(b<c){
        console.log(`${c} is greater`);
    }else{
        console.log(`${b} is greater`);
    }
}else{
    if(a<c){
        console.log(`${c} is greater`);
    }else{
        console.log(`${a} is greater`);
    }
}
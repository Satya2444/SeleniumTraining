function addnumbers(...n){
  res = 0;
  for(const i of n){
    res = res+i;
  }
  console.log(res);
}

addnumbers(1,2,3,4,5,6);

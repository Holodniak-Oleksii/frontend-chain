function setPointRadius (result){
  for(let i = 0; i <= 1000; i++){
    if(i === 999){
      result[i] = 6;
    }
    else{
      result[i]=0;
    }
  }
  return  result
}
export default setPointRadius


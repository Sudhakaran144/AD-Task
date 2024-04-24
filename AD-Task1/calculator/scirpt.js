let cal =  '';
  
function calculation(value) {
    cal += value; 
    document.querySelector('.res').innerHTML=`${cal}`;
}
function deletevalue(){
     
    document.querySelector('.res').innerHTML=`${cal.toString().slice(0,-1)}`;
}
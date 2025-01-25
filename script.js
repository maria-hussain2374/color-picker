let colorpicker=document.getElementById("colorpicker");
 let btn=document.getElementById("btn");


 colorpicker.onblur=()=>{
     btn.style.backgroundColor=colorpicker.value;
}


function nombre(txtnom){
    alert(txtnom)
    document.getElementById('nombre').innerHTML="nombre completo:"+""+txtnom
 }
 
 function nacimiento(txtfecha) {
     var hoy = new Date();
     var cumpleanos = new Date(txtfecha);
     var edad = hoy.getFullYear() - cumpleanos.getFullYear();
     var m = hoy.getMonth() - cumpleanos.getMonth();
 
     if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
         edad--;
     }
     if(edad>= 18){
         alert("Eres mayor de edad");
     }else{
         alert("Eres menor de edad");
     }
 
 
     alert(edad)
     document.getElementById('edad').innerHTML="fecha de nacimiento :"+"/"+txtfecha+"/"+"tu edad es "+edad
 }
 
 function bautiso(txtfechabautiso) {
     var hoy = new Date();
     var bautiso = new Date(txtfechabautiso);
     var edad = hoy.getFullYear() - bautiso.getFullYear();
     var m = hoy.getMonth() - bautiso.getMonth();
 
     if (m < 0 || (m === 0 && hoy.getDate() < bautiso.getDate())) 
         edad--;
   
     alert(edad)
     document.getElementById('bautiso').innerHTML="bautiso:"+"/"+txtfechabautiso+"/"+"han padado  "+edad
 }
 
 function confirmacion(txtfechaconfirmacion) {
     var hoy = new Date();
     var confirmacion = new Date(txtfechaconfirmacion);
     var edad = hoy.getFullYear() - confirmacion.getFullYear();
     var m = hoy.getMonth() - confirmacion.getMonth();
 
     if (m < 0 || (m === 0 && hoy.getDate() < confirmacion.getDate())) 
         edad--;
   
     alert(edad)
     document.getElementById('confirmacion').innerHTML="confirmacion:"+"/"+txtfechaconfirmacion+"/"+"han padado  "+edad
 }
 function matrimonio(txtfechamatrimonio) {
     var hoy = new Date();
     var matrimonio= new Date(txtfechamatrimonio);
     var edad = hoy.getFullYear() - matrimonio.getFullYear();
     var m = hoy.getMonth() - matrimonio.getMonth();
 
     if (m < 0 || (m === 0 && hoy.getDate() < matrimonio.getDate())) 
         edad--;
   
     alert(edad)
     document.getElementById('matrimonio').innerHTML="matrimonio:"+"/"+txtfechamatrimonio+"/"+"han padado  "+edad
 }
 
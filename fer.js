function dia(txtdia){
    
    alert(txtdia);

switch(txtdia){    

   case("1"):document.getElementById("pdia").innerHTML="lunes";     
   break;    

   case("2"):document.getElementById("pdia").innerHTML="martes";
   break;

   case("3"):document.getElementById("pdia").innerHTML="miercoles";
   break;

   case("4"):document.getElementById("pdia").innerHTML="jueves";
   break;

   case("5"):document.getElementById("pdia").innerHTML="viernes";
   break;

   case("6"):document.getElementById("pdia").innerHTML="sabado";
   break;

   case("7"):document.getElementById("pdia").innerHTML="domingo";
   break;

  default:
   document.getElementById("pdia").innerHTML="erro ingrese otro numero"
   append("pdia")
   break;
}
}
// function vect(){
// var vector=["robinson","truque","valencia"]
// var nombre=document.getElementById("txtnombre").value;
// var apellido=document.getElementById("txtapellido").value;
// var apellido2=document.getElementById("txtapellido2").value;
// alert(nombre+apellido+apellido2)
// alert(vector)
// nombre_completo=document.getElementById("pdias").innerHTML=vector
// for(i=0;i<=vector.length;i++){
//  alert(vector[i])
// }
// }

function aste(txtaste){
// // var n=parseInt(prompt("ingrese un n"));
var resultado="*";


// for(var i=0; i<txtaste; i++){
//     for(var k = i; k < i; ++k){
//        resultado=(" ");
//     }
// for(var j=0; j<=i*2-1; j++){
//     resultado += "*";
//     resultado=("<br>");
// }
// //////
for(var i = 0; i < txtaste; ++i){
    for(var k = i; k < i; ++k){
        document.write(" ");
    }
for(var j = 0; j < i*3-1; ++j){
    document.write("*");
}
    document.write("<br/>")
}


document.getElementById('p_as').innerHTML=document.write;
alert(txtaste)
}

function vect(){
 var vector=["robinson"] 
alert(vector);
alert(vector.length);

console.log();
vector.push('truque')
alert(vector);
alert(vector.length);


vector.push('valencia')
alert(vector);
alert(vector.length);
nombre_completo=document.getElementById("pdias").innerHTML=vector
}
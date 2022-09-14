
var nombre="<marquee>cristian</marquee>";
console.log(nombre + ' estoy en la consola');
//alert('estoy en la web! ' + nombre);
console.log(nombre, ' estoy despues de alert');
//document.querySelector("#text").innerHTML= nombre;
//document.getElementById("otro").innerHTML = nombre;

let a = 50;
let b = 20;
let c = a+b;
console.log(c);

if(!(c==0)){
  if(c>0){
    console.log('a es mayor');
  }else{
    console.log('b es mayor');
  }
}

//1)determinar si un numero es multiplo de 7
//2) determinar si un numero es multiplo de 5
document.getElementById("btn").addEventListener("click", comprobar);

function comprobar(){
  let numero = document.getElementById("number").value;
  let resultado= document.getElementById("resultado");
  let mostrar = document.createElement("p");

  console.log(numero);
  if(numero%7==0 && numero%5==0){
    resultado.textContent="es divisible por 7 y 5";
    numero.appendChild(mostrar);
  }
  if(numero%7==0){
    resultado.textContent="es divisible por 7";
    numero.appendChild(mostrar);
  }
  if(numero%5==0){
    resultado.textContent="es divisible por 5";
    numero.appendChild(mostrar);
  }else{
    resultado.textContent="no divisible ni por 5 ni 7";
    numero.appendChild(mostrar);
  }
}
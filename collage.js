let i = 1;
let button = document.querySelector('#button').addEventListener('click', function(){
	if(!i){
		document.getElementById('sombra').style.background = 'transparent';       
		document.getElementById('readMore').style.display = 'inline';
		document.getElementById('button').innerHTML = 'Leer Menos';
		i=1;
	}
	else{
		document.getElementById('sombra').style.background = 'linear-gradient(to top, #000000, transparent)';
		document.getElementById('readMore').style.display = 'none';
		document.getElementById('button').innerHTML='Leer Mas';
		i=0;
   }
})
document.addEventListener("mousemove", parallax);
function parallax(e){
 this.querySelectorAll(`.layer`).forEach(layer =>{
   const speed = layer.getAttribute(`data-speed`)
   const x = (window.innerWidth - e.pageX * speed)/100
   const y = (window.innerHeight - e.pageY * speed)/100
   layer.style.transform = `translateX(${x}px) translateY(${y}px)`
 }
 )}











 
document.addEventListener("DOMContentLoaded",function(){
let imagenes =[
	{img: "img/collage/ballena.jpg"},
	{img: "img/collage/ciudad collage.jpg"},	
	{img: "img/collage/collague analogo.jpg"},	
	{img: "img/collage/big whale .jpg"},
	{img: "img/collage/Collague Juli.jpg"},
	{img: "img/collage/DAMN.jpg"},
	{img: "img/collage/Diegote.jpg"},
	{img: "img/collage/elephant.jpg"},
	{img: "img/collage/mask guerra.jpg"},
	{img: "img/collage/segui la flecha.jpg"},
	{img: "img/collage/toter collage.jpg"},
	{img: "img/collage/tripy fly.jpg"},
	{img: "img/collage/viajando por el espacio.jpg"},
]
let contador = 0
const contenedor = document.querySelector(".slideshow")
const overlay = document.querySelector(".overlay")
const galeria_imagenes = document.querySelectorAll(".galeria img")
const img_slideshow = document.querySelector(".slideshow img")

contenedor.addEventListener("click", function(event){
	let atras = contenedor.querySelector(".atras"),
	    adelante = contenedor.querySelector(".adelante"),
		img = contenedor.querySelector("img"),
		tgt = event.target
	if (tgt==atras){
		if(contador>0){
			img.src = imagenes [contador - 1].img
			contador--
		}else{
			img.src=imagenes[imagenes.length-1].img
			contador=imagenes.length -1
		}
	} else if (tgt == adelante){
		if (contador < imagenes.length-1){
			img.src = imagenes [contador +1].img
			contador++
		} else {
			img.src=imagenes[0].img
			contador=0
		}
	}
})


 Array.from(galeria_imagenes).forEach(img=>{
	 img.addEventListener("click",event=>{
		 const imagen_seleccionada= +event.target.dataset.imgMostrar
		 img_slideshow.src=imagenes[imagen_seleccionada].img
		 contador= imagen_seleccionada
		 overlay.style.opacity=1
		 overlay.style.visibility="visible"
	 })
 })
 document.querySelector(".btn_cerrar").addEventListener("click", ()=>{
	 overlay.style.opacity=0
	 overlay.style.visibility="hidden"
 })
})
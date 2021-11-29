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


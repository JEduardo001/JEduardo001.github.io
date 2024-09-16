var img = new Image();
img.src = 'esfera.jpg';  
class Player {
    myCanvas = document.getElementById("myCanvas");
    ctx = myCanvas.getContext("2d");
   

    constructor(x,y,largo,alto,vida,direccion,velocidad,puntos,escudo) {
        this.x = x
        this.y = y
        this.largo = largo
        this.alto = alto
        this.vida = vida
        this.direccion = direccion
        this.velocidad = velocidad
        this.puntos = puntos
        this.escudo = escudo
       

    }
   
    pintarJugador(){
        ctx.fillStyle = "yellow";
        ctx.drawImage(img,jugador.x,jugador.y,jugador.largo,jugador.alto)
       
    }
    moverJugador(){

        if(this.vida>0){
            ctx.fillStyle = "Black";
            ctx.fillRect(jugador.x,jugador.y,jugador.largo,jugador.alto)
            
           switch(jugador.direccion){
            case 0:
                jugador.y-=jugador.velocidad;
                if(jugador.y<-50){
                    jugador.y=950
                }
            break;
            case 1:
               jugador.y+=jugador.velocidad;
               if(jugador.y>950){
                jugador.y=-50
               }
    
            break;
            case 2:
                jugador.x+=jugador.velocidad;
                if(jugador.x>1750){
                    jugador.x=-50
                }
    
            break;
            case 3:
                jugador.x-=jugador.velocidad;
                if(jugador.x<-50){
                    jugador.x=1750
                }
    
            break;
           }
        }
    }
}
  
  window.Player = Player;
  
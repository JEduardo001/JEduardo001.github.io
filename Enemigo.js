
var posicionGeneracion
var poscicionX
var imgEnemigo = new Image();
imgEnemigo.src = 'Enemigo.png';  

class Enemigo {
    myCanvas = document.getElementById("myCanvas");
    ctx = myCanvas.getContext("2d");


    constructor(x,y,largo,alto,dano,velocidad,vida,direccion) {
        this.x = x
        this.y = y
        this.largo = largo
        this.alto = alto
        this.dano = dano
        this.velocidad = velocidad
        this.vida = vida
        this.direccion=direccion
    }

  
  
   
    mover(jugadorX,jugadorY){

        //derecha arriba
        if(this.x<jugadorX && this.y>jugadorY){
            this.x+=this.velocidad
            this.y-=this.velocidad
        }
        //izquierda arriba
        if(this.x>jugadorX && this.y>jugadorY){
            this.x-=this.velocidad
            this.y-=this.velocidad
        }
         //derecha abajo
         if(this.x<jugadorX && this.y<jugadorY){
            this.x+=this.velocidad
            this.y+=this.velocidad
        }
          //izquierda abajo
        if(this.x>jugadorX && this.y<jugadorY){
            this.x-=this.velocidad
            this.y+=this.velocidad
        }
        
        if(this.x>jugadorX){
            this.x-=this.velocidad
        }else{
            this.x+=this.velocidad

        }
        if(this.y>jugadorY){
            this.y-=this.velocidad
        }else{
            this.y+=this.velocidad

        }
       /* switch(this.direccion){
            case 0:
                if(this.y-this.velocidad>0){
                    this.y-=this.velocidad;
                }
            break;
            case 1:
                if(this.y+this.velocidad<850){
                    this.y+=this.velocidad
                };
    
            break;
            case 2:
                if(this.x+this.velocidad<1850){
                    this.x+=this.velocidad
                };
    
            break;
            case 3:
                
                if(this.x-this.velocidad>50){
                    this.x-=this.velocidad
                }
    
            break;
           }*/
    }
   /* genNuevaDireccion(){
        var num = Math.floor(Math.random()*10)
        if(num==0){
            this.direccion=Math.floor(Math.random()*5)
        }
    }*/
    pintar(){
        ctx.fillStyle = "White";
        ctx.drawImage(imgEnemigo,this.x,this.y,this.largo,this.alto)
       
    }
    validarChoqueConJugador(j){
        if(this.x+this.largo/2>=j.x && this.x+this.largo/2<=j.x+j.largo && this.y+this.alto/2>=j.y && this.y+this.alto/2<=j.y+j.alto){
            if(j.escudo.activo && j.escudo.vida>0){
                if(j.escudo.vida-1>=0){
                    j.escudo.vida--        
                } 
            }else{
                if(j.vida-1>=0){
                    j.vida--
                }
            }  
        }
    }
    generarNuevo(){
        switch (genRandom(3)){
            case 0:
                this.x = genRandom(1700)
                this.y = -50
            break;
            case 1:
                this.x = 1750
                this.y = genRandom(900)
            break;
            case 2:
                this.x = -50
                this.y = genRandom(900)
            break;
        }
        this.vida=5
    }
}


window.Enemigo = Enemigo;
  

var color1=255;
var color2=255;
var color3= 120;
var subirColor1=false

class Escudo{
    myCanvas = document.getElementById("myCanvas");
    ctx = myCanvas.getContext("2d");

    constructor(x,y,largo,alto,vida,activo) {
        this.x = x
        this.y = y
        this.largo = largo
        this.alto = alto
        this.vida = vida
        this.activo = activo


    }

    Pintar(jugador){

        if(jugador.escudo.vida>0){
            ctx.beginPath();
            ctx.strokeStyle = "rgb("+color1+", "+color2+", "+color3+",100)";
            ctx.lineWidth = 4
            ctx.arc(jugador.x+25, jugador.y+15, 200, 0, 2 * Math.PI);
            ctx.stroke();
    
            if(subirColor1){
                color1++
                if(color1>=255){
                    subirColor1=false
                    color3 = Math.floor(Math.random()*200+50)
                }else{
                    color2=Math.floor(Math.random()*200+50)
                }
            }else{
                color1--
                if(color1-1<50){
                    subirColor1=true
                }else{
                    color2=Math.floor(Math.random()*200+50)
                }
            }
        }
    }
      


}


window.Escudo = Escudo;

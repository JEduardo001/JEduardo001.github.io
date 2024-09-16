


particulasLazer = [];
var largo=20;
var alto=20;
var color1=255;
var color2=255;
var color3;
var subirColor1=false

for (let i = 0; i <5; i++) {
    particulasLazer[i] = [];  
    particulasLazer[i][5] = true;  
}



class Arma {
    myCanvas = document.getElementById("myCanvas");
    ctx = myCanvas.getContext("2d");

    constructor(x,y,largo,alto,dano,disparar) {
        this.x = x
        this.y = y
        this.largo = largo
        this.alto = alto
        this.dano = dano
        this.disparar = disparar

    }

  
  
   
    pintarLazer(jugadorX,jugadorY,mouseX,mouseY){
           
       if(arma.disparar){
        ctx.beginPath();
        ctx.lineWidth = 5
        ctx.strokeStyle = "rgb("+color1+", "+color2+", 0,100)";
        ctx.moveTo(mouseX,mouseY);
        ctx.lineTo(jugadorX, jugadorY);
        ctx.stroke();
        
        if(subirColor1){
            color1++
            if(color1>=255){
                subirColor1=false
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
       
        moverParticulasLazer(mouseX,mouseY)
    
        ctx.fillStyle = "rgb("+color1+", "+color2+", 0,100)";
        ctx.fillRect(mouseX-20,mouseY-20,largo,alto)
        largo-=5;
        alto-=5;
        if(largo<0){
            largo=30
            alto=30
        }
        
        }
    }
}



function moverParticulasLazer(mouseX,mouseY){
    //x,y,l,a,direccion,disponibilidad,distancia
   for(var f=0;f<5;f++){
    if(particulasLazer[f][5]){
        particulasLazer[f][0]=mouseX;
        particulasLazer[f][1]=mouseY;
        particulasLazer[f][2]=10;
        particulasLazer[f][3]=10;
        particulasLazer[f][4]=Math.floor(Math.random()*4);
        particulasLazer[f][5]=false;
        particulasLazer[f][6]=10;
       


       
    }else{
        switch(particulasLazer[f][4]){
            case 0:
                particulasLazer[f][1]-=1

               
            break;
            case 1:
                particulasLazer[f][1]+=1
    
            break;
            case 2:
                particulasLazer[f][0]+=1
    
            break;
            case 3:
                particulasLazer[f][0]-=1
    
            break;
        }
        particulasLazer[f][6]-=2

        if(particulasLazer[f][6]<0){
            particulasLazer[f][5]=true
        }else{
            ctx.fillStyle = "red";
            ctx.fillRect( particulasLazer[f][0], particulasLazer[f][1], particulasLazer[f][2], particulasLazer[f][3])
        }

       

    }
   }
}

window.Arma = Arma;
  
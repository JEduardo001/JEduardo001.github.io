class Particulas {
    myCanvas = document.getElementById("myCanvas");
    ctx = myCanvas.getContext("2d");

    constructor(x,y,largo,alto,velocidad,direccion,disponible,tipoParticula) {
        this.x = 
        this.y = y
        this.largo = largo
        this.alto = alto
        this.velocidad = velocidad
        this.direccion = direccion
        this.disponible = disponible
        this.tipoParticula = tipoParticula


    }

  
    moverParticula(){
        switch(this.direccion){
            case 0:
               
                this.y-=this.velocidad;
                
            break;
            case 1:
                
                this.y+=this.velocidad
                
    
            break;
            case 2:
               
                this.x+=this.velocidad
                
    
            break;
            case 3:
                
             
                this.x-=this.velocidad
                
    
            break;
           }
           if(this.x<0 || this.x>1700 || this.y<0 || this.y>900){
             this.disponible=true
             if(Math.floor(Math.random()*10)==0 && this.tipoParticula==1){
                var direccion = Math.floor(Math.random()*2)
                this.x=Math.floor(Math.random()*1750)
                this.direccion=direccion
                if(direccion==0){
                    this.y=950
                }else{
                    this.y=0
                }
            }  
           }

   
    }
    generar(mouseX,mouseY){
        if(this.disponible){
            this.x=mouseX
            this.y=mouseY
            this.direccion=Math.floor(Math.random()*4)
            this.disponible=false

        }
    }
  
}
  
  window.Particulas = Particulas;
  
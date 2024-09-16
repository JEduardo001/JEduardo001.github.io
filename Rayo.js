class Rayo {

    constructor(inicioX,inicioY,finX,finY,grosor,activo) {
       this.inicioX = inicioX,
       this.inicioY = inicioY,
       this.finX = finX,
       this.finY = finY,
       this.grosor = grosor,
       this.activo = activo
       setInterval(() => {
        this.desactivarRayo();
        }, Math.floor(Math.random()*3000)+3000);
    }


    desactivarRayo(){
        this.activo=false

    }
    

}


window.Rayo = Rayo;

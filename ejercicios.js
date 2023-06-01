function tipoSuscripcion(suscripcion){
    if(suscripcion == 'free'){
       console.log("solo puedes tomar el curso durante un mes");
       return;
    }
    if(suscripcion == 'basic'){
        console.log("solo puedes tomar el curso durante 2 meses");
        return;
    }
    if(suscripcion == 'premium'){
        console.log("solo puedes tomar el curso durante 3 meses");
        return;
    }
    if(suscripcion == 'premiumplus'){
        console.log("solo puedes tomar el curso durante 6 meses");
        return;
    }
    
    console.warn('ese tipo de suscripcion no existe')
    
}

function moto(llantas,dirrecion,tanque){
    this.llantas = llantas
    this.dirrecion = dirrecion
    this.tanque = tanque
}
let motos = []
for(let i; i< 1; i++){
    let llantas  = prompt("ingresa la llanta que desea")
    let dirrecion = prompt("ingresa la dirrecion que desea")
    let tanque = prompt("ingresa el tanque que desea")

    motos.push(new motos(llantas,dirrecion,tanque))
}
for(let i; i <motos.length;i++){
    console.log([i])
}
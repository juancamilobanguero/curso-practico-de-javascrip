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
function viajar (destino)    {
    if (destino === 'Brasil')  {
        console.log('Gire a la izquierda');
    } else if (destino === 'Argentina')    {
        console.log('Gire a la DERECHA');
    } else {
        console.log("Nos perdimos");
    }
}

viajar('Argentina'); // resultado = Gire a la derecha
// viajar ('Brasil') resultado = Gire a la izquierda
// viajar ('otra cosa') resultado = Nos perdimos

function puedeManejar (edad){
    if (edad >= 18) {
        console.log( true );
} 
    console.log(false);
}
puedeManejar(17); // devolverá false
//puedeManejar(19); devolverá true
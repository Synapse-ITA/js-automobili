// Crea un array composto da 10 automobili. Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, elettrica, ibrida, gpl).

let automobili = [
    { marca: 'Toyota', modello: 'Corolla', alimentazione: 'ibrida' },
    { marca: 'Tesla', modello: 'Model 3', alimentazione: 'elettrica' },
    { marca: 'Volkswagen', modello: 'Golf', alimentazione: 'diesel' },
    { marca: 'Renault', modello: 'Clio', alimentazione: 'gpl' },
    { marca: 'Hyundai', modello: 'Kona', alimentazione: 'elettrica' },
    { marca: 'Fiat', modello: '500', alimentazione: 'benzina' },
    { marca: 'Honda', modello: 'Civic', alimentazione: 'ibrida' },
    { marca: 'Chevrolet', modello: 'Bolt', alimentazione: 'elettrica' },
    { marca: 'Mercedes', modello: 'Classe - A', alimentazione: 'diesel' },
    { marca: 'Citroen', modello: 'C2', alimentazione: 'benzina' },
];

console.log(automobili); // PER VEDERE LA DIFFERENZA DI STAMPA CON IL forEach

// Dividi le automobili in 3 array separati:

let autoBenzina = [];
let autoDiesel = [];
let autoGeneric = [];

automobili.forEach(function (automobile) {
    if (automobile.alimentazione === 'benzina') {
        autoBenzina.push(automobile);
    } else if (automobile.alimentazione === 'diesel') {
        autoDiesel.push(automobile);
    } else {
        autoGeneric.push(automobile);
    }
    console.log(automobile);
});

/* VERSIONE FOR NORMALE

for (let i = 0; i < automobili.length; i++) {
    let automobile = automobili[i];
    if (automobile.alimentazione === 'benzina') {
        autoBenzina.push(automobile);
    } else if (automobile.alimentazione === 'diesel') {
        autoDiesel.push(automobile);
    } else {
        autoGeneric.push(automobile);
    }
}
*/

// Infine stampa separatamente i 3 array

console.log('La lista delle auto a benzina è:', autoBenzina);
console.log('La lista delle auto a diesel è:', autoDiesel);
console.log('La lista delle auto generiche è:', autoGeneric);


// Inserire in HTML le 3 liste (array)

stampaLista(autoBenzina, 'list1');
stampaLista(autoDiesel, 'list2');
stampaLista(autoGeneric, 'list3');

// FUNZIONI

function stampaLista(array, idLista) {
    let listaHtml = '';
    for (let i = 0; i < array.length; i++) {
        let auto = array[i];
        listaHtml += `<li>${auto.marca} ${auto.modello}</li>`;
    }
    document.getElementById(idLista).innerHTML = listaHtml;
}

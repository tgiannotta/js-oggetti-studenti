/* Creo l'oggetto studente */

const studente = {
    nome: 'Bruce',
    cognome: 'Banner',
    eta: 36
};
/* Stampo le proprietà dell'oggetto */
for( let key in studente ) {
        console.log( key + ': ' + studente[key] );
     }

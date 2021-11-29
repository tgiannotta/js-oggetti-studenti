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
/* Creo l'array degli studenti */
const arrayStudenti = 
[
    {
        nome: 'Nick',
        cognome: 'Fury',
        eta: 58
    },
    {
        nome: 'Tony',
        cognome: 'Stark',
        eta: 43
    },
    {
        nome: 'Stephen',
        cognome: 'Strange',
        eta: 39
    },
];
/* Ciclo l'array degli studenti*/
 for(let i = 0; i < arrayStudenti.length; i++){
    const thisStudente = arrayStudenti[i]
    
    console.log(thisStudente.nome + ' ' + thisStudente.cognome + ' ' + thisStudente.eta);
}
/* Inserimento utente di tre persone */
const nomeUtente = prompt('Inserisci il nopme della persona: ');
const cognomeUtente = prompt('Inserisci il cognome della persona');
const etaUtente = parseInt(prompt('Inserisci l\'eta dello studente') );

//Aggiungere il nuovo studente creato dall'utente
const nuovoStudente = {
    nome: nomeUtente,
    cognome: cognomeUtente,
    eta: etaUtente
};

console.log(nuovoStudente);

//Inseriaamo il nuovo studente nell'array generale
arrayStudenti.push(nuovoStudente);
console.log(arrayStudenti);
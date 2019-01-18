///////////////////////// Tableau et manipulation de tableau

// var tab = ['A','B','C'];
// console.log(tab);
// var  tab2 = tab;
// tab2[1]='E';
// console.log(tab)
// console.log(tab2);

// /////////////////////Concatenation de 2 variables String(chaine de caractères)

// var x = 'julie';
// var y = 'dupont';
// console.log(`bonjour ${x} ${y}`);

// //////////////////faire une fonction addition

// var x = 10;
// var y = 42;
// // var z = addition(x,y)
// // console.log(z)
// console.log(add(x,y))

// function add(x,y)
// {
//     return(x+y);
// }

// ////////////////////Faire une condition

// var x = prompt(`saisir 1 valeur entre 1 et 10`);
// var y = 5
// if (x <= y)
// {
//     console.log(`le chiffre est inférieur a ${y}`);
// }
// else 
// {
//     console.log(`le chiffre est supérieur a ${y}`);
// }

// /////////////////////faire une boucle while

// var x = 10;
// var y = prompt('saisaissez un nombre entre 1 et 10');

// while(y!=10)
// {
//     y = prompt('saisaissez un nombre entre 1 et 10');
// }
// alert("braov");

////////////////////// Faire une BOUCLE FOR

// var x = Array('A','B','C');

// for (var i = 0; i < x.length; i++) {
//     console.log(x[i]);
    
// }

///////////////// Portée des variables (ca explique qu'une variable d'une fonction n'est valable que dans la fonction)

// var i = 4;
// var tab1 = ['A','B','C'];
// var tab2 = ['D','E','F'];
// console.log(i);
// for(var i=0; i < tab1.length; i++)
// {
//     console.log(tab1[i]);
// }
// for(var i=0; i < tab2.length; i++)
// {
//     console.log(tab2[i]);
// }
// console.log(i);

// var i = 4; // varible global (pour tout le programme)
// var tab1 = ['A','B','C'];
// var tab2 = ['D','E','F'];
// console.log(i);
// afficheTab(tab1);
// afficheTab(tab2);
// console.log(i);


// function afficheTab(x) {
//     // variable locale
//     for (var i = 0 ; i < x.length; i++)
//     console.log(x[i]);    
// }


// var somme=0;
// var moyenne=0;
// var nombre_notes=0;
// nombre_notes=prompt("Souhaitez-vous faire la moyenne de combien de notes ?","ecrit ici le nombre de notes");
// nombre_notes=parseInt(nombre_notes);
// console.log(nombre_notes);
// notes = new Array ();
// console.log(notes);
// for(i=0; i<nombre_notes; i++)
// {
//     notes[i]=Number(prompt(`entrez la note`));
//     somme=somme+notes[i];
   
// }
// moyenne=somme/notes.length;
// console.log(notes);
// console.log(somme);
// console.log(moyenne);




// var note1 = Number(prompt(`ecrivez la note 1`));
// var note2 = Number(prompt(`ecrivez la note 2`));
// var somme = note1+note2;
// var moyenne = somme/2;
// console.log(moyenne);

// var cumulNotes=0;
// cumulNotes=cumulNotes+Number(prompt(`entrez la note`));
// cumulNotes=cumulNotes+Number(prompt(`entrez la note`));
// console.log(cumulNotes/2);

// var cumulNotes=0;
// for(var i=1; i<=10;i++)
// {
//     cumulNotes=cumulNotes+Number(prompt(`Entrez la notes  ${i}`))
// }
// console.log(cumulNotes/10);


// var nbNotes= Number(prompt(`entrez votre nombre de notes a rentrer`));
// var cumulNotes =0;

// for (var i =1; i<=nbNotes;i++)
// {
//     cumulNotes=cumulNotes+Number(prompt(`Entrez la notes  ${i}`))
// }
// console.log(cumulNotes/nbNotes);

// var x = prompt(`entrez un nom de domaine`);
// var tab = x.split('.');
// console.log(tab);
// console.log(tab[tab.length-1]);




// var inferieur = 0;
// var superieur = 0;
// var tab = Array(12,15,1,10,9,20,18,7,15,14);
// // ou var tab = [12,14,5,8,6, etc..]
// for(var i=1; i < tab.length ;i++)
// {
//     if (tab[i]<10) {
//         inferieur++; //stocker le nombre de notes inferieur
//         console.log(`${tab[i]} est en dessous de la moyenne`);
//     } else {
//         superieur++; // stocker le nombre de notes superieur
//         console.log(`${tab[i]} est au dessus de la moyenne`);
//     }
// }
// console.log(`${superieur} notes sont superieur a la moyenne`,`${inferieur} notes son inferieur a la moyenne`);

// var inferieur = 0;
// var superieur = 0;
// var nombre_notes=0;
// nombre_notes=prompt("Souhaitez-vous faire la moyenne de combien de notes ?","ecrit ici le nombre de notes");
// var tab = new Array();
// // var noteSaisie = Number(prompt(`inserez la note`));
// for (var i=0; i<nombre_notes; i++) 
// {
//     var noteSaisie = Number(prompt(`inserez la note`));
//     tab.push(noteSaisie);

//     if (tab[i]<10) {
//         inferieur++; //stocker le nombre de notes inferieur
//         console.log(`${tab[i]} est en dessous de la moyenne`);
//     } else {
//         superieur++; // stocker le nombre de notes superieur
//         console.log(`${tab[i]} est au dessus de la moyenne`);
//     }
// }

// console.log(`${superieur} notes sont superieur a la moyenne`,`${inferieur} notes son inferieur a la moyenne`);
// console.log(tab);


// var number1;
// var number2;
// var nbEssai = 1
// var operator = prompt(`saisissez le code d'opération ('+' ou - ou x ou /)`);
// while (operator!='+'&&  operator!='-' && operator!='x' && operator!='/') {
//     operator = prompt(`saisissez le code d'opération (+ ou - ou x ou /)`);
//     nbEssai++;
//     if(nbEssai==3) {
//         console.log(`t'es lourd je te sors de là`);
//         break;
//     }
// }

//////////////////////////////// methode Switch (dans le cas ou on connais toutes les occurences)
// switch (operator) {
    
//     case '+':
//      number1 = Number(prompt(`Nombre 1`));
//      number2 = Number(prompt(`Nombre 2`));
//     add(number1,number2);
//         break;
//     case '-':
//      number1 = Number(prompt(`Nombre 1`));
//      number2 = Number(prompt(`Nombre 2`));
//     subs(number1,number2);
//         break;
//     case 'x':
//      number1 = Number(prompt(`Nombre 1`));
//      number2 = Number(prompt(`Nombre 2`));
//     mult(number1,number2);
//         break;
//     case '/':
//      number1 = Number(prompt(`Nombre 1`));
//     number2 = Number(prompt(`Nombre 2`));
//     div(number1,number2);
//         break;

//     default:
//         break;
        
// }
////////////////////// methode if { else {}}
// if (operator=='+'||operator=='-'||operator=='x'||operator=='/') {
//     number1 = Number(prompt(`Nombre 1`));
//     number2 = Number(prompt(`Nombre 2`));

//     if (operator=='+') {
        
//         add(number1,number2);
//     } else {
//         if (operator=='-') {
        
//             subs(number1,number2);
//         } else {
//             if (operator=='x') {
        
//                 mult(number1,number2);
//             } else {
        
//                 div(number1,number2);
//             }
//         }
//     }
// } 
    


// function add(a,b) {
//     return console.log(a+b)  
// }
// function subs(a,b) {
//     return console.log(a-b)  
// }
// function mult(a,b) {
//     return console.log(a*b)  
// }
// function div(a,b) {
//     return console.log(a/b)  
// }



//////////////////// Création de chien manuellement

// var chien1 = {
//     name:`Dominique Strauss-Kahn`,
//     race:`chien saucisse`,
//     color:"rouge",
//     nbPatte:5,
//     talk:function(x){
//         console.log(`WOOF ${x} je m'appelle ${this.name} et j'ai des morpions`)
//     }
// }
// var chienne1 = {
//     name:`Nafissatou Diallo`,
//     race:`chien saucisse`,
//     color:`Violet`,
//     nbPatte:4,
//     talk:function(x) {
//         console.log(`WOOF ${x} je m'appelle ${this.name} vas-t-en satyre`)
        
//     },
//     laisse:{
//         color:`marron`
//     }
// }
// var listChien=[chien1,chienne1];

// for(var i=0;i<listChien.length;i++)
// {
//     console.log(listChien[i].name);
// }

// console.log(listChien);

// chien1.talk(chienne1.name);
// chienne1.talk(chien1.name);

// console.log(chien1.nbPatte);
// console.log(chien1.race);
// console.log(chienne1.laisse.color);





//////////////// Fabricateur de chien

// var chien1;
// var chien2;

// function Chien (a,b)
// {
//     this.name = a;
//     this.color = b;
//     this.parler = function(x)
//     {
//         console.log(`bonjour ${x} je m'appelle ${this.name}`);
//     }
// }

// chien1= new Chien(`Mouloud`,`blue`);
// chien2= new Chien(`Abdul`,`red`);

// console.log(chien1.name);
// chien2.parler(`Marcel`)


// var count = 0;
// var mini = 0;
// var maxi = 100;
// var random = nbaleatoire(mini,maxi);
// console.log(random);
// var saisie;
// var plusOrLess = `devine un nombre entre ${mini} et ${maxi}`;
// while(saisie!=random){
//     saisie = prompt(plusOrLess);
//     count++;
//     console.log(`Tu en es a ${count} cou LUL`);
//     if (saisie>random) 
//     {
//         plusOrLess = `C'est plus petit`
//     } else 
//     {
//         plusOrLess = `C'est plus grand`
//     }
// }
// console.log(`Bravo le veau tu as gagné en ${count} cou !`);



// function nbaleatoire(min, max) {
//     return parseInt(Math.random() * (max - min) + min);
//   }



// var count = 0;
// var tabSaisieEntrer = [];
// var mini = 0;
// var maxi = 100;
// var random = nbaleatoire(mini,maxi);
// console.log(random);
// var saisie;
// var plusOrLess = `devine un nombre entre ${mini} et ${maxi}`;
// while(saisie!=random){
//     saisie = prompt(plusOrLess);
//     tabSaisieEntrer.push(saisie);
//     count++;
//     console.log(`Tu en es a ${count} cou LUL`);
//     console.log(tabSaisieEntrer);
//     if (saisie>random) 
//     {
//         plusOrLess = `C'est plus petit`
//     } else 
//     {
//         plusOrLess = `C'est plus grand`
//     }
// }
// for (var i = 0; i < tabSaisieEntrer.length; i++) 
//     {
    
//         console.log(`Tu as entré la valeur ${tabSaisieEntrer[i]} au coup ${i+1}`);
        
//     }
// console.log(`Bravo le veau tu as gagné en ${count} cou !`);



// function nbaleatoire(min, max) {
//     return parseInt(Math.random() * (max - min) + min);
//   }


// var tab = ['Hortense|500','Hortense|300', 'Ludovina|50', 'Ludovina|25'];
// var depense = [];
// var sommeDepense = 0;
// var savePersonne;
// for(var i =0; i<tab.length;i++){
//     depense=tab[i].split('|');
//     // depense=depense.splice(1);
//     savePersonne=depense[0]+Number(depense[1]);
//     sommeDepense=sommeDepense+Number(depense[1]);
//     console.log(depense);
//     console.log(savePersonne);
//     console.log(sommeDepense);
// }

///////////////////////////////////

// tableau a 2 dimensions


// var tab = [['A','B'],['C','D']];
// var tab2 = [];

// for(var i = 0; i<tab.length;i++) {
//     tab2=tab[i];
//     console.log(tab2);
//     for(var j =0;j<tab2.length;j++){
//         console.log(tab2[j]);
//     }
// }



// var chat1;
// var chat2;
// function Chat (a,b,c){
//     this.name= a;
//     this.color= b;
//     this.sexe= c;
//     this.parler1 = function (x){
//         console.log(`bonjour ${x}, je m'apelle ${this.name}, ah au fait ${chat2.name} j'ai mangé ta mère`)
//     }
//     this.parler2 = function (x){
//         console.log(`bonjour ${x}, je m'apelle ${this.name}, ah au fait ${chat1.name} j'ai mangé ta mère`)
//     }

// }

// chat1 = new Chat('Kradouk','red',`15cm`);
// chat2 = new Chat(`Shrek`,`green`,`125cm`);
// console.log(chat1.color);
// chat1.parler1('Marcel');
// chat2.parler2('Marcel');




var number1;
var number2;
var nbEssai = 1
var operator = prompt(`saisissez le code d'opération ('+' ou - ou x ou /)`);
while (operator!='+'&&  operator!='-' && operator!='x' && operator!='/') {
    operator = prompt(`saisissez le code d'opération (+ ou - ou x ou /)`);
    nbEssai++;
    if(nbEssai==3) {
        console.log(`t'es lourd je te sors de là`);
        break;
    }
}
operation1 = new Operation(number1,number2);
switch (operator) {
    
    case '+':
     number1 = Number(prompt(`Nombre 1`));
     number2 = Number(prompt(`Nombre 2`));
     operation1.add(number1,number2);
        break;
    case '-':
     number1 = Number(prompt(`Nombre 1`));
     number2 = Number(prompt(`Nombre 2`));
     operation1.subs(number1,number2);
        break;
    case 'x':
     number1 = Number(prompt(`Nombre 1`));
     number2 = Number(prompt(`Nombre 2`));
     operation1.mult(number1,number2);
        break;
    case '/':
     number1 = Number(prompt(`Nombre 1`));
    number2 = Number(prompt(`Nombre 2`));
    operation1.div(number1,number2);
        break;

    default:
        break;
}



function Operation(a,b){
    this.add = function add(a,b) {
        return console.log(a+b)  ;
    }
    this.subs = function subs(a,b) {
        return console.log(a-b)  
    }
    this.mult = function mult(a,b) {
        return console.log(a*b)  
    }
    this.div = function div(a,b) {
        return console.log(a/b)  
    }
}
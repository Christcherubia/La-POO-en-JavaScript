// Tout en JavaScript ou presque est un Objet !!!

const obj = {
  // Index: value
  name: "Chris",
  City: "Niort",
  admin: false,

  direBonjour: function () {
    console.log("Bonjour je suis " + this.name);
  },

  // direBonjour() {
  //   console.log("Bonjour je suis " + this.name);
  // },
};
// console.log(typeof obj);
// Comme on peut le voir dans la console, le JavaScript est vraiment un langage orienté objets
// let array = [1, 2, 3];
// console.log(typeof array);

// console.log(document.body);
// console.log(typeof document.body);

// console.log(typeof null);

// Ajouter à un objet
obj.age = 24;
obj["admin"] = true;

// MOdifier
obj.name = "CDC";

//Supprimer
delete obj.City;
// console.log(obj);

// Checker si une propiété existe
// console.log("pseudo" in obj);
// console.log("City" in obj);

// Parcourir l'objet
for (const key in obj) {
  // console.log(key + ": " + obj[key]);
}
// console.log(obj.direBonjour());

//--------------------------
// Méthode native pour Object JS
// Obtenir les clés
const keys = Object.keys(obj);
// console.log(keys);
const values = Object.values(obj);
// console.log(values);

// Un objet JavaScript à toujours des méthodes exemple "Object" qui est un objet à des méthode comme "keys" ou "values"
// "Math" lui à par exemple la méthode "random" etc.
const nestedArray = Object.entries(obj);
// console.log(nestedArray);

const obj2 = {
  taille: "1m80",
  poids: "75kg",
  name: "Robert",
};

// Comment prouver qu'une string est bien un objet en JS tout comme une fonction...
let bonjour = "bonjour";
console.log(typeof "bonjour");

// const bonjour1 = "Hello world!";
console.log(typeof bonjour); // Output: "string"

// Using the `typeof` operator with the string method `toUpperCase()`
console.log(typeof bonjour.toUpperCase); // Output: "function"

const bonjour1 = {
  age: "1",
  lenght: "8",
  mois: "April",
};
console.log(bonjour1 + "bonjour1");

// Fusionner des objects
const fusion = Object.assign({}, obj, obj2);
// console.log(fusion);
// S'arrêter là pour la vidéo "JS les bases"

// Geler l'objet empeche toutes modifications
// const newObj = Object.freeze(obj);
// Empecher les modifications sauf la première
const newObj1 = Object.seal(obj);
newObj1.name = "Test";
newObj1.adresse = "43 rue des biens";
// console.log(fusion);

// console.log(newObj1);

//--------------------
// Construires des objets
//--------------------

// Fonction constructeur
function User(pseudo, ville) {
  this.pseudo = pseudo;
  this.ville = ville;
}
const user1 = new User("CC&C", "Paris");
// console.log(user1);

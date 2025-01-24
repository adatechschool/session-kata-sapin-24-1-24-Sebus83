// function afficherPointeSapin(hauteur) {
//     console.log(" ".repeat(hauteur),"+") // positionnement du + en haut du sapin
//     for (let i=0; i<hauteur; i++){
//         // positionnement des différentes strates avec incrémentation des * à chaque nouvelle ligne
//         console.log(' '.repeat(hauteur-i) + '/' + '*'.repeat(i) + '|' + '*'.repeat(i) + '\\')
//     }
//   }

//   //afficherPointeSapin(4)

function afficherEtoiles(n) {
  console.log("*".repeat(n)); //pour afficher une etoile
}

//   afficherEtoiles(2)
//   afficherEtoiles(5)

function afficherRectangle(hauteur, largeur) {
  for (let i = 0; i < hauteur; i++) {
    afficherEtoiles(largeur);
  }
}

//   afficherRectangle(2, 3)

function afficherTriangleDroite(n) {
  // En s'inspirant de la fonction afficherRectangle(),
  for (let i = 0; i < n; i++) {
    console.log("*".repeat(i) + "\\");
  }
  // comment afficher des lignes qui "s'allongent" un peu plus à chaque itération ?
}

//   afficherTriangleDroite(5)

function afficherTriangleGauche(n) {
  for (let i = 0; i < n; i++) {
    // positionnement des différentes strates avec incrémentation des * à chaque nouvelle ligne
    console.log(" ".repeat(n - i) + "/" + "*".repeat(i));
  }
}

//   afficherTriangleGauche(5)

function afficherPointeSapin(n) {
  console.log(" ".repeat(n), "+"); // positionnement du + en haut du sapin
  for (let i = 0; i < n; i++) {
    console.log(
      " ".repeat(n - i) + "/" + "*".repeat(i) + "|" + "*".repeat(i) + "\\"
    );
  }
}

//   afficherPointeSapin(3)

//function afficherEtages

function afficherSapin(etages, hauteur_etage) {
  afficherPointeSapin(hauteur_etage);
  for (let j = 1; j < etages; j++) {
    // boucle pour itérer l'opération le nombre de fois voulu
    for (let i = 1; i <= etages; i++) {
      // boucle pour faire les étages en omettant la premiere ligne
      console.log(
        " ".repeat(etages - i) +
          "/" +
          "*".repeat(i) +
          "|" +
          "*".repeat(i) +
          "\\"
      )
    }
  }
}
afficherSapin(3, 3);

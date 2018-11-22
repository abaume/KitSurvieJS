function Etudiant (nom, prenom, numEtu, dateNaissance) {
    this.nom = nom;
    this.prenom = prenom;
    this.numEtu = numEtu;
    this.dateNaissance = dateNaissance;

    this.presenter = function() {
        console.log("Je suis " + this.prenom + " " + this.nom
            + " et je suis né le" + this.dateNaissance[0] + "/" + this.dateNaissance[1] + "/" + this.dateNaissance[2] + "."
        + "Mon numéro étudiant est le " + this.numEtu);
    };
    this.age = function () {
      return 2018 - this.dateNaissance[2]
    };
}

var etu1 = new Etudiant("dobert", "pascal", 65753279, [4, 12, 1992]);
etu1.presenter();
console.log(etu1.age());

var etu2 = new Etudiant("damour", "pascal", 6509879, [9, 5, 1890]);
etu2.presenter();
console.log(etu2.age());
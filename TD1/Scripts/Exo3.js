var Personne = {
    nom: "",
    prenom: "",
    dateNaissance: [1, 1, 1977],

    init: function(nom, prenom, dateNaissance){
        this.nom
            = nom;
        this.prenom
            = prenom;
        this.dateNaissance = dateNaissance;
    },
    decrire: function(){ console.log(); }

};

var Professeur = Object.create(Personne);
Professeur.mail = "";
Professeur.initProfesseur = function (nom, prenom, dateNaissance, mail) {
    this.init(nom, prenom, dateNaissance);
    this.mail = mail;
};
Professeur.decrire = function () {
    console.log("Je suis le professeur " + this.prenom + " " + this.nom + ", né le " + this.dateNaissance[0] + "/" + this.dateNaissance[1] + "/" + this.dateNaissance[2]
        + ", mon mail est " + this.mail )
};

var p = Object.create(Professeur);
p.initProfesseur("Haricot", "Beurre", [7, 8, 1965], "haricotbeurre@gmail.com");

p.decrire();

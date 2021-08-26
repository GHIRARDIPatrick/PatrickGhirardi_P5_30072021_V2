// COMMANDE - Variables
var messageErreur;
listeLignePanierID = "";

console.log("JS COMMANDE - Ca fonctionne");

// CONTROLE SI FICHIERS LOCALHOST EXISTENT
indexobjet_json = localStorage.getItem("index");
if (indexobjet_json != null) {
    console.log("PANIER - Controle si LocalStorage INDEX existant : OUI");
} else {
    console.log("PANIER - Controle si LocalStorage INDEX existant : NON --> Renvoi en INDEX.HTML");
    window.location.href = "index.html";
}

nbLignePanierobjet_json = localStorage.getItem("Nb_Ligne_Panier");
if (nbLignePanierobjet_json != null) {
    nbLignePanierobjet = JSON.parse(nbLignePanierobjet_json);
    nbLignePanier = nbLignePanierobjet.nbLignePanier;
    console.log("PANIER - Controle si LocalStorage Nb Lignes Panier existant : OUI --> " + nbLignePanier + " lignes");
} else {
    console.log("PANIER - Controle si LocalStorage Nb Lignes Panier existant : NON --> Renvoi en INDEX.HTML");
    window.location.href = "index.html";
}


// PANIER - TELECHARGEMENT DONNEES 
totalCommande = 0;
for (let i = 1; i < nbLignePanier + 1; i++) {
    lignePanierobjet_json = localStorage.getItem("lignePanier" + i);
    console.log("PANIER - Téléchargement Ligne Panier n° " + i + " -- En cours");
    if (lignePanierobjet_json != null) {
        lignePanierobjet = JSON.parse(lignePanierobjet_json);
        lignePanier = lignePanierobjet;
        console.log("PANIER - Téléchargement Ligne Panier n° " + i + " -- Téléchargée");
        console.log(lignePanier);
        totalLigne = (lignePanier.ArticlePrix / 100) * lignePanier.ArticleQuantite;
        totalCommande = totalCommande + (+totalLigne);
        console.log("Total Ligne : " + totalLigne);
        console.log("Total Commande : " + totalCommande);
        if (listeLignePanierID == "") {
            listeLignePanierID = lignePanier.ArticleID
        } else {
            listeLignePanierID = listeLignePanierID + "," + lignePanier.ArticleID;
        }
    }
};

// CONTACT - TELECHARGEMENT DONNEES 
contactobjet_json = localStorage.getItem("contact");
if (contactobjet_json != null) {
    contactobjet = JSON.parse(contactobjet_json);
    contact = contactobjet;
    console.log("CONTACT - Téléchargement LocalStorage : OUI ");

    var contact = {
        firstName: contact.ContactPrenom,
        lastName: contact.ContactNom,
        address: contact.ContactAdresse,
        city: contact.ContactCpostal + " " + contact.ContactVille,
        email: contact.ContactEmail,
    };

    var products = [lignePanier.ArticleID];

};

essai = { 'contact': contact, 'products': products };
console.log(essai);



fetch("http://127.0.0.1:3000/api/teddies/order", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 'contact': contact, 'products': products }),

    })
    .then(function(res) {
        if (res.ok) {
            console.log("POST -> RES.JSON : OK");
            return res.json();
        }
    })
    .then(function(value) {
        console.log("N° de Commande : " + value.orderId);
        document.getElementById("Commande-Numero").innerText = "n° " + value.orderId;
        document.getElementById("Commande-Total").innerText = "Le montant de votre commande : " + totalCommande + " euros ";
    });
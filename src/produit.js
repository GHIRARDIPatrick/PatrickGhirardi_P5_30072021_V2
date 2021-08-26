// ________________________________________________________________________________________________________________
// PRODUIT - RECUPERATION SELECTION PRODUIT INDEX

console.log("JS PRODUIT - Ca fonctionne");

indexobjet_json = localStorage.getItem("index");
if (indexobjet_json != null) {
    console.log("PRODUIT - Controle si LocalStorage INDEX existant : OUI");
    indexobjet = JSON.parse(indexobjet_json);
    selectionid = indexobjet.IndexID;
} else {
    console.log("PRODUIT - Controle si LocalStorage INDEX existant : NON --> Renvoi en INDEX.HTML");
    window.location.href = "index.html";
}

console.log("ID Recherché : " + selectionid);
recherche = "http://127.0.0.1:3000/api/teddies/" + selectionid;
// PRODUIT - RECHERCHE INFORMATIONS PRODUIT
fetch(recherche)
    .then(function(res) {
        if (res.ok) {
            console.log("INDEX - Connexion Server GET : res.ok ");
            return res.json();
        }
    })
    .then(function(resultat) {
            console.log("PRODUIT - Lecture des résultats du GET");
            var produitNombre = resultat.length;
            produit = resultat;
            console.log("PRODUIT - Lecture résultat " + resultat);
            console.log("PRODUIT - Nb Articles téléchargés : " + produitNombre);
            console.log("PRODUIT - ID téléchargé : " + produit._id);

            // PRODUIT - MODIFICATION PAGE HTML INFORMATIONS PRODUIT

            document.getElementById("produit-id").innerText = produit._id;
            document.getElementById("produit-nom").innerText = produit.name;
            document.getElementById("JS-image").innerHTML += '<div class="col-lg-6"><img src="' + produit.imageUrl + '" alt="Photo ' + produit.description + '"></div>';
            produitImage = produit.imageUrl;
            document.getElementById("produit-description").innerText = produit.description;
            produitDescription = produit.description;
            document.getElementById("produit-prix").innerText = "Prix : " + (produit.price / 100) + " euros";

            if (produit.colors.length == 1) {
                document.getElementById("produit-couleur-selection").innerHTML += '<option value="' + produit.colors[0] + '">' + produit.colors[0] + '</option>'
            } else {
                document.getElementById("produit-couleur-selection").innerHTML = '<option value="">--Choisissez une couleur--</option>'
                for (let t = 0; t < produit.colors.length; t++) {
                    document.getElementById("produit-couleur-selection").innerHTML += '<option value="' + produit.colors[t] + '">' + produit.colors[t] + '</option>'
                }
            }


        }

    )
    .catch(function(err) {
        // Une erreur est survenue
        console.log("INDEX - Erreur dans le GET");
        messageErreur("ERREUR CONNEXION SERVER|Veuillez retenter la connexion dans quelques minutes... Merci.");
    });



// PRODUIT - Quantité & Commande
const produitQuantite = document.getElementById("produit-quantite");
const produitCouleur = document.getElementById("produit-couleur-selection");
let valeur = 0;


document
    .getElementById("produit-moins").addEventListener("click", function() {
        if (--produitQuantite.value < 0) {
            produitQuantite.value = 0;
            document.getElementById("produit-quantite").innerText = (produitQuantite) + ' ';
            console.log("Produit négatif");
            messageErreur("Quantité : Vous ne pouvez avoir une quantité inférieure à zéro.");

        } else {
            if (produitQuantite.value < 1) {
                document.getElementById("produit-commande").disabled = true;
                document.getElementById("produit-quantite").innerText = (--produitQuantite);

            } else {
                document.getElementById("produit-quantite").innerText = (--produitQuantite);
            }
        }

    });


document.getElementById("produit-plus").addEventListener("click", function() {
    document.getElementById("produit-quantite").innerText = (++produitQuantite.value) + '';
    document.getElementById("produit-commande").disabled = false;
});


// PRODUIT - BOUTON COMMANDE + CONTROLE MIS AU PANIER
document.getElementById("produit-commande").addEventListener("click", function() {
    if (produitCouleur.value || "") {
        console.log("PRODUIT- Mis en Panier");
        nbLignePanier_json = localStorage.getItem("Nb_Ligne_Panier");

        // PRODUIT -- Controle nb produits dans le PANIER
        if (nbLignePanier_json != null) {
            var nbLignePanierobjet = JSON.parse(nbLignePanier_json);
            nbLignePanier = nbLignePanierobjet.nbLignePanier;
            console.log("PRODUIT - GET LocalStorage - Nb de lignes du Panier récupéré : OUI - " + nbLignePanier);
        } else {
            console.log("PRODUIT - GET LocalStorage - Nb de lignes du Panier récupéré : NON");
            nbLignePanier = 0;
        }

        // COMMANDE -- Si 1er Article dans Panier, mémorisation article dans panier
        if (nbLignePanier === 0) {
            // COMMANDE -- Création Nb Article dans PANIER
            nbLignePanier = ++nbLignePanier;
            var nbLignePanierobjet = {
                nbLignePanier: nbLignePanier
            };
            var nbLignePanier_json = JSON.stringify(nbLignePanierobjet);
            localStorage.setItem("Nb_Ligne_Panier", nbLignePanier_json);
            console.log("PRODUIT - Création LocalStorage - Nb Lignes Paniers");


            var articleobjet = {
                ArticleID: indexobjet.IndexID,
                ArticleNom: indexobjet.IndexNom,
                ArticleImage: produitImage,
                ArticleCouleur: produitCouleur.value,
                ArticleDescription: produitDescription,
                ArticlePrix: indexobjet.IndexPrix,
                ArticleQuantite: produitQuantite.value,
            };
            var articleobjet_json = JSON.stringify(articleobjet);
            localStorage.setItem("lignePanier" + nbLignePanier, articleobjet_json);
            console.log("PRODUIT - Création LocalStorage - 1ère ligne Panier");

        } else {
            // COMMANDE - recherche si article déjà existant
            numeroarticle = 0;
            console.log("PRODUIT - Lignes panier > 1");
            for (let i = 1; i < nbLignePanier + 1; i++) {
                articleobjet_json = localStorage.getItem("lignePanier" + i);
                if (articleobjet_json != null) {
                    console.log("PRODUIT - Lignes panier > 1 - Recherche si Article déjà dans panier - Article " + i);
                    articleobjet = JSON.parse(articleobjet_json);

                    if (articleobjet.ArticleID == selectionid && articleobjet.ArticleCouleur == produitCouleur.value) {
                        numeroarticle = i;
                        i = nbLignePanier;
                    }

                }
            }


            // COMMANDE - Création Article
            console.log("PRODUIT - Numero Article : " + numeroarticle);
            if (numeroarticle == 0) {
                // COMMANDE -- MAJ du nb produits dans le PANIER
                var nbLignePanierobjet = {
                    nbLignePanier: ++nbLignePanier,
                };
                var nbLignePanierobjet_json = JSON.stringify(nbLignePanierobjet);
                localStorage.setItem("Nb_Ligne_Panier", nbLignePanierobjet_json);
                console.log("PRODUIT - MAJ du Nb Lignes panier : " + nbLignePanier);


                numeroarticle = nbLignePanier;
            }
            var articleobjet = {
                ArticleID: indexobjet.IndexID,
                ArticleNom: indexobjet.IndexNom,
                ArticleImage: produitImage,
                ArticleCouleur: produitCouleur.value,
                ArticleDescription: produitDescription,
                ArticlePrix: indexobjet.IndexPrix,
                ArticleQuantite: produitQuantite.value,
            };
            var articleobjet_json = JSON.stringify(articleobjet);
            localStorage.setItem("lignePanier" + numeroarticle, articleobjet_json);
            console.log("PRODUIT - Création ou MAJ LocalStorage - Ligne Panier");

        }


        //PRODUIT - Article mis 
        messageErreur("Article mis dans votre panier.");
        // window.location.href = "index.html";

    } else {
        messageErreur("Merci de renseigner une couleur");
    }
});



// PRODUIT - FENETRE MESSAGE ERREUR FORMULAIRE
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

function messageErreur(messErr) {
    modal.style.display = "block";
    document.getElementById("produit-message").innerText = messErr;
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
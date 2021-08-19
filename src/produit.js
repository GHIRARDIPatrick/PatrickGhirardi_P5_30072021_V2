// ________________________________________________________________________________________________________________
// PRODUIT - RECUPERATION SELECTION PRODUIT INDEX

indexobjet_json = sessionStorage.getItem("index");
if (indexobjet_json != null) {
    alert("BON");
    indexobjet = JSON.parse(indexobjet_json);
    selectionid = indexobjet.IndexID;
} else {
    alert("FAUX");
    window.location.href = "index.html";
}


// PRODUIT - RECHERCHE INFORMATIONS PRODUIT
fetch("http://127.0.0.1:3000/api/teddies/?_id=' + produit_id[0] + '")
    .then(function(res) {
        if (res.ok) {
            alert("res.ok");
            return res.json();
        }
    })
    .then(function(resultat) {
        alert("2ème Then");
        var produitNombre = resultat.length;
        produit = resultat;
        alert(resultat);
        alert(produit[0].colors[1])
        alert(produitNombre)

        // PRODUIT - MODIFICATION PAGE HTML INFORMATIONS PRODUIT
        for (let i = 0; i < produitNombre; i++) {
            if (produit[i]._id == selectionid) {
                document.getElementById("produit-id").innerText = produit[i]._id;
                document.getElementById("produit-nom").innerText = produit[i].name;
                document.getElementById("JS-image").innerHTML += '<div class="col-lg-6"><img src="' + produit[i].imageUrl + '" alt="Photo ' + produit[i].description + '"></div>';
                document.getElementById("produit-description").innerText = produit[i].description;
                document.getElementById("produit-prix").innerText = "Prix : " + (produit[i].price / 100) + " euros";

                if (produit[i].colors.length == 1) {
                    document.getElementById("produit-couleur-selection").innerHTML += '<option value="' + produit[i].colors[0] + '">' + produit[i].colors[0] + '</option>'
                } else {
                    document.getElementById("produit-couleur-selection").innerHTML = '<option value="">--Choisissez une couleur--</option>'
                    for (let t = 0; t < produit[i].colors.length; t++) {
                        document.getElementById("produit-couleur-selection").innerHTML += '<option value="' + produit[i].colors[t] + '">' + produit[i].colors[t] + '</option>'
                    }
                }


            }
        }


    })
    .catch(function(err) {
        alert("message erreur");
        // Une erreur est survenue
    });



// PRODUIT - Quantité & Commande
const produitQuantite = document.getElementById("produit-quantite");
const produitCouleur = document.getElementById("produit-couleur-selection");
let valeur = 0;



alert("JS PRODUIT - Ca fonctionne");

document
    .getElementById("produit-moins").addEventListener("click", function() {
        if (--produitQuantite.value < 0) {
            produitQuantite.value = 0;
            document.getElementById("produit-quantite").innerText = (produitQuantite) + ' ';
            alert("Produit négatif");

        } else {
            if (produitQuantite.value < 1) {
                document.getElementById("produit-commande").disabled = true;
                document.getElementById("produit-quantite").innerText = (--produitQuantite) + '';

            } else {
                document.getElementById("produit-quantite").innerText = (--produitQuantite) + '';
            }
        }

    });


document.getElementById("produit-plus").addEventListener("click", function() {
    document.getElementById("produit-quantite").innerText = (++produitQuantite.value) + '';
    document.getElementById("produit-commande").disabled = false;
});

document.getElementById("produit-commande").addEventListener("click", function() {
    if (produitCouleur.value || "") {
        alert("Mis en Panier");
        nbpanier_json = sessionStorage.getItem("Nb_Panier");
        // COMMANDE -- Controle nb produits dans le PANIER
        if (nbpanier_json != null) {
            alert("BON Nb Panier");
            var nbpanierobjet = JSON.parse(nbpanier_json);
            nbpanier = nbpanierobjet.nbpanier;

        } else {
            // COMMANDE -- Création Nb Article dans PANIER
            alert("FAUX Nb Panier");
            var nbpanierobjet = {
                nbpanier: 1,
            };
            var nbpanierobjet_json = JSON.stringify(nbpanierobjet);
            sessionStorage.setItem("Nb_Panier", nbpanierobjet_json);
            nbpanier = 1;
        }

        // COMMANDE -- Si 1er Article dans Panier, mémorisation article dans panier
        if (nbpanier == 1) {
            var nbpanierobjet = {
                ArticleID: indexobjet.IndexID,
                ArticleNom: indexobjet.IndexNom,
                ArticleCouleur: produitCouleur.value,
                ArticleDescrption: indexobjet.Indexdescription,
                ArticlePrix: indexobjet.IndexPrix,
                ArticleQuantite: produitQuantite.value,
            };
            var panierobjet_json = JSON.stringify(nbpanierobjet);
            sessionStorage.setItem("Panier" + nbpanier, panierobjet_json);
        } else {
            // COMMANDE - recherche si article déjà existant
            numeroarticle == 0;
            alert("Deuxieme partie");
            for (let i = 1; i < nbpanier; i++) {
                panier_json = sessionStorage.getItem("Panier" + i);
                if (panier_json != null) {
                    aler("entrer");
                    panierarticle = JSON.parse(panier_json);
                    if (panierarticle.ArticleID == IndexID && panierarticle.ArticleCouleur == produitCouleur.value) {
                        numeroarticle = i;
                        i == nbpanier;
                    }

                }
            }

            // COMMANDE - Création Article
            alert("Numero Article : " + numeroarticle);
            if (numeroarticle == 0) {
                // COMMANDE -- MAJ du nb produits dans le PANIER
                var nbpanierobjet = {
                    nbpanier: ++nbpanier,
                };
                var nbpanierobjet_json = JSON.stringify(nbpanierobjet);
                sessionStorage.setItem("Nb_Panier", nbpanierobjet_json);
                alert("Nb panier : " + nbpanier)


                numeroarticle == nbpanier;
            }
            var nbpanierobjet = {
                ArticleID: indexobjet.IndexID,
                ArticleNom: indexobjet.IndexNom,
                ArticleCouleur: produitCouleur.value,
                ArticleDescrption: indexobjet.Indexdescription,
                ArticlePrix: indexobjet.IndexPrix,
                ArticleQuantite: produitQuantite.value,
            };
            var panierobjet_json = JSON.stringify(nbpanierobjet);
            sessionStorage.setItem("Panier" + numeroarticle, panierobjet_json);

        }





    } else {
        alert("Merci de renseigner une couleur");
    }
});
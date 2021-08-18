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
    } else {
        alert("Merci de renseigner une couleur");
    }
});
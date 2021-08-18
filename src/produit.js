// PRODUIT - Quantité & Commande
const produitQuantite = document.getElementById("produit-quantite");
let valeur = 0;


alert("JS PRODUIT - Ca fonctionne");

document
    .getElementById("produit-moins").addEventListener("click", function() {
        if (produitQuantite < 1) {
            alert("Produit négatif");
        } else {
            if (produitQuantite.value < 2) {
                document.getElementById("produit-commande").disabled = true;
                document.getElementById("produit-quantite").innerText = (--produitQuantite) + '';

            } else {
                document.getElementById("produit-quantite").innerText = (--produitQuantite) + '';
            }
        }

    });


document
    .getElementById("produit-plus").addEventListener("click", function() {
        document.getElementById("produit-quantite").innerText = (++produitQuantite.value) + '';
        document.getElementById("produit-commande").disabled = false;

    });

document
    .getElementById("produit-commande")
    .addEventListener("click", function() {
        alert("Mis en Panier");
    });
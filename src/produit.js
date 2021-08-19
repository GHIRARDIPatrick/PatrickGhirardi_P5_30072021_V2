//
const produit_id = ["5be9c8541c9d440000665243", "5beaa8bf1c9d440000a57d94", "5beaaa8f1c9d440000a57d95", "5beaabe91c9d440000a57d96", "5beaacd41c9d440000a57d97"];
const numero_id = 2;

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


        for (let i = 0; i < produitNombre; i++) {
            if (produit[i]._id == produit_id[numero_id]) {
                document.getElementById("produit-id").innerText = produit[i]._id;
                document.getElementById("produit-nom").innerText = produit[i].name;
                document.getElementById("JS-image").innerHTML += '<div class="col-lg-6"><img src="' + produit[i].imageUrl + '" alt="Photo ' + produit[i].description + '"></div>';
                document.getElementById("produit-description").innerText = produit[i].description;
                document.getElementById("produit-prix").innerText = "Prix : " + (produit[i].price / 100) + " euros";

                if (produit[numero_id].colors.length == 1) {
                    document.getElementById("produit-couleur-selection").innerHTML += '<option value="' + produit[numero_id].colors[0] + '">' + produit[numero_id].colors[0] + '</option>'
                } else {
                    document.getElementById("produit-couleur-selection").innerHTML = '<option value="">--Choisissez une couleur--</option>'
                    for (let t = 0; t < produit[numero_id].colors.length; t++) {
                        document.getElementById("produit-couleur-selection").innerHTML += '<option value="' + produit[numero_id].colors[t] + '">' + produit[numero_id].colors[t] + '</option>'
                    }
                }


            }
        }


    })
    .catch(function(err) {
        alert("message erreur");
        // Une erreur est survenue
    });

// function myFunction(x) {
//     alert(x);
//     alert(produit[x].name);
// };




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
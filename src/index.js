// PRODUIT - Quantité & Commande
const produitQuantite = document.getElementById("produit-quantite");
let valeur = 0;
alert("Ca fonctionne");

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


// ________________________________________________________________________________________________________________
// PANIER - Controle Formulaire
document.getElementById("panier-prenom").addEventListener("input", function() {
    var code = document.getElementById("panier-prenom").value;
    if (!code.match(/^([a-zA-Z]+)$/)) {
        document.getElementById("panier-prenom").style.backgroundColor = 'red';
        document.getElementById("panier-validation").disabled = true;
    } else {
        document.getElementById("panier-prenom").style.backgroundColor = 'green';
        document.getElementById("panier-validation").disabled = false;
    }
});

document.getElementById("panier-nom").addEventListener("input", function() {
    var code = document.getElementById("panier-nom").value;
    if (!code.match(/^([a-zA-Z]+)$/)) {
        document.getElementById("panier-nom").style.backgroundColor = 'red';
        document.getElementById("panier-validation").disabled = true;
    } else {
        document.getElementById("panier-nom").style.backgroundColor = 'green';
        document.getElementById("panier-validation").disabled = false;
    }
});

document.getElementById("panier-adresse").addEventListener("input", function() {
    var code = document.getElementById("panier-adresse").value;
    if (!code.length > 0) {
        document.getElementById("panier-adresse").style.backgroundColor = 'red';
        document.getElementById("panier-validation").disabled = true;
    } else {
        document.getElementById("panier-adresse").style.backgroundColor = 'green';
        document.getElementById("panier-validation").disabled = false;
    }
});

document.getElementById("panier-cpostal").addEventListener("input", function() {
    var code = document.getElementById("panier-cpostal").value;
    if (!code.match(/^([a-zA-Z]+)$/)) {
        document.getElementById("panier-cpostal").style.backgroundColor = 'red';
        document.getElementById("panier-validation").disabled = true;
    } else {
        document.getElementById("panier-cpostal").style.backgroundColor = 'green';
        document.getElementById("panier-validation").disabled = false;
    }
});

document.getElementById("panier-ville").addEventListener("input", function() {
    var code = document.getElementById("panier-ville").value;
    if (!code.match(/^([a-zA-Z]+)$/)) {
        document.getElementById("panier-ville").style.backgroundColor = 'red';
        document.getElementById("panier-validation").disabled = true;
    } else {
        document.getElementById("panier-ville").style.backgroundColor = 'green';
        document.getElementById("panier-validation").disabled = false;
    }
});

document.getElementById("panier-email").addEventListener("input", function() {
    var code = document.getElementById("panier-email").value;
    if (!code.length > 0) {
        document.getElementById("panier-email").style.backgroundColor = 'red';
        document.getElementById("panier-validation").disabled = true;
    } else {
        document.getElementById("panier-email").style.backgroundColor = 'green';
        document.getElementById("panier-validation").disabled = false;
    }
});



// ________________________________________________________________________________________________________________
// INDEX - Affichage des oursons en liste

function askHello() {
    fetch("http://localhost:3000/api/teddies/request?teddies")
        .then(function(res) {
            if (res.ok) {
                return res.json();
            }
        })
        .then(function(value) {
            document
                .getElementById("hello-result")
                .innerText = value.queryString.greetings;
        })
        .catch(function(err) {
            // Une erreur est survenue
        });
}
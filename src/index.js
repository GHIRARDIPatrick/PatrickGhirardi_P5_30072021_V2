// ________________________________________________________________________________________________________________
// INDEX - AFFICHAGE DES OURSONS EN LISTE
var messageErreur;

console.log("JS INDEX - Ca fonctionne");

fetch("http://127.0.0.1:3000/api/teddies")
    .then(function(res) {
        if (res.ok) {
            console.log("INDEX - Connexion Server GET : res.ok ");
            return res.json();
        }
    })
    .then(function(resultat) {
        console.log("INDEX - Lecture des résultats du GET");
        var produitNombre = resultat.length;
        produit = resultat;
        console.log("INDEX - Lecture résultat " + resultat);
        console.log("INDEX - Nb Articles téléchargés : " + produitNombre)

        for (let i = 0; i < produitNombre; i++) {
            document.getElementById("JS").innerHTML += '<a onclick="myFunction(' + i + ')" href="produit.html" class="col-lg-4"><article><img src="' + produit[i].imageUrl + '" alt="Photo ' + produit[i].description + '"><h2 id>' + produit[i].name + '</h2><p>Prix : ' + produit[i].price / 100 + ' euros</p><span class="hidden">' + produit[i]._id + '</span></article></a>';

            // document.getElementById("JS").innerHTML += '<a onclick="myFunction()" href="produit.html" class="col-lg-4"><article><img src="' + produit[i].imageUrl + '" alt="Photo ' + produit[i].description + '"><h2 id>' + produit[i].name + '</h2><p>Prix : ' + produit[i].price / 100 + ' euros</p><div class="form-group hidden"><label for="index-ref" class="control-label col-sm-2">Référence :</label><div class="col-lg-10"><input class="form-control-static" type="text" id="index-ref" name="index-ref" value="' + produit[i]._id + '" required></p></div></div></article></a>';
        }
    })
    .catch(function(err) {
        // Une erreur est survenue
        console.log("INDEX - Erreur dans le GET");
        messageErreur("ERREUR CONNEXION SERVER|Veuillez retenter la connexion dans quelques minutes... Merci.");
    });



// INDEX - MEMORISATION DES DONNEES SELECTIONNEES
function myFunction(x) {
    console.log(x);
    console.log(produit[x].name);

    var indexobjet = {
        IndexID: produit[x]._id,
        IndexNom: produit[x].name,
        IndexCouleur: produit[x].colors,
        indexDescrption: produit[x].description,
        IndexPrix: produit[x].price
    };
    var indexobjet_json = JSON.stringify(indexobjet);
    localStorage.setItem("index", indexobjet_json);
};



// INDEX - FENETRE MESSAGE ERREUR
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

function messageErreur(messErr) {
    modal.style.display = "block";
    document.getElementById("panier-message").innerText = messErr;
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
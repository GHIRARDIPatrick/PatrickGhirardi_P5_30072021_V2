// ________________________________________________________________________________________________________________
// INDEX - Affichage des oursons en liste


alert("JS INDEX - Ca fonctionne");

fetch("http://127.0.0.1:3000/api/teddies")
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
            document.getElementById("JS").innerHTML += '<a onclick="myFunction(' + i + ')" href="produit.html" class="col-lg-4"><article><img src="' + produit[i].imageUrl + '" alt="Photo ' + produit[i].description + '"><h2 id>' + produit[i].name + '</h2><p>Prix : ' + produit[i].price / 100 + ' euros</p><span class="hidden">' + produit[i]._id + '"</span></article></a>';

            // document.getElementById("JS").innerHTML += '<a onclick="myFunction()" href="produit.html" class="col-lg-4"><article><img src="' + produit[i].imageUrl + '" alt="Photo ' + produit[i].description + '"><h2 id>' + produit[i].name + '</h2><p>Prix : ' + produit[i].price / 100 + ' euros</p><div class="form-group hidden"><label for="index-ref" class="control-label col-sm-2">Référence :</label><div class="col-lg-10"><input class="form-control-static" type="text" id="index-ref" name="index-ref" value="' + produit[i]._id + '" required></p></div></div></article></a>';
        }

    })
    .catch(function(err) {
        alert("message erreur");
        // Une erreur est survenue
    });

// INDEX - Mémorisation des données sélectionnées
function myFunction(x) {
    alert(x);
    alert(produit[x].name);

    var indexobjet = {
        IndexID: produit[x]._id,
        IndexNom: produit[x].name,
        IndexCouleur: produit[x].colors,
        indexDescrption: produit[x].description,
        IndexPrix: produit[x].price
    };
    var indexobjet_json = JSON.stringify(indexobjet);
    sessionStorage.setItem("index", indexobjet_json);

};
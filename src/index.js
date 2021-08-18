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
        const produit = resultat;
        alert(resultat);
        alert(produit[0].colors[1])
        alert(produitNombre)
        document
            .getElementById("essai")
            .innerText = produit[0].name;
    })
    .catch(function(err) {
        alert("message erreur");
        // Une erreur est survenue
    });
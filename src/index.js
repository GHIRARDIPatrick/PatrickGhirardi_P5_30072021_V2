// ________________________________________________________________________________________________________________
// INDEX - Affichage des oursons en liste

alert("JS INDEX - Ca fonctionne");

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
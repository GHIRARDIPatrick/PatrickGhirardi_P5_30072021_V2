// ________________________________________________________________________________________________________________
// PANIER - Controle Formulaire

console.log("JS PANIER - Ca fonctionne");



var messageErreur;

document.getElementById("panier-prenom").addEventListener("input", function() {
    var code = document.getElementById("panier-prenom").value;
    if (!code.match(/^([a-zA-Z -]+)$/)) {
        document.getElementById("panier-prenom").style.backgroundColor = 'salmon';
        document.getElementById("panier-validation").disabled = true;
        messageErreur("Uniquement des lettres, ainsi que ESPACE et TIRET");
    } else {
        document.getElementById("panier-prenom").style.backgroundColor = 'chartreuse';
        document.getElementById("panier-validation").disabled = false;
    }
});

document.getElementById("panier-nom").addEventListener("input", function() {
    var code = document.getElementById("panier-nom").value;
    if (!code.match(/^([a-zA-Z -]+)$/)) {
        document.getElementById("panier-nom").style.backgroundColor = 'salmon';
        document.getElementById("panier-validation").disabled = true;
        messageErreur("Uniquement des lettres, ainsi que ESPACE et TIRET");
    } else {
        document.getElementById("panier-nom").style.backgroundColor = 'chartreuse';
        document.getElementById("panier-validation").disabled = false;
    }
});

document.getElementById("panier-adresse").addEventListener("input", function() {
    var code = document.getElementById("panier-adresse").value;
    if (!code.match(/^([a-zA-Z0-9 -]+)$/)) {
        document.getElementById("panier-adresse").style.backgroundColor = 'salmon';
        document.getElementById("panier-validation").disabled = true;
        messageErreur("Uniquement des chiffres et des lettres, ainsi que ESPACE et TIRET");
    } else {
        document.getElementById("panier-adresse").style.backgroundColor = 'chartreuse';
        document.getElementById("panier-validation").disabled = false;
    }
});

document.getElementById("panier-cpostal").addEventListener("input", function() {
    var code = document.getElementById("panier-cpostal").value;
    if (!code.match(/^([0-9]+)$/)) {
        document.getElementById("panier-cpostal").style.backgroundColor = 'salmon';
        document.getElementById("panier-validation").disabled = true;
        messageErreur("Uniquement des chiffres");
    } else {
        document.getElementById("panier-cpostal").style.backgroundColor = 'chartreuse';
        document.getElementById("panier-validation").disabled = false;
    }
});

document.getElementById("panier-ville").addEventListener("input", function() {
    var code = document.getElementById("panier-ville").value;
    if (!code.match(/^([a-zA-Z -]+)$/)) {
        document.getElementById("panier-ville").style.backgroundColor = 'salmon';
        document.getElementById("panier-validation").disabled = true;
        messageErreur("Uniquement des lettres, ainsi que ESPACE et TIRET");
    } else {
        document.getElementById("panier-ville").style.backgroundColor = 'chartreuse';
        document.getElementById("panier-validation").disabled = false;
    }
});

document.getElementById("panier-email").addEventListener("input", function() {
    var code = document.getElementById("panier-email").value;
    if (!code.length > 0) {
        document.getElementById("panier-email").style.backgroundColor = 'salmon';
        document.getElementById("panier-validation").disabled = true;
    } else {
        document.getElementById("panier-email").style.backgroundColor = 'chartreuse';
        document.getElementById("panier-validation").disabled = false;
    }
});



// PANIER - FENETRE MESSAGE ERREUR FORMULAIRE
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
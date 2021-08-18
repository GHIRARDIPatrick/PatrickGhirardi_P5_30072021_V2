// ________________________________________________________________________________________________________________
// PANIER - Controle Formulaire

alert("JS PANIER - Ca fonctionne");

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
    if (!code.match(/^([0-9]+)$/)) {
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
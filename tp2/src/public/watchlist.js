function rechercherWatchlist() {
    var formulaire = document.getElementById('formulaire');
    var idUtilisateur = document.getElementById('idUtilisateur').value;

    formulaire.action = '/watchlists/' + idUtilisateur;
    formulaire.submit();
}
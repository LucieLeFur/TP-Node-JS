function validerFormulaire() {
    var formulaire = document.getElementById('formulaire');
    var idWatchlistItem = document.getElementById('idWatchlistItem').value;

    formulaire.action = '/watchlistsItems/' + idWatchlistItem;
    formulaire.submit();
}

function modifierUtilisateur() {
    var formulaire = document.getElementById('formulaire');
    var idUtilisateur = document.getElementById('idUtilisateur').value;
    
    formulaire.action = '/utilisateurs/' + idUtilisateur;
    formulaire.submit();
}
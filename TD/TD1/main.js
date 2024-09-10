

//La première instruction `console.log` récupère la valeur du deuxième élément enfant de l'élément ayant l'identifiant "addForm".
console.log(document.getElementById("addForm").children[1].value);
//La deuxième instruction `console.log` récupère la valeur du deuxième élément enfant de l'élément parent de l'élément ayant l'identifiant "item".
console.log(document.getElementById("item").parentNode.children[1].value);

/*La troisième instruction `console.log` récupère la valeur d'un élément profondément imbriqué dans la structure du DOM. Elle part 
de l'élément ayant l'identifiant "filter" et traverse plusieurs niveaux dans l'arbre du DOM pour finalement récupérer la valeur d'un élément spécifique.*/
console.log(document.getElementById("filter").parentNode.parentNode.parentNode.parentNode.parentNode.children[2].children[0].children[1].children[1].value);

function modifPlaceHolder() {

    document.getElementById("filter").placeholder = "Rechercher un item dans la table … ";
}
function recupClass(idcherche) {
    console.log(document.getElementById(idcherche).parentNode.children[1].className);
}
function recupName(namecherche) {
    console.log(document.getElementByName(namecher>che).type);
}

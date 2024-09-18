

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
function recupClassQ2(idcherche) {
    console.log(document.getElementById(idcherche).parentNode.children[1].className);
}
function recupNameQ3(namecherche) {
    console.log(document.getElementByName(namecher > che).type);
}
function getHeadersQ4() {

    let headers = document.querySelectorAll('.table thead th'); headers.forEach(e => { console.log(e.textContent); });
}

function applyBorderStyleQ5(){
    document.getElementByTagName("table").style.border = "1px solid black";
}
function applyBoderStyleByClassNameQ6(){
    document.getElementByClassName("table").style.border = "1px solid black";
}
function changeValueQ7(classe) {
    document.getElementByClassName(classe).value = "Nouvelle valeur";
}
function knowIdQ8() {
    const itemElement = document.getElementById("item");
    const cardElement = itemElement.closest(".card");
    const cardId = cardElement.id;
    console.log(cardId);
}
function recupClass(idcherche) {
    console.log(document.querySelector("#" + idcherche + " > :nth-child(2)").className);
}

function recupName(namecherche) {
    console.log(document.querySelector("[name='" + namecherche + "']").type);
}

function getHeaders() {
    let headers = document.querySelectorAll('.table thead th');
    headers.forEach(e => {
        console.log(e.textContent);
    });
}

function applyBorderStyle() {
    document.querySelector("table").style.border = "1px solid black";
}

function applyBoderStyleByClassName() {
    document.querySelector(".table").style.border = "1px solid black";
}

function changeValue(classe) {
    document.querySelectorAll("." + classe).forEach(e => {
        e.value = "Nouvelle valeur";
    });
}

function knowId() {
    const itemElement = document.querySelector("#item");
    const cardElement = itemElement.closest(".card");
    const cardId = cardElement.id;
    console.log(cardId);
}
function Q10(params) {
    
}
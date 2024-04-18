(() =>{
let toDoListArray = [];

const form = document.querySelector(".form");
const input =document.querySelector(".form_input");
const ul = document.querySelector(".toDoList");

form.addEventListener("Submit", (e) => {
    let itemid = String(Date.now());
let toDoItem = input.Value;

addItemToDOM(itemid, toDoItem);
addItemToArray(itemid, toDoItem);
input.value = "";

})

ul.addEventListener('click', (e) => {
let id = e.target.getAttribute('data-id');
if(!id) return;
removeItemFromDOM(id);
removeItemFromArray(id);
});
function addItemToDOM(itemid, toDoItem){
    const li = document.createElement('li');
    li.setAttribute('data.id',itemid);
    li.innerText = toDoItem;
    ul.appendChild(li);
}
function addItemToArray(itemId, toDoItem) {
    toDoListArray.push({ itemid, toDoItem});
    console.log(toDoListArray);
}
function removeItemFromDOM(id){
    var li = document.querySelector('[data-id="' + id +'"]');
    //remove the element from DOM
    ul.removeChild(li);
}
function removeItemFromArray(id){
    toDoListArray = toDoListArray.filter((item) => item.itemid !== id);
    console.log(toDoListArray);
}
})();
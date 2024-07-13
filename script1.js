const inputBox = document.getElementById("input-box");
const listContianer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ""){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContianer.appendChild(li);
    }
}
let input = document.querySelector("#task");
let addbtn = document.querySelector("#addBtn");
let div = document.querySelector("#allTasks");

const addItem = ()=>{
    if(input.value == "") return;
    let listItem = document.createElement("div");
    let delBtn = document.createElement("button");
    delBtn.innerHTML = "Remove";
    delBtn.classList.add("delete");
    delBtn.classList.add("btn");
    delBtn.classList.add("btn-danger");
    let editBtn = document.createElement("button");
    editBtn.innerHTML = "Edit";
    editBtn.classList.add("edit");
    editBtn.classList.add("btn");
    editBtn.classList.add("btn-info");

    listItem.style.marginBottom = "5px";
    listItem.style.marginTop = "5px";
    let span = document.createElement("span");
    span.innerText =  `${input.value}`;
    let wrapDelAndEditBtn = document.createElement("div");
    wrapDelAndEditBtn.classList.add("wrapDelAndEditBtn")

    listItem.appendChild(span);
    wrapDelAndEditBtn.appendChild(delBtn);
    wrapDelAndEditBtn.appendChild(editBtn);
    listItem.appendChild(wrapDelAndEditBtn);// listItem.appendChild(delBtn);  // listItem.appendChild(editBtn);
    
    div.appendChild(listItem);
    input.value = "";
}
addbtn.addEventListener("click",addItem);
div.addEventListener("click",function(event){
    console.dir(event.target); // button
    if(event.target.nodeName == "BUTTON" && event.target.outerText== "Remove" ){
        let parent = event.target.parentElement.parentElement;
        parent.remove();
    } 
    else if(event.target.nodeName == "BUTTON" && event.target.outerText== "Edit" ){
        let val = event.target.parentElement.parentElement.innerText;
        input.value = val.substr(0,val.length-11);
    }
    else console.log("not delete");
})
input.addEventListener("keydown",(event)=>{
    if(event.code== "Enter"){
        if(input.value !="")
        addItem();
    }
})

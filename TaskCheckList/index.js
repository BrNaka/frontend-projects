const tasks = [];
const tasksDone = [];
const addBtn = document.getElementById("addBtn");
const input = document.getElementById("add");
const toDo = document.getElementById("toDo");
const done = document.getElementById("tasksDone");

addBtn.addEventListener("click", (event) => { 
    if (input.value != "") {
        tasks.push(input.value); 
        toDo.innerHTML = "";
        tasks.map(item => { 
            toDo.innerHTML += `<li> <i class="fas fa-arrow-alt-circle-right"> </i> <p>${item}</p> </li>`;
        });
        input.value = "";
        event.preventDefault(); 
    }
});

document.addEventListener("click", (e) => {
    if (e.target && e.target.nodeName == "P") {
        let checked = tasks.findIndex(item => item == e.target.textContent); 
        tasksDone.push(e.target.textContent);
        tasks.splice(checked, 1);
        done.innerHTML = "";
        toDo.innerHTML = "";
        tasks.map(item => {
            toDo.innerHTML += `<li> <i class="fas fa-arrow-alt-circle-right"> </i> <p>${item}</p> </li>`;
        });
        tasksDone.map(item => {
            done.innerHTML += `<li> <i class="fas fa-check"> </i> <span>${item}</span> </li>`;
        });
    }
});

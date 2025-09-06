function addTask(){
    let tex = document.getElementById("taskInput").value;
    if (tex.trim() === "") return alert("Please, Enter a Task!!");

    const tasklist = document.getElementById("tasks");

    const taskDiv = document.createElement("div");
    taskDiv.className = "task";

    const taskspan = document.createElement("span");
    taskspan.textContent = tex;

    const circle = document.createElement("input");
    circle.type = "checkbox";
    circle.className = "circle";
    circle.addEventListener("change", () => {
    if (circle.checked) {
        taskspan.classList.add("done");
        showMotivation(" Great job! You are the king of the world 👑");
    } else {
        taskspan.classList.remove("done");
    }
});
    function showMotivation(message) {
    const box = document.getElementById("motivation");
    box.textContent = message;
    box.classList.remove("hidden");
    box.classList.add("show");

   
    setTimeout(() => {
        box.classList.remove("show");
        box.classList.add("hidden");
    }, 2500);
}

    const deleteBut = document.createElement("button");
    deleteBut.className = "delete-btn";
    deleteBut.onclick = () => {
        taskDiv.remove();
    }

    taskDiv.appendChild(taskspan);
    taskDiv.appendChild(circle);
    taskDiv.appendChild(deleteBut);
    tasklist.appendChild(taskDiv);

    document.getElementById("taskInput").value = "";
}



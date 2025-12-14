// 4) შექმენით toDo აპლიკაცია სადაც input-ით შეყვანილი task დაემატება DOM-ში list-ის სახით თითო task-ს ექნება delete ღილაკი გამოიყენეთ JSON.stringify მონაცემების localStorage-ში შესანახად და JSON.parse რომ რეფრეშის შემდეგ tasks გამოჩნდეს filter გამოიყენეთ წაშლილი task-ების ამოსაღებად
// Requirements

// 1. HTML input და add ღილაკი
// 2. JS ფუნქცია addTask რომელიც დაამატებს ახალ task DOM-ში
// 3. delete ღილაკი თითო task-ის წასაშლელად
// 4. task-ების შენახვა localStorage-ში JSON.stringify გამოყენებით
// 5. localStorage-ის ამოღება JSON.parse და არსებული task-ების რენდერი
// // 6. filter რომ წაშლილი task-ები არ დარჩეს მასივში

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const task = taskInput.value.trim();
    if (task) {
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        renderTasks();
        taskInput.value = "";
    }
}

function deleteTask(index) {
    tasks = tasks(tasks.filter(task  =>️ task !== tasks[index]));
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}
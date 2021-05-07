{
    const tasks = [];
    const newTaskAdd = () => {
        const newTask = document.querySelector(".js-inputText");
        const newTaskText = newTask.value.trim();
        if (newTaskText === "") {
            newTask.focus();
            return;
        }
        tasks.push({
            content: newTaskText,
        });
        newTask.value = "";
    };
    const toggleChecked = () => {
        const checkButtons = document.querySelectorAll(".js-done");
        checkButtons.forEach((checkButton, index) => {
            checkButton.addEventListener("click", () => {
                tasks[index].done = !tasks[index].done;
                render();
            });
        });
    };
    const deleteTask = () => {
        const deleteButtons = document.querySelectorAll(".js-delete");
        deleteButtons.forEach((deleteButton, index) => {
            deleteButton.addEventListener("click", () => {
                tasks.splice(index, 1);
                render();
            });
        });
    };
    const onFormSubmit = (event) => {
        event.preventDefault();
        newTaskAdd();
        render();
    };
    const render = () => {
        let htmlString = "";
        for (const task of tasks) {
            htmlString += `
            <li class="list__item">
         <button class="checkedButton js-done ">${task.done ? "&check;"  : "" }</button>
                    <span class="list__item--content ${task.done ? "list__item--done" : "" }">${task.content}</span>
            <button class="deleteButton js-delete">&cross;</button>
            </li> `
        }
        document.querySelector(".js-listTask").innerHTML = htmlString;
        toggleChecked();
        deleteTask();
    };
    const init = () => {
        const formTask = document.querySelector(".js-formTask");
        formTask.addEventListener("submit", onFormSubmit);
    };
    init();
}
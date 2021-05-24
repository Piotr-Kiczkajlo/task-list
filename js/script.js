{
    let tasks = [];
    let hideDoneTasks = false;

    const newTaskAdd = () => {
        const newTask = document.querySelector(".js-inputText");
        const newTaskText = newTask.value.trim();
        if (newTaskText === "") {
            newTask.focus();
            return;
        }
        tasks = [
            ...tasks,
            { content: newTaskText, }
        ];
        newTask.value = "";
    };
    const toggleCheckTask = (index) => {
        tasks = [
            ...tasks.slice(0, index),
            {...tasks[index], done: !tasks[index].done },
            ...tasks.slice(index + 1),
        ];
        render();
    };
    const deleteTask = index => {
        tasks = [
            ...tasks.slice(0, index),
            ...tasks.slice(index + 1),
        ];
        render();
    };
    const addCheckedEvent = () => {
        const checkButtons = document.querySelectorAll(".js-check");
        checkButtons.forEach((checkButton, index) => {
            checkButton.addEventListener("click", () => {
                toggleCheckTask(index);
            });
        });
    };
    const addDeleteEvent = () => {
        const deleteButtons = document.querySelectorAll(".js-delete");
        deleteButtons.forEach((deleteButton, index) => {
            deleteButton.addEventListener("click", () => {
                deleteTask(index);
            });
        });
    };
    const onFormSubmit = (event) => {
        event.preventDefault();
        newTaskAdd();
        render();
    };
    const renderTasks = () => {
        let htmlString = "";
        for (const task of tasks) {
            htmlString += `
        <li class="list__item ${task.done && hideDoneTasks ? "list__item--hide" : ""}">
        <button class="list__button list__button--check  js-check">${task.done ? "&check;"  : "" }</button>
            <span class="list__item--content ${task.done ? "list__item--done" : "" }">${task.content}</span>
        <button class="list__button list__button--delete js-delete">&#128465;</button>
        </li> `
        }
        document.querySelector(".js-listTask").innerHTML = htmlString;
    };
    const markAllTask = () => {
        tasks = tasks.map(task => ({
            ...task,
            done: true,
        }));
        render();
    };
    const toggleHideDoneTask = () => {
        hideDoneTasks = !hideDoneTasks;
        render();
    };
    const finishAllTasksEvents = () => {
        const finishAllTasks = document.querySelector(".js-finishTasks");
        finishAllTasks.addEventListener("click", () => {
            markAllTask();
        });
    };
    const hideFinishTasksEvents = () => {
        const hideFinishTasks = document.querySelector(".js-hideTasks");
        hideFinishTasks.addEventListener("click", () => {
            toggleHideDoneTask();
        });
    };
    const renderHeaderButtons = () => {
        let manageTasksButton = "";
        if (tasks.length > 0) {
            manageTasksButton += `
            <button class="manageTasksButton js-hideTasks"> ${hideDoneTasks  ? "Pokaż ukończone" : "Ukryj ukończone"}</button>
            <button class="manageTasksButton js-finishTasks" ${tasks.every(({done}) => done) ? "disabled" : ""}>Ukończ wszystkie</button>    
            `
        };
        document.querySelector(".js-headerButtons").innerHTML = manageTasksButton;
    };
    const render = () => {
        renderTasks();
        renderHeaderButtons();
        finishAllTasksEvents();
        hideFinishTasksEvents();
        addCheckedEvent();
        addDeleteEvent();
    };
    const init = () => {
        const formTask = document.querySelector(".js-formTask");
        formTask.addEventListener("submit", onFormSubmit);
    };
    init();
}
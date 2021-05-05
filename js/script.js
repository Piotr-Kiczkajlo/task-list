{
    const tasks = [{
            content: "zaprowadzić Kacpra",
            done: false
        },
        {
            content: "zrobić zakupy",
            done: true
        },
    ];
    const render = () => {
        let htmlString = "";
        for (const task of tasks) {
            htmlString += `
            <li 
            ${task.done ? "class=\"list__item--done\"" : ""}" >
            <button class="js-done">Zrobione</button>
            ${task.content}
            <button class="js-remove">Usuń</button>
        </li>
        `
        };
        document.querySelector(".js-listTask").innerHTML = htmlString;
    };
    const init = () => {
        const formTask = document.querySelector(".js-formTask");
        formTask.addEventListener("submit", (event) => {
            event.preventDefault();
            const newTask = document.querySelector(".js-newTask").value.trim();
            console.log(newTask);
        });

    };
    render();
    init();
}
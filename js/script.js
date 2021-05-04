{
    const tasks = [{
            content: "zaprowadzić Kacpra",
            done: true
        },
        {
            content: "zrobić zakupy",
            done: false
        },
    ];

    const render = () => {
        let htmlString = "";
        for (const task of tasks) {
            htmlString += `
        <li
            ${task.content}
        </li>
        `
        };
        document.querySelector(".js-listTask").innerHTML = htmlString;
    };
    const init = () => {
        render();
    };

    init();
}
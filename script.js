document.addEventListener("DOMContentLoaded", () => {
    const taskTitle = document.getElementById("taskTitle");
    const taskDate = document.getElementById("taskDate");
    const taskTime = document.getElementById("taskTime");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    function createTaskElement(title, date, time) {
        const li = document.createElement("li");
        li.classList.add("task");

        const taskInfo = document.createElement("div");
        taskInfo.classList.add("task-info");

        const taskTitleEl = document.createElement("div");
        taskTitleEl.classList.add("task-title");
        taskTitleEl.textContent = title;

        const taskDateTime = document.createElement("div");
        taskDateTime.classList.add("task-date-time");
        taskDateTime.textContent = `${date || ""} ${time || ""}`;

        taskInfo.appendChild(taskTitleEl);
        taskInfo.appendChild(taskDateTime);

        const btnContainer = document.createElement("div");
        btnContainer.classList.add("task-buttons");

        const completeBtn = document.createElement("button");
        completeBtn.textContent = "✔";
        completeBtn.classList.add("complete-btn");
        completeBtn.onclick = () => li.classList.toggle("completed");

        const editBtn = document.createElement("button");
        editBtn.textContent = "✏";
        editBtn.classList.add("edit-btn");
        editBtn.onclick = () => {
            taskTitle.value = taskTitleEl.textContent;
            taskDate.value = date;
            taskTime.value = time;
            li.remove();
        };

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "🗑";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.onclick = () => {
            li.style.animation = "fadeOut 0.3s forwards";
            setTimeout(() => li.remove(), 300);
        };

        btnContainer.appendChild(completeBtn);
        btnContainer.appendChild(editBtn);
        btnContainer.appendChild(deleteBtn);

        li.appendChild(taskInfo);
        li.appendChild(btnContainer);

        return li;
    }

    addTaskBtn.addEventListener("click", () => {
        if (taskTitle.value.trim() === "") {
            alert("Please enter a task!");
            return;
        }
        const taskEl = createTaskElement(taskTitle.value, taskDate.value, taskTime.value);
        taskList.appendChild(taskEl);
        taskTitle.value = "";
        taskDate.value = "";
        taskTime.value = "";
    });
});

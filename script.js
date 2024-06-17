window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const category = document.querySelector("#task-category");
    const date = document.querySelector("#task-date");
    const priority = document.querySelector("#task-priority");
    const list_el = document.querySelector("#tasks");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;
        const taskCategory = category.value;
        const taskDate = date.value;
        const taskPriority = priority.value;

        if (!task) {
            alert("Please fill out the task");
            return;
        }

        const task_el = document.createElement('div');
        task_el.classList.add('task');

        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content');

        const task_input_el = document.createElement('input');
        task_input_el.classList.add('text');
        task_input_el.type = 'text';
        task_input_el.value = task;
        task_input_el.setAttribute('readonly', 'readonly');

        const task_category_el = document.createElement('span');
        task_category_el.classList.add('category');
        task_category_el.innerText = `Category: ${taskCategory}`;

        const task_date_el = document.createElement('span');
        task_date_el.classList.add('date');
        task_date_el.innerText = `Due Date: ${taskDate}`;

        const task_priority_el = document.createElement('span');
        task_priority_el.classList.add('priority');
        task_priority_el.innerText = `Priority: ${taskPriority}`;
        task_priority_el.style.color = taskPriority === 'low' ? 'var(--low-priority)' :
            taskPriority === 'medium' ? 'var(--medium-priority)' : 'var(--high-priority)';

        task_content_el.appendChild(task_input_el);
        task_content_el.appendChild(task_category_el);
        task_content_el.appendChild(task_date_el);
        task_content_el.appendChild(task_priority_el);

        task_el.appendChild(task_content_el);

        const task_actions_el = document.createElement('div');
        task_actions_el.classList.add('actions');

        const task_edit_el = document.createElement('button');
        task_edit_el.classList.add('edit');
        task_edit_el.innerText = 'Edit';

        const task_delete_el = document.createElement('button');
        task_delete_el.classList.add('delete');
        task_delete_el.innerText = 'Delete';

        const task_complete_el = document.createElement('button');
        task_complete_el.classList.add('complete');
        task_complete_el.innerText = 'Complete';

        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);
        task_actions_el.appendChild(task_complete_el);

        task_el.appendChild(task_actions_el);

        list_el.appendChild(task_el);

        input.value = '';
        category.value = '';
        date.value = '';
        priority.value = 'low';

        task_edit_el.addEventListener('click', (e) => {
            if (task_edit_el.innerText.toLowerCase() == "edit") {
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
                task_edit_el.innerText = "Save";
            } else {
                task_input_el.setAttribute("readonly", "readonly");
                task_edit_el.innerText = "Edit";
            }
        });

        task_delete_el.addEventListener('click', (e) => {
            list_el.removeChild(task_el);
        });

        task_complete_el.addEventListener('click', (e) => {
            task_el.classList.toggle('complete');
            if (task_el.classList.contains('complete')) {
                task_complete_el.innerText = "Undo";
                task_complete_el.classList.add('complete-task');
            } else {
                task_complete_el.innerText = "Complete";
                task_complete_el.classList.remove('complete-task');
            }
        });
    });
});

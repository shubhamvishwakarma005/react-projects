const input = document.getElementById('task-input')
const addbtn = document.getElementById('add-task-btn')
const tasklist = document.getElementById('task-list')


function Task() {

    addbtn.addEventListener('click', () => {
        const userTask = input.value;
        console.log(userTask);

        // take data and time 
        const currentDate = new Date();

        let parent = document.createElement('div');
        let child = document.createElement('h2');
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox'

        child.textContent = `${userTask}- ${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()} `;

        parent.appendChild(checkbox);
        parent.appendChild(child);
        tasklist.appendChild(parent);

        input.value = '';


        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                child.style.textDecoration = 'line-through';
                child.style.color = 'red';
                console.log('checked');
            } else {
                child.style.textDecoration = 'none';
                child.style.color = 'green';
                console.log('unchecked');
            }
        })

        parent.addEventListener('dblclick', () => {
            tasklist.removeChild(parent);  
            console.log('task deleted');         
        })


        // storing in location storage  
        let storeTask = JSON.parse(localStorage.getItem('tasks')) || [];
        storeTask.push({ task: userTask, date: currentDate.toLocaleDateString(), time: currentDate.toLocaleTimeString() });
        localStorage.setItem('tasks', JSON.stringify(storeTask));

    })
}


Task()
const input = document.getElementById('task-input')
const addbtn = document.getElementById('add-task-btn')
// const tasklist = document.getElementById('task-list')

const tasksList = document.getElementById('task-collect-list')


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

    //    if(child.textContent === ""){
    //     alert('Enter input value!')
    //      return 
    //    }

        child.textContent = `${userTask}- ${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()} `;
        // addition 
        parent.appendChild(checkbox);
        parent.appendChild(child);
        tasksList.appendChild(parent);

        input.value = '';


            // checkbox       
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                child.style.textDecoration = 'line-through';
                child.style.color = 'red';
                child.style.cursor="pointer"
                console.log('checked');
            } else {
                child.style.textDecoration = 'none';
                child.style.color = 'green';
                console.log('unchecked');
            }
        })


            // Deletion  
        parent.addEventListener('dblclick', () => {
            tasksList.removeChild(parent);  
            console.log('task deleted');         
        })


        // storing in location storage  
        // let storeTask = JSON.parse(localStorage.getItem('tasks')) || [];
        // storeTask.push({ task: userTask, date: currentDate.toLocaleDateString(), time: currentDate.toLocaleTimeString() });
        // localStorage.setItem('tasks', JSON.stringify(storeTask));

    })
}


Task()
const taskBox = document.getElementsByClassName('task')
const inputBox = document.getElementById('task-input')
const addBtn = document.getElementById('add-task-btn')

// const TaskCollector = document.getElementById('task-collections')
const TaskCollectorBox = document.getElementById('task-collect-list')


function Task(){

    addBtn.addEventListener('click', ()=>{

        const inputValue = inputBox.value


        const newTasks = document.createElement('li')
         newTasks.textContent = inputValue 

        TaskCollectorBox.appendChild(newTasks)

        inputBox.value = " "
    })

}

Task()
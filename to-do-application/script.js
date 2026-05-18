const inputBox = document.getElementById('task-input');
const addbtn = document.getElementById('add-task-btn');
const taskLists = document.getElementById('task-collect-list');


function ToDoAction() {

    let Tasks = []
    console.log(Tasks)

    addbtn.addEventListener('click', () => {

        // input Value 
        let inputTexts = inputBox.value

        let obj = {
            id: Date.now(),
            text: inputTexts,
            completed: false
        }

        Tasks.push(obj)

        addTask(obj)
        inputBox.value = ""

    })

    // add task 
    function addTask(taskObj){

        let UserTask = document.createElement('li')
        UserTask.textContent = taskObj.text
        taskLists.appendChild(UserTask)
    }
}

ToDoAction()
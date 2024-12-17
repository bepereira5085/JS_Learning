let taskList
var initial_message = document.getElementById('tasklist').innerHTML

/* CARREGAR A LISTA */

function loadTasks() {
    let list = localStorage.getItem('taskList')
    taskList = list ? JSON.parse(list) : []
    updateList()
}


/* CONSTRÓI A LISTA DE TAREFA */

function updateList() {

    let tasklist = document.getElementById('tasklist')
    tasklist.innerHTML = ''

    if (taskList.length > 0) {
        
        let newOl = document.createElement('ol')
        tasklist.append(newOl)

        taskList.forEach((task, index) => {
            let newLi = document.createElement('li')
            newLi.classList = "task"
            let icon_delete = document.createElement('span')
            let done_task = document.createElement('input')
            done_task.type = 'checkbox'
            let task_listened = document.createElement('span')
            let newDiv = document.createElement('div')
            
            done_task.classList = 'done_task' 
            task_listened.innerHTML = task

            icon_delete.classList = 'material-icons'
            icon_delete.innerHTML = 'delete'
            icon_delete.onclick = () => removeTask(index)

            newDiv.append(done_task, task_listened)
            newLi.append( newDiv, icon_delete)
            newOl.append(newLi)
        });
        
    } else {
        tasklist.innerHTML = initial_message
    }
    console.log(taskList)
}


/* ADICIONAR TAREFA */

function addTask(event){
    event.preventDefault()
    let task = document.getElementById('task_input')
    if (task.value == "") {
        window.alert("Por favor, insira uma tarefa")
    } else {
        taskList.push(task.value.trim())
        localStorage.setItem('taskList', JSON.stringify(taskList))
    }
    task.value = ''
    updateList()
}


/* REMOVER UMA TAREFA */

function removeTask(index) {
    taskList.splice(index, 1)
    localStorage.setItem('taskList', JSON.stringify(taskList))
    updateList()
}
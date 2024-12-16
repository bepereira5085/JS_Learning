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
            let position_number = document.createElement('span')
            let task_listened = document.createElement('span')
            
            position_number.innerHTML = `${index + 1}°`
            task_listened.innerHTML = task

            icon_delete.classList = 'material-icons'
            icon_delete.innerHTML = 'delete'
            icon_delete.onclick = () => removeTask(index)

            newLi.append( position_number, task_listened, icon_delete)
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
    let task = document.getElementById('task')
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
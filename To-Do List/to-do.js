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
    
    //BOTAO DE LIMPAR LISTA

    let remove_all = document.createElement('i')
    remove_all.classList = 'material-icons'
    remove_all.innerHTML = 'playlist_remove'
    remove_all.id = 'remove_all'
    remove_all.onclick = () => removeAll()
    // tasklist.append(remove_all)

    if (taskList.length > 0) {
        
        let newOl = document.createElement('ol')
        tasklist.append(newOl)
        
        //CRIA A LISTA DE TAREFA
        taskList.forEach((task, index) => {

            let newLi = document.createElement('li')
            newLi.classList = "task"
            let newDiv = document.createElement('div')
            
            // CRIA CHECKBOX --------------------------------
            let checkbox_label = document.createElement('label')
            checkbox_label.innerHTML = 'check'
            checkbox_label.classList = 'material-icons'
            checkbox_label.id = 'check_task'
            checkbox_label.onclick = function (index) {
                done_task.value = true
                console.log('sucesso')
            }

            let done_task = document.createElement('input')
            done_task.type = 'checkbox'
            done_task.classList = 'done_task'
            done_task.id = 'done_task'
            checkbox_label.append(done_task)

            //-----------------------------------------------
            
            let task_listened = document.createElement('span')
            task_listened.innerHTML = task
            
            let icon_delete = document.createElement('span')
            icon_delete.classList = 'material-icons'
            icon_delete.innerHTML = 'delete'
            icon_delete.onclick = () => removeTask(index)
            
            newDiv.append(checkbox_label, task_listened)
            newLi.append( newDiv, icon_delete)
            newOl.append(newLi)
        })
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

/* REMOVER TODAS AS TAREFAS */

function removeAll () {
    taskList = []
    updateList()
}
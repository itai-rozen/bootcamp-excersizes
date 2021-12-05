const todoInputEl = dqs('#todo-input')
const importanceSelectEl = dqs('.importance')
const addButtonEL = dqs('.add-btn')

const todoListEl = dqs('.todo-list')
const todos = [
    {
    id: 123,
    importance: 2,
    content: 'bla',
    isDone: false
},
    {
    id: 123,
    importance: 1,
    content: 'blablabla',
    isDone: false
},
    {
    id: 123,
    importance: 3,
    content: 'blabla',
    isDone: false
}
]
let inputId = 99999


const getTodoIdx = el => {
    console.log(el)
    const id = +(el.getAttribute("data-todo"))
    const idx = todos.findIndex(todo => todo.id === id)
    return idx
}

const renderTodos = () => {
    todos.forEach(todo => {
        let todoEl = createLiElement(todo)
        todoListEl.append(todoEl)
    })
}

const strikeEl = e => {
    let el = e.target.parentNode.parentNode
    el.classList.toggle('line-through')
    let idx = getTodoIdx(el)
    todos[idx].isDone = true
}


// CRUD
// Create 

const createTodoObject = (value, importance) => {
    return {
        id: inputId++,
        importance: importance,
        content: value,
        isDone: false
    }
}

const createLiElement = obj => {
    const { id, importance, content } = obj
    const li = create('li')
    li.classList.add('todo-item')
    li.classList.add('flex')
    li.classList.add('space-between')
    const innerHtml = `
                       <input class="todo-checkbox" type="checkbox" name="" id="" />
                       <p class="item-importance">${importance} </p>
                       <p contenteditable="false" class="item-content">${content}</p>
                       
                       <div data-todo="${id}" class="btn-container flex">
                       <button class="remove-btn"><i class="fas fa-trash-alt fa-2x"></i></button>
                       <button class="edit-btn"><i class="fas fa-edit fa-2x"></i></button>
                       </div>`
    li.innerHTML = innerHtml
    console.log(li)
    return li
}

const addTodo = () => {
    const inputValue = todoInputEl.value
    const importanceValue = importanceSelectEl.options[importanceSelectEl.selectedIndex].value
    const todoObj = createTodoObject(inputValue, importanceValue)
    todos.push(todoObj)
    const todoLiElement = createLiElement(todoObj)
    addEventListenerstoEl(todoLiElement)
    todoListEl.append(todoLiElement)
}

// Remove

const deleteTodo = e => {
    const todoIdx = getTodoIdx(e.target.parentNode.parentNode)
    console.log('idx @ deleteTodo:  ', todoIdx)
    todos.splice(todoIdx, 1)
    console.log('element 2b removed: ', todoListEl.children[todoIdx],)
    todoListEl.removeChild(todoListEl.children[todoIdx])
}

// Update

  const saveChanges = (el, content, importance) => {
    const contentValue = content.querySelector('.update-input').value
    const importanceValue = importance.querySelector('.update-importance').value
    const buttonContainer = el.querySelector('.btn-container')
    let idx = getTodoIdx(buttonContainer)
    todos[idx].importance = importanceValue
    todos[idx].content = contentValue
    let todoContent = el.querySelector('.item-content')
    let todoImportance = el.querySelector('.item-importance')
    todoContent.innerHTML = contentValue 
    todoImportance.innerHTML = importanceValue 
    el.classList.remove('edit')
    console.log('el after saving changes: ',el)
}

const handleUpdateEvent = (el, content, importance, prevContent, prevImportance) => {
    el.addEventListener('keyup', e => {
        if (e.key === 'Escape') {
            importance.innerHTML = `${prevImportance}`
            content.innerHTML = `${prevContent}`
            el.classList.remove('edit')
        }
        else if (e.key === 'Enter') {
            saveChanges(el,content,importance)
        }
        else return
    })
    const saveEditButton = content.querySelector('.save-edit-btn')
    saveEditButton.addEventListener('click', () => {
        saveChanges(el,content,importance)
    })
}

const openUpdateInputs = (el, content, importance) => {
    let prevContent = content.innerHTML
    let prevImportance = importance.innerHTML
    importance.innerHTML = `<select name="" id="importance" class="update-importance br5">
                                <option value="1">1: very</option>
                                <option value="2">2: slightly</option>
                                <option value="3" selected>3: not so much</option></select>`
    content.innerHTML = `<input id="update-input" class="update-input br5" type="text" />
                             <button class="save-edit-btn">Save</button>`
    handleUpdateEvent(el, content, importance, prevContent, prevImportance)

}

const updateTodo = e => {
    const todoIdx = getTodoIdx(e.target.parentNode.parentNode)
    let todoLiElement = todoListEl.children[todoIdx]
    console.log('todo before saving changes: ',todoLiElement)
    let todoContent = todoLiElement.querySelector('.item-content')
    let todoImportance = todoLiElement.querySelector('.item-importance')
    openUpdateInputs(todoLiElement, todoContent, todoImportance)
    addClass(todoLiElement, 'edit')

}


// Event listeners
const addEventListenerstoEl = el => {
    const removeButtonEl = el.querySelector('.remove-btn')
    const editButtonEl = el.querySelector('.edit-btn')
    const checkBoxEl = el.querySelector('.todo-checkbox')
    removeButtonEl.addEventListener('click', deleteTodo)
    editButtonEl.addEventListener('click', updateTodo)
    checkBoxEl.addEventListener('change', strikeEl)
}


addButtonEL.addEventListener('click', addTodo)
renderTodos()
// todoInputEl.addEventListener('keyup', addTodo)

document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const newTaskForm = document.getElementById('create-task-form')
  newTaskForm.addEventListener('submit', createNewTask)
})

function createNewTask(e) {
  e.preventDefault(e)
  const newTaskDescription = document.getElementById('new-task-description')
  const newTask = document.createElement('li')
  const btn = document.createElement('button')
  btn.addEventListener('click', deleteTask)
  btn.textContent = 'X'
  newTask.textContent = `${newTaskDescription.value} `
  newTask.appendChild(btn).style.position = 'inherit'
  appendTask(newTask)
  e.target.reset()
}

function appendTask(newTask) {
  document.getElementById('tasks').appendChild(newTask)
}

function deleteTask(e) {
  e.target.parentNode.remove()
}
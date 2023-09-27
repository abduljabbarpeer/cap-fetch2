const root = document.getElementById("root")

const displayData = (data) => {
  root.innerHTML = ""
  let todoContainer = document.createElement("div")
  todoContainer.className = "todo-container"

  data.forEach(({ id, title, completed }) => {
    // Create a card
    let todoCard = document.createElement("div")
    todoCard.className = "todo-card"

    // Displays todo ID
    let todoId = document.createElement("p")
    todoId.textContent = `ID : ${id}`

    // Displays todo title
    let todoTitle = document.createElement("p")
    todoTitle.textContent = `Title : ${title}`

    // Displays todo completion status
    let todoCompleted = document.createElement("p")
    todoCompleted.textContent = `Completed : ${completed.toString()}`

    // Delete button which will delete the todo
    let deleteButton = document.createElement("button")
    deleteButton.textContent = `DELETE`
    deleteButton.onclick = async function () {
      try {
        let res = await fetch(`http://localhost:3000/todos/${id}`, {
          method: "DELETE",
        })
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }

    // Toggle button which will edit the todo status
    let editButton = document.createElement("button")
    editButton.textContent = `TOGGLE`
    editButton.onclick = async function () {
      try {
        let res = await fetch(`http://localhost:3000/todos/${id}`, {
          method: "PATCH",
          body: JSON.stringify({
            completed: !completed,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        })
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }

    todoCard.append(todoId, todoTitle, todoCompleted, deleteButton, editButton)
    todoContainer.append(todoCard)
  })

  root.append(todoContainer)
}

async function init() {
  try {
    let res = await fetch(`http://localhost:3000/todos`)
    let data = await res.json()
    displayData(data)
  } catch (error) {
    console.log(error)
  }
}

init()

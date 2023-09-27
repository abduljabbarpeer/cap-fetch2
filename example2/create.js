async function createTodo() {
  try {
    // take task name as input value from user;
    let taskInputByUser = document.getElementById("title").value

    // create new task object
    const newTask = {
      title: taskInputByUser,
      completed: false,
    }

    // create new task object in database by making a post request;
    let res = await fetch(`http://localhost:3000/todos`, {
      method: "POST",
      body: JSON.stringify(newTask),
      headers: {
        "Content-Type": "application/json",
      },
    })

    let data = await res.json()

    console.log(`new item added to database`, data)

    // Redirect back to homepage;
    location.href = "index.html"
  } catch (error) {
    console.log(error)
  }
}

const { v4: uuidv4 } = require("uuid")

const user1 = {
  id: uuidv4(),
  name: "John",
}
const user2 = {
  id: uuidv4(),
  name: "Jack",
}
const user3 = {
  id: uuidv4(),
  name: "Jill",
}

console.log(user1, user2, user3)

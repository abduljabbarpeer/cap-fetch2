### Steps to get started;

```
node -v
```

```
npm -v
```

- Create project directory and initialize with

```
npm init
```

- Install a npm package called json-server which will help you in creating a fake/mock server. ( Since we don't have actual backend. we can have this as a work around ). Install it globally ( recommended )

```
npm install -g json-server
```

Now you can use in any of your project ( in your system )

- We will create a fake database and this will be a json file called db.json. Add your data in json format in this file.

db.json

```
{
  "todos":[
    {
      "id": 1,
      "title": "Learn Javascript",
      "completed": false
    }
  ]
}
```

- Run the following command to run this fake server we have created in your local system

```
json-server --watch db.json # we were able to do this as json-server is installed globally.
```

You might see a similar message in your terminal

```
// TERMINAL OUTPUT
> <project-name>@1.0.0 start
> json-server --watch db.json


  \{^_^}/ hi!

  Loading db.json
  Oops, db.json doesn't seem to exist
  Creating db.json with some default data

  Done

  Resources
  http://localhost:3000/todos

  Home
  http://localhost:3000

  Type s + enter at any time to create a snapshot of the database
  Watching...
```

Now whenever you need to get the list of todos from the server. hit the endpoint as described above.

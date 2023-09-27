### 1. **Initialize a New Project :**

```bash
npm init -y
```

This will create a **`package.json`** file with default values.

```json
{
  "name": "todo-with-json-server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

### 2. **Install a Package ( NPM Packages required for our particular project ) :**

\*\*\*\*I want to install the following packages for our project

https://github.com/typicode/json-server

[npm: json-server](https://www.npmjs.com/package/json-server)

I want to install `json-server` globally in my system and not locally.

This command will install `json-server` globally

```bash
npm install -g json-server
```

**package.json** file after installations ( You can observe no dependencies added as json-server is not locally installed to this project but a global installation )

```json
{
  "name": "todo-with-json-server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

This means that you will be able to use `json-server` package in any other project as well in your system.

#### Build Rest API from scratch in Node.js

##### Steps to use this code base

1. clone https://github.com/CsCamp-org/note-app.git
2. cd note-app
3. npm install
4. node app.js

Server is up and running at localhost:4000

Rest APIs

1. Create Todos - <i>POST /todos</i>
body:

```json
{
  "id": "1",
  "task":"first task"
}
```
2. Retrieve all todos - <i>GET /todos</i>

3. Get a todo by its id - <i>GET /todos/:id</i>

4. Update a todo by its id - <i>PUT /todos/:id</i>

body:

```json
{
  "id": "1",
  "task":"update first task"
}
```


5. Delete a todo by its id - <i>DELETE /todos/:id</i>
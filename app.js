const express = require('express');
const app = express();
app.use(express.json());

const PORT = 4000;

let todos = [];

app.get('/', (req, res) => {
  res.send({'path':'home page'});
});

app.get('/todos', (req, res) => {
  res.send(todos);
});

app.get('/todos/:id', (req, res) => {
  try {
    if (todos.filter((item) =>req.params.id == item.id).length > 0) {
      let r = todos.find(item => item.id == req.params.id);
      res.json(r);
    } else {
      res.json({'message': `no todo found with id: ${req.params.id}`});
    }
  } catch (error) {
    res.status(500);
    res.json({'error':'something went wrong'});
  }
});

app.post('/todos', (req, res) => {
  try {
    if(req.body.id == null || req.body.task == null) {
      res.json({'message':'id and task fields are mandatory to pass in the body'});
      return;
    }
    if (todos.filter((item) =>req.body.id == item.id).length > 0) {
      res.status(500);
      res.json({'error':'use unique id'});
    } else {
      todos.push(req.body);
      res.json({ 'message':'success' } );
    }
  } catch (error) {
    res.status(500);
    res.json({'error':'something went wrong'});
  }
})

app.put('/todos/:id', (req, res) => {
  try {
    if(req.body.task == null) {
      res.json({'message':'task field is mandatory to pass in the body'});
      return;
    }

    if (todos.filter((item) =>req.params.id == item.id).length > 0) {
      todos.find(item => item.id == req.params.id).task = req.body.task
      res.json({'message':'update successful'});
    } else {
      res.json({'message': `no todo found with id: ${req.params.id}`});
    }
  } catch (error) {
    res.status(500);
    res.json({'error':'something went wrong'});
  }
})

app.delete('/todos/:id', (req, res) => {
  try {
    if(todos.filter(item => item.id == req.params.id).length > 0) {
      let r = todos.filter(item => item.id != req.params.id);
      todos = [...r];
      res.json({'message':'success'});
    } else {
      res.json({'message': `no todo found with id: ${req.params.id}`});
    }
  } catch (error) {
    res.status(500);
    res.json({'error':'something went wrong'});
  }
})

app.listen(PORT, ()=>{
  console.log(`Listening on port ${PORT}`);
})
const TODO = require('../models/todo');

module.exports = function(app){
    app.get('/todos', function(req, res){
        TODO.find(function(err, foundTodos){
          if (!err) {
            res.send(foundTodos);
          } else {
            res.send(err);
          }
        });
      })

    app.post('/todos', function(req, res){
      const newTodo = new TODO({
        todo: req.body.todo,
      });
      
      newTodo.save(function(err){
        if (!err){
          res.send(newTodo._id);
        } else{
          res.send(err);
        }
      });
    });

    app.get('/todos/:todoId', function(req, res){
      TODO.findById(req.params.todoId, function(err, foundTodo){
        if (foundTodo) {
          res.send(foundTodo);
        } else {
          res.send('No such todos');
        }
      });
    });

    app.delete('/todos/:todoId', function(req, res){
        TODO.deleteOne(
          {_id: req.params.todoId},
          function(err){
            if (!err){
              res.send('Success');
            } else {
              res.send(err);
            }
          }
        )
    });
}
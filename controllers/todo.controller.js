const TodoModel = require("../model/todo.model");

exports.createTodo = async(req, res, next) => {
    try {
        const createModel = await TodoModel.create(req.body);
        res.status(201).json(createModel);
    } catch (err) {
        next(err);
    }
};

exports.getTodos = async (req, res, next) => {
    try{
        const allTodos = await TodoModel.find({});
        res.status(200).json(allTodos);
    } catch (err) {
        next(err);
    }
};

exports.getTodoById = async (req, res, next) => {
    try{
        const getTodo = await TodoModel.findById(req.params.todoId);
        if(getTodo){
            res.status(200).json(getTodo);
        } else {
            res.status(404).send();
        }
    } catch (err) {
        next(err);
    }
};
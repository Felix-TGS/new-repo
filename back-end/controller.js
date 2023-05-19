const ToDoModel = require('./models')


exports.addItem = async (request, response) => {
    const item = await ToDoModel.create({...request.body})
    response
    .status(201)
    .json({message: "Post request successful.", item: item})
}


exports.getItems = async (request, response) => {
    const list = await ToDoModel.find({})
    response
    .status(200)
    .json([...list])
}

exports.getDone = async (request, response) => {
    const list = await ToDoModel.find({isDone:true})
    response
    .status(200)
    .json({done: list.length})
}

exports.test = async (request, response) => {
    response
    .status(200)
    .json({message: "This is test endpoint"})
}

exports.defaultRes = async (request, response) => {
    response
    .status(200)
    .json({message: "Todo list backend"})
}

exports.patchText = async (request, response) => {
    const id = request.headers.id
    try {
        const newDoc = await ToDoModel.findByIdAndUpdate(id, {$set: {text: request.body.text}})
        response
        .status(200)
        .json({message: `successfully updated text to ${request.body.text}`})
    } catch {
        response
        .status(500)
        .json({error: error})
        console.log(error)
    }
}

exports.patchCheck = async (request, response) => {
    const id = request.headers.id
    try {
        const newDoc = await ToDoModel.findByIdAndUpdate(id, {$set: {isDone: request.body.isDone}})
        response
        .status(200)
        .json({message: `successfully updated completion to ${request.body.isDone}`})
    } catch {
        response
        .status(500)
        .json({error: error})
        console.log(error)
    }
}


exports.deleteItem = async (request, response) => {
    const id = request.headers.id
    try {
        await ToDoModel.findByIdAndDelete(id)
        response
        .status(200)
        .json({message: "successfully deletet document."})
    } catch {
        response
        .status(500)
        .json({error: error})
        console.log(error)
    }
}
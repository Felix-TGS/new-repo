const {model , Schema} = require("mongoose")

const ToDoSchema = new Schema({
    text: String,
    isDone: {type:Boolean, default:false},
    createdDate: {type:Date , default:Date.now},
});


const ToDoModel= model("datas" , ToDoSchema);

module.exports = ToDoModel;
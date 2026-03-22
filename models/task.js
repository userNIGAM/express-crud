import mongoose from "mongoose"

const taskSchema = new mongoose.Schema({
    titile : {
        type : String,
        required : true
    },
    text : {
        type : String,
        required : true
    },

},
{timestamps : true},
)

const Task = mongoose.model("Task", taskSchema)

export default Task;
import Task from "../models/task.js"

export const createTask = async(req, res) => {
     try {
        const task = await Task.create(req.body)
         res.status(200).json(task)
     } catch (error) {
        res.status(500).json({error: error.message})
     }
}

export const getAllTask = async(req, res) => {
    try {
        const tasks = await Task.find()
         res.status(200)
    } catch (error) {
         res.status(500).json({error: error.message})
        
    }
}

export const getTask = async (req, res) => {
    try {
        const task = Task.findById(req.params.id);

        if(!task){
            return res.status(404).json({message :"Task Not found! "})
        }
        res.json(task)
    } catch (error) {
        res.status(500).json({error : error.message})
    }
}
export const updateTask = async(req, res) => {
    try {
        const task = await Task.fingById(req.params.id)

        if(!task){
            return res.status(404).json({msg : "Task not Found"})
        }

        //manual updates
        task.title = req.body.title ?? task.title;
        task.text = req.body.text ?? task.test;

        await task.save();
        res.json(task)
    } catch (error) {
        res.status(500).json({error : error.message})        
    }
}
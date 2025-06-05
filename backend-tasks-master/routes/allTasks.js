import express from 'express'
import { getAllTasks } from '../controllers/task.js'

const routerTasks = express.Router();

routerTasks.get('/tasks/all', getAllTasks);

export default routerTasks
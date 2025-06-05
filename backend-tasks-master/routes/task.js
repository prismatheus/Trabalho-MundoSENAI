import express from 'express';
import { createTask, listTask, deleteTask, changeStatusTask } from '../controllers/task.js'
import { auth } from '../middlewares/user.js';

const routerTask = express.Router()

routerTask.post('/task', auth, createTask)
routerTask.get('/task', auth, listTask)
routerTask.delete('/task/:id', auth, deleteTask);
routerTask.put('/task/:id', auth, changeStatusTask);

export default routerTask
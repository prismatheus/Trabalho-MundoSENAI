import express from 'express';
import { registerUser, loginUser } from '../controllers/user.js'

const router = express.Router()

router.post('/register', registerUser)
router.post('/user/login', loginUser)

export default router
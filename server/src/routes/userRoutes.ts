import express from 'express'
import {login, signup, protect, logout} from '../controllers/authContoller'

const router = express.Router()

router.post('/signup', signup)
router.post('/login', login)
router.post('/logout', logout)

export default router;
import express from 'express'
import {login, signup, logout, updatePassword, forgotPassword, resetPassword} from '../controllers/authContoller'
import { protectRoute } from '../controllers/authContoller'

const router = express.Router()

router.post('/signup', signup)
router.post('/login', login)
router.post('/logout', logout)
router.post('/forgotPassword', forgotPassword)
router.post('/resetPassword/:token', resetPassword)

router.use(protectRoute)
router.patch('/updateMyPass',updatePassword)



export default router;
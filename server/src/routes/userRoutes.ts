import { Router } from 'express'
import { getUsers } from '../controllers/userController'

const router = Router()

// GET USERS
router.get('/', getUsers)

export default router

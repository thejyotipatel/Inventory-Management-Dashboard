import { Router } from 'express'
import { getExpensesByCategory } from '../controllers/expensesController'

const router = Router()

// GET EXPENSES BY CATEGORY
router.get('/', getExpensesByCategory)

export default router

import { Router } from 'express'
import { getDashboardMetrics } from '../controllers/dashboardController'

const router = Router()

// GET DASHBOARD METRICS
router.get('/', getDashboardMetrics)

export default router

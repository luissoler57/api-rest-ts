import { getItems } from '../controllers/orderController'
import { Router } from 'express'
import { checkJwt } from '../middleware/session'

const router: Router = Router()

router.get('/', checkJwt, getItems)

export { router }

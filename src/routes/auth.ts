import {
  loginController,
  registerController,
} from '../controllers/authController'
import { Router } from 'express'

const router: Router = Router()

/**
 * Register
 * * http://localhost:3000/auth/register [post]
 */
router.post('/register', registerController)

/**
 * Log In
 * * http://localhost:3000/auth/login [post]
 */
router.post('/login', loginController)

export { router }

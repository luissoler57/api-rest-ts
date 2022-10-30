import { Router } from 'express'
import { logMiddleware } from '../middleware/log'

import {
  getItems,
  getItem,
  saveItem,
  updateItem,
  deleteItem,
} from '../controllers/itemController'
import { checkJwt } from '../middleware/session'

const router = Router()

/**
 * Get item all
 * * http://localhost:3000/item [get]
 */
router.get('/', checkJwt, getItems)

/**
 * Get item details
 * * http://localhost:3000/item/id/details [get]
 */
router.get('/:id/details', checkJwt, logMiddleware, getItem)

/**
 * Save item
 * * http://localhost:3000/item/ [post]
 */
router.post('/', checkJwt, saveItem)

/**
 * Save item
 * * http://localhost:3000/item/:id/update [put]
 */
router.put('/:id/edit', checkJwt, updateItem)

/**
 * Save item
 * * http://localhost:3000/item/:id/delet [delete]
 */
router.delete('/:id/delete', checkJwt, deleteItem)

export { router }

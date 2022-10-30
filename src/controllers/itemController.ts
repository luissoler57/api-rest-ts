import { Request, Response } from 'express'
import {
  deleteCar,
  getCar,
  getCars,
  insertCar,
  updateCar,
} from '../services/itemServices'
import { handleHttp } from '../utils/error.handle'

/**
 * Get item details
 ** http://localhost:3000/item/id/details [get]
 * @param {Request}  - Request - the request object
 * @param {Response} res - Response - this is the response object that you can use to send a response back to the client.
 */
export const getItem = async ({ params }: Request, res: Response) => {
  try {
    const response = await getCar(params.id)
    if (!response) {
      res.send('NOT_FOUND_ITEM')
      res.status(404)
    } else {
      res.send(response)
    }
  } catch (error) {
    handleHttp(res, 'ERROR_GET_ITEM', error)
  }
}

/**
 * * http://localhost:3000/item [get]
 * It's a function that takes a request and a response, and then it tries to get some cars, and if it
 * succeeds, it sends the response, and if it fails, it sends an error message.
 * @param {Request} req - Request - The request object
 * @param {Response} res - Response - the response object
 */
export const getItems = async (req: Request, res: Response) => {
  try {
    const response = await getCars()
    res.send(response)
  } catch (error) {
    handleHttp(res, 'ERROR_GET_ITEMS', error)
  }
}

/**
 *   Save item
 * * http://localhost:3000/item/ [post]
 *
 * It takes a request and a response, and then it tries to insert an item into the database. If it succeeds, it sends the response back to the client. If it fails, it sends an error message back to the client.
 * @param {Request}  - Request - is the request object from express
 * @param {Response} res - Response - this is the response object from express
 */
export const saveItem = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = await insertCar(body)
    console.log(responseItem)
    res.send(responseItem)
  } catch (error) {
    handleHttp(res, 'ERROR_SAVE_ITEM', error)
  }
}

/**
 * Save item
 * * http://localhost:3000/item/:id/update [put]
 */
export const updateItem = async ({ params, body }: Request, res: Response) => {
  try {
    const response = await updateCar(params.id, body)
    res.send(response)
  } catch (error) {
    handleHttp(res, 'ERROR_UPDATE_ITEM')
  }
}
/**
 * Save item
 * * http://localhost:3000/item/:id/delet [delete]
 */
export const deleteItem = async ({ params }: Request, res: Response) => {
  try {
    await deleteCar(params.id)
    res.send({ data: 'ITEM_DELETE_SUCCESSFULLY' })
  } catch (error) {
    handleHttp(res, 'ERROR_DELETE_ITEM')
  }
}

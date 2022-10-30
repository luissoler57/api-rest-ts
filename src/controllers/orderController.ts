import { Request, Response } from 'express'
import { handleHttp } from '../utils/error.handle'

export const getItems = (req: Request, res: Response) => {
  try {
    res.send({
      data: 'JWT_CORRECT',
      user: req.user,
    })
  } catch (error) {
    handleHttp(res, 'ERROR_GET_ITEMS_ORDER', error)
  }
}

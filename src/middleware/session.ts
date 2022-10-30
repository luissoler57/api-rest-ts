import { NextFunction, Request, Response } from 'express'
import authModel from '../models/authModel'
import { verifyToken } from '../utils/jwtHandle'

/**
 * It checks if the user is logged in, if not, it sends a 401 error.
 * @param {Request} req - Request - the request object
 * @param {Response} res - Response - the response object
 * @param {NextFunction} next - NextFunction -&gt; This is a function that will be called when the
 * middleware is done.
 */
export const checkJwt = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const jwtByUser = req.headers.authorization || null
    const jwt = jwtByUser?.split(' ').pop()
    const isUser = await verifyToken(`${jwt}`)
    if (!isUser) {
      res.status(401)
      res.send('NOT_VALIDATED_TOKEN')
    }
    req.user = isUser
    const user = await authModel.findById(req.user.id, { password: 0 })
    req.user = user
    next()
  } catch (error) {
    res.status(402).json('ERROR_SESSION')
    console.log(error)
  }
}

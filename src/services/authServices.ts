import { encrypt, verified } from '../utils/bcryptsHandle'
import { IUser } from '../interface/IUser'
import authModel from '../models/authModel'
import { IAuth } from '../interface/IAuth'
import { generateToken } from '../utils/jwtHandle'

/**
 * It takes an object with an email, password, and name, checks if the email is already in the
 * database, encrypts the password, and then creates a new user in the database
 * @param {IUser}  - IUser = {
 * @returns The return value is the result of the create method.
 */
export const registerNewUser = async ({ email, password, name }: IUser) => {
  const checkEmail = await authModel.findOne({ email })
  if (checkEmail) return 'ALREADY_USER'
  const passHash = await encrypt(password)
  return await authModel.create({ email, password: passHash, name })
}

/**
 * It checks if the user exists in the database, if it does, it checks if the password is correct, if
 * it is, it returns true, if not, it returns false
 * @param {IAuth}  - IAuth = {
 * @returns The return value is a Promise.
 */
export const loginUser = async ({ email, password }: IAuth) => {
  const checkUser = await authModel.findOne({ email })
  if (!checkUser) return 'NOT_FOUND_USER'

  const passwordHash = checkUser.password
  const isCorrect = await verified(password, passwordHash)
  if (!isCorrect) return 'PASSWORD_INCORRECT'
  const token = generateToken(checkUser.id)
  return {
    token,
    user: checkUser,
  }
}

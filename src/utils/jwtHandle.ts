import { sign, verify } from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'TOKEN'

/* A function that takes in an id and returns a token. */
export const generateToken = (id: string) => {
  return sign({ id }, JWT_SECRET, {
    expiresIn: '2h',
  })
}

/**
 * It takes a JWT as a string, and returns the decoded JWT as an object
 * @param {string} jwt - The JWT to verify
 * @returns The decoded JWT payload.
 */
export const verifyToken = async (jwt: string) => {
  return verify(jwt, JWT_SECRET)
}

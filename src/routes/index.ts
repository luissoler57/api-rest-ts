import { Router } from 'express'
import { readdirSync } from 'fs'

const PATH_ROUTER = `${__dirname}`
const router = Router()

/**
 * It takes a string, splits it on the period, and returns the first item in the resulting array
 * @param {string} fileName - The name of the file you want to clean.
 * @returns The file name without the extension.
 */
const cleanFileName = (fileName: string) => {
  return fileName.split('.').shift()
}

const t = readdirSync(PATH_ROUTER).filter((fileName) => {
  const cleanName = cleanFileName(fileName)

  if (cleanName !== 'index') {
    import(`./${cleanName}`).then((moduleRouter) => {
      router.use(`/${cleanName}`, moduleRouter.router)
    })
  }
})

export { router }

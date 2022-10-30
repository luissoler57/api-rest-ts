import { connect } from 'mongoose'

//* Database connection
;(async (): Promise<void> => {
  try {
    const DB_URI = <string>process.env.DB_URI
    await connect(DB_URI)
    console.log('DB Connection successfully')
  } catch (error) {
    console.log('Error DB')
    console.log(error)
  }
})()

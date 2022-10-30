import { Schema, model } from 'mongoose'
import { IUser } from '../interface/IUser'

const authSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      default: 'I am description',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

export default model('AuthModel', authSchema)

import { ICar } from '../interface/ICar'
import { Schema, model } from 'mongoose'

const ItemSchema = new Schema<ICar>(
  {
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    gas: {
      type: String,
      enum: ['gasoline', 'electric'],
      required: true,
    },
    year: {
      type: Number,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

export default model('ItemsModel', ItemSchema)

import itemModel from '../models/itemModel'
import { ICar } from '../interface/ICar'

/**
 * This function takes a ICar object as a parameter, and returns a promise that resolves to a ICar
 * object.
 * @param {ICar} item - ICar = {
 * @returns The result of the create method.
 */
export const insertCar = async (item: ICar) => {
  return await itemModel.create(item)
}

/**
 * This function returns a promise that resolves to an array of items from the database.
 * @returns An array of objects.
 */
export const getCars = async () => {
  return await itemModel.find({})
}

/**
 * This function takes an id as a string and returns a ICar object.
 * @param {string} id - string
 * @returns A promise that resolves to a ICar object.
 */
export const getCar = async (id: string) => {
  return await itemModel.findOne({ _id: id })
}

/**
 * Find the item with the given id and update it with the given data, then return the updated item.
 * @param {string} id - string - the id of the ICar you want to update
 * @param {ICar} data - ICar - this is the data that is being passed in from the client.
 * @returns The updated ICar
 */
export const updateCar = async (id: string, data: ICar) => {
  return await itemModel.findOneAndUpdate({ _id: id }, data, { new: true })
}

/**
 * This function deletes a ICar from the database by its id.
 * @param {string} id - string - the id of the ICar to delete
 * @returns The result of the remove operation.
 */
export const deleteCar = async (id: string) => {
  return await itemModel.deleteOne({ _id: id })
}

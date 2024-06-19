import { z } from "zod";

//# ->  Categorias

//? ->  Shemas
export const CategorySchema = z.object({
    _id : z.string(),
    name : z.string(),
    slug : z.string(),
})

export const CategoriesSchema = z.array(CategorySchema)

//? ->  Types
export type Category = z.infer< typeof CategorySchema >

//# ->  Productos

//? ->  Shemas
export const ProductSchema = z.object({
    _id:z.string(),
    name:z.string(),
    price:z.number(),
    image:z.string(),
    category:z.string()
})
export const ProductsSchema = z.array(ProductSchema)


//? ->  Types

export type Product = z.infer< typeof ProductSchema >

//# ->  Ordenes

//? ->  Shemas

//? ->  Types
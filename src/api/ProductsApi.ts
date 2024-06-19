import api from "@/lib/axios";
import { Category, ProductsSchema } from "@/types";
import  axios, { isAxiosError } from "axios";

type ProductApi = {
    categorySlug : Category['slug'];
}

export async function getProductsCategory(slug : ProductApi["categorySlug"]){
    try {
        const url=`/products/productsSlug/${slug}`
        const { data } = await api(url)
        const response = ProductsSchema.safeParse(data)
        if(response.success){
            return response.data
        }
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}

export async function prueba(){
    try {
        const url = "https://prueba-tecnica-ocgj.onrender.com"
        const { data } = await axios(url)
        console.log(data)
    } catch (error) {
        
    }
}
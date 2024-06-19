import api from "@/lib/axios";
import { CategoriesSchema } from "@/types";
import  { isAxiosError } from "axios";


export async function getCatgeories () {
    try {
        const url = "/categories";
        const { data } = await api(url)
        const result = CategoriesSchema.safeParse(data)
        if(result.success){

            return result.data
        }
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}
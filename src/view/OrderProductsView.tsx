import { getProductsCategory } from "@/api/ProductsApi";
import ProductCard from "@/components/ProductCard";
import Heading from "@/components/ui/Heading";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom"

export default function OrderProductsView() {
    const params = useParams();
    const categorySlug = params.category ?? ""
    const { data, isLoading } = useQuery({
        queryKey:["products",categorySlug],
        queryFn : () => getProductsCategory(categorySlug)
    })
    const products = data ?? []
    return (
        <>
            <Heading>
                Elige y personaliza tu pedido a continuación
            </Heading>
            <div className=" w-full">
                {isLoading ? (
                    <div className="mt-5 w-full grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
                        <Skeleton className=" w-full h-52 rounded-xl"/>
                        <Skeleton className=" w-full h-52 rounded-xl"/>
                        <Skeleton className=" w-full h-52 rounded-xl"/>
                        <Skeleton className=" w-full h-52 rounded-xl"/>
                        <Skeleton className=" w-full h-52 rounded-xl"/>
                        <Skeleton className=" w-full h-52 rounded-xl"/>
                        <Skeleton className=" w-full h-52 rounded-xl"/>
                        <Skeleton className=" w-full h-52 rounded-xl"/>
                        <Skeleton className=" w-full h-52 rounded-xl"/>
                        <Skeleton className=" w-full h-52 rounded-xl"/>
                        <Skeleton className=" w-full h-52 rounded-xl"/>
                        <Skeleton className=" w-full h-52 rounded-xl"/>
                    </div>
                ) : (
                    products.length === 0 ? (
                        <div className=" w-full p-10">
                            <p className=" text-center">Upss... Parece que no hay productos</p>
                        </div>
                    ) : (
                        <div className=" mt-5 w-full grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
                            {products.map(product => <ProductCard key={product._id} product={product} />)}
                        </div>
                    )
                )}
            </div>

        </>
    )
}

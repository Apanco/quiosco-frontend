import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Card } from "./ui/card";
import { Product } from "@/types";

type ProductCardProps = {
    product : Product
}

export default function ProductCard({product} : ProductCardProps ) {
    return (
        <Card className=" flex flex-col justify-between">
            <div className=" w-full">
                <AspectRatio ratio={1/1.1} className=" overflow-hidden flex justify-center items-center">
                    <img src={`/products/${product.image}.jpg`} alt="" />
                </AspectRatio>
                <div className=" w-full p-5">
                    <h3 className=" text-2xl font-bold"> {product.name} </h3>

                </div>
            </div>
            <div>

            </div>
        </Card>
    )
}

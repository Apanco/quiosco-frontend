import { Category } from "@/types"
import { AspectRatio } from "@radix-ui/react-aspect-ratio"
import { useNavigate } from "react-router-dom"


type CategoryIconProps = {
    category : Category
    selected : string
}

export default function CategoryIcon({category, selected} : CategoryIconProps) {
    const navigate = useNavigate() 
    const active = selected === category.slug ? true : false
    return (
        <div 
            className=" w-full  hover:bg-border cursor-pointer relative"
            onClick={()=> navigate(`/products/${category.slug}`)}    
        >
            <div className=" w-full px-5 flex py-3 justify-start items-center gap-x-5">
                <div className="w-1/4 flex justify-center items-center">
                    <AspectRatio ratio={1/1} className=" flex justify-center items-center" >
                        <img src={`/icon_${category.slug}.svg`} alt={`imagen ${category.slug}`} />
                    </AspectRatio>
                </div>
                <p className=" text-xl font-semibold">{category.name}</p>   
            </div>
            <div className={`absolute bottom-0 w-full h-2 bg-primary transition-transform -translate-x-full ${active ? "translate-x-0" : ""}`}>

            </div>
        </div>
    )
}

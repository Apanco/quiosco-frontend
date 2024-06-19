import { useQuery } from "@tanstack/react-query";
import Logo from "../Logo";
import { ModeToggle } from "../mode-toggle";
import { getCatgeories } from "@/api/CategoryApi";
import { Skeleton } from "../ui/skeleton";
import CategoryIcon from "./CategoryIcon";
import {  useParams } from "react-router-dom";

export default function OrderSideBar() {
  //. ->  Obtener categoria
  const params = useParams()
  const selectCategory = params.category ?? ""


  
  const { data, isLoading } = useQuery({
    queryKey:['categories'],
    queryFn:getCatgeories
  })
  const categories = data ?? []
  return (
    <aside className=" md:w-72 md:h-screen bg-background border-r-2 border-border">

      <div className=" w-full p-5 flex justify-between items-center">

        <div className=" w-1/3">
          <Logo/>
        </div>

        <div className=" w-1/3 flex justify-center items-center">
          <ModeToggle/>
        </div>

      </div>

      <nav className=" w-full">
        {isLoading ? (
          <div className=" w-full px-2 space-y-3">
            <Skeleton className=" w-full h-24 rounded-xl"/>
            <Skeleton className=" w-full h-24 rounded-xl"/>
            <Skeleton className=" w-full h-24 rounded-xl"/>
            <Skeleton className=" w-full h-24 rounded-xl"/>
            
          </div>
        ) : (
          <div className=" w-full border-y divide-y border-border">
            {categories.map(category => <CategoryIcon key={category._id} category={category} selected={selectCategory} />)}
          </div>
        ) }
      </nav>
    </aside>
  )
}

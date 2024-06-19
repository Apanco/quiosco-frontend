import OrderSideBar from "@/components/order/OrderSideBar"
import OrderSumary from "@/components/order/OrderSumary"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Outlet } from "react-router-dom"

export default function OrderLayout() {
    return (
        <div className=" md:flex max-h-screen">
            <OrderSideBar/>
            <main className=" md:flex-1 md:h-screen">
                <ScrollArea className="h-screen p-5 ">
                    <ScrollBar orientation={"vertical"}/>
                    <Outlet/>
                </ScrollArea>
            </main>
            <OrderSumary/>
        </div>
    )
}

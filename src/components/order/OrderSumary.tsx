import { Card } from '../ui/card'
import { ScrollArea, ScrollBar } from '../ui/scroll-area'

export default function OrderSumary() {
    return (
        <aside className=' w-72 lg:h-screen flex flex-col justify-between border-l border-border'>
            <div className=' w-full py-10'>
                <h2 className=' text-center text-4xl font-black'>Mi pedido</h2>
            </div>
            <ScrollArea className=' w-full h-full'>
                <ScrollBar orientation={"vertical"}/>

            </ScrollArea>
            <Card className=' w-full p-5 border-0 border-t'>
                <p className=' text-xl'>Total a pagar:</p>
            </Card>
        </aside>
    )
}

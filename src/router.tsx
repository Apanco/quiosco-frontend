import { BrowserRouter, Routes, Route } from "react-router-dom"
import OrderLayout from "./layout/OrderLayout"
import OrderView from "./view/OrderView"
import OrderProductsView from "./view/OrderProductsView"

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<OrderLayout/>} >
                    <Route  path="/" element={<OrderView/>} index  />
                    <Route  path="/products/:category" element={<OrderProductsView/>}  />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
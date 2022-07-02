import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Navbar from "./components/Navbar"
import OrderSummary from "./components/OrderSummary"
import NoMatch from "./components/NoMatch"
import Products from "./components/Products"
import FeaturedProducts from "./components/FeaturedProducts"
import NewProducts from "./components/NewProducts"
import Users from "./components/Users"
import UserDetails from "./components/UserDetails"
import Admin from "./components/Admin"


export default function App() {
    return (
        <div>
            <Navbar />
            <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="order-summary" element={<OrderSummary />}></Route>
            <Route path="*" element={<NoMatch />}></Route>
            <Route path="products" element={<Products/>}>
                <Route index element={<FeaturedProducts />}/>
                <Route path="featured" element={<FeaturedProducts />}></Route>
                <Route path="new" element={<NewProducts />}></Route>
            </Route>
            <Route path="users" element={<Users />}></Route>
            <Route path="users/:userId" element={<UserDetails />}></Route>
            <Route path="users/admin" element={<Admin />}></Route>
        </Routes>

        </div> 
    )
}
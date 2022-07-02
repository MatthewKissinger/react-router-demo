import React from "react"
import { Link, Outlet } from "react-router-dom"

export default function Products() {
    return (
        <div>
             <div>
                <input type="search" placeholder="search products" />
            </div>
            <nav>
                <Link to="featured">Featured</Link>
                <Link to="new">New</Link>
            </nav>
            <Outlet />
        </div>
       
    )
}
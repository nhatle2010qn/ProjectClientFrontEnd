import HomePage from "./components/HomePage/HomePage";
import React from 'react';
import DetailPage from "./components/DetailPage/Detail";
import CheckOut from "./components/CheckOut/CheckOut";
import ProductByCategory from "./components/ProductByCategory/ProductByCategory";
import Cart from "./components/Cart/Cart";
import CompareProduct from "./components/Compare/CompareProduct";

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/Detail/:id',
        exact: false,
        main: () => <DetailPage />
    },
    {
        path: '/Checkout',
        exact: true,
        main: () => <CheckOut />
    },
    {
        path: '/ProductByCategory',
        exact: true,
        main: () => <ProductByCategory />
    },
    {
        path: '/Cart',
        exact: true,
        main: () => <Cart />
    },
    {
        path: '/Compare',
        exact: true,
        main: () => <CompareProduct />
    }
   
]

export default routes;
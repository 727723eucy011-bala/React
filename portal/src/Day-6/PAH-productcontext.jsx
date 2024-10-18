// src/context/ProductContext.jsx
import React, { createContext, useReducer, useEffect } from 'react';

const ProductContext = createContext();

const initialState = {
    categories: [],
    products: [],
    filteredProducts: []
};

const productReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CATEGORIES':
            return { ...state, categories: action.payload };
        case 'SET_PRODUCTS':
            return { ...state, products: action.payload, filteredProducts: action.payload };
        case 'FILTER_BY_CATEGORY':
            return { ...state, filteredProducts: state.products.filter(product => product.category === action.payload) };
        case 'FILTER_BY_PRICE':
            return { 
                ...state, 
                filteredProducts: state.products.filter(product => product.price <= action.payload) 
            };
        default:
            return state;
    }
};

export const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(productReducer, initialState);

    useEffect(() => {
        // Fetch categories and products from API
        const fetchData = async () => {
            const categoryResponse = await fetch('/api/categories');
            const productResponse = await fetch('/api/products');
            const categories = await categoryResponse.json();
            const products = await productResponse.json();

            dispatch({ type: 'SET_CATEGORIES', payload: categories });
            dispatch({ type: 'SET_PRODUCTS', payload: products });
        };

        fetchData();
    }, []);

    return (
        <ProductContext.Provider value={{ state, dispatch }}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContext;

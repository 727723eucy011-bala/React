// src/components/ProductFilter.jsx
import React, { useContext } from 'react';
import ProductContext from '../ProductContext';

const ProductFilter = () => {
    const { state, dispatch } = useContext(ProductContext);

    const handleCategoryChange = (e) => {
        dispatch({ type: 'FILTER_BY_CATEGORY', payload: e.target.value });
    };

    const handlePriceChange = (e) => {
        dispatch({ type: 'FILTER_BY_PRICE', payload: e.target.value });
    };

    return (
        <div>
            <select onChange={handleCategoryChange}>
                <option value="">All Categories</option>
                {state.categories.map(category => (
                    <option key={category.id} value={category.name}>{category.name}</option>
                ))}
            </select>
            <input 
                type="number" 
                placeholder="Max Price" 
                onChange={handlePriceChange} 
            />
        </div>
    );
};

export default ProductFilter;

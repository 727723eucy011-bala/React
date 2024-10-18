// src/components/ProductList.jsx
import React, { useContext } from 'react';
import ProductContext from '../context/ProductContext';
import ProductItem from './ProductItem';

const ProductList = () => {
    const { state } = useContext(ProductContext);

    return (
        <div>
            {state.filteredProducts.map(product => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;

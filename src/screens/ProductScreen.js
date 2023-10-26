import React from 'react';
import products from '../products';
import { useParams } from 'react-router-dom';

function ProductScreen() {
    const { id } = useParams();

    // Find the product by ID
    const product = products.find((p) => p._id === id);

    // Handle case where product is not found
    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div>
            <h1>{product.name}</h1>
            {/* Display other product details here */}
        </div>
    );
}

export default ProductScreen;

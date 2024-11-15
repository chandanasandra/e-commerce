import React from 'react';
import './productCard.css';

function ProductCard({product}) {
    return (
        <div className="productCard w-[15rem] m-3 transition-all cursor-pointer rounded-lg overflow-hidden">
            <div className="image-container relative h-[20rem]">
                <img 
                    className="h-full w-full object-cover object-center" 
                    src={product.imageUrl}
                    alt="Product" 
                />
                <span className="badge absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full">New</span>
            </div>
            <div className="product-details p-4 bg-gradient-to-b from-white to-gray-100">
                <div className="productName">
                    <p className="font-bold text-gray-800">{product.brand}</p>
                    <p className="text-sm text-gray-500">{product.title}</p>
                </div>
                <div className="product-price flex items-center space-x-2 mt-2">
                    <p className="font-bold text-gray-800"> ₹ {product.discountedPrice}</p>
                    <p className="line-through text-gray-400">₹ {product.price}</p>
                    <p className="text-green-600 font-semibold">{product.discountPersent}%</p>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;

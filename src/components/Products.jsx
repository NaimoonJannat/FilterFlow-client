import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { FaSearch } from "react-icons/fa"; 
import ProductCard from "./ProductCard";

const Products = () => {
    const initialProducts = useLoaderData();
    const [searchQuery, setSearchQuery] = useState("");

    const filteredProducts = initialProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="text-center space-y-4">
            <div className="flex justify-center mb-4 relative w-full lg:w-1/4">
                <input
                    type="text"
                    placeholder="Search products..."
                    className="input input-bordered w-full max-w-xs pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <FaSearch className="absolute right-3 top-4 text-gray-500" /> 
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredProducts.map(product => (
                    <ProductCard
                        key={product._id}
                        product={product}
                    />
                ))}
            </div>
        </div>
    );
};

export default Products;

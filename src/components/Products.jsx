import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import ProductCard from "./ProductCard";

const Products = () => {
    const initialProducts = useLoaderData();
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOption, setSortOption] = useState("");

    const filteredProducts = initialProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const sortedProducts = filteredProducts.sort((a, b) => {
        if (sortOption === "priceLowToHigh") {
            return a.price - b.price;
        } else if (sortOption === "priceHighToLow") {
            return b.price - a.price;
        } else if (sortOption === "newestFirst") {
            const dateA = new Date(`${a.creationDate}T${a.creationTime}`);
            const dateB = new Date(`${b.creationDate}T${b.creationTime}`);
            return dateB - dateA;
        }
        return 0;
    });

    return (
        <div className="text-center space-y-4">
            <div className="flex justify-center mb-4 space-x-4 w-full lg:w-2/3 mx-auto">
                <div className="relative w-full lg:w-1/3">
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="input input-bordered w-full pl-10"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <FaSearch className="absolute right-3 top-4 text-gray-500" />
                </div>
                <div className="relative w-full lg:w-1/3">
                    <select
                        className="select select-bordered w-full"
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                    >
                        <option value="">Sort By</option>
                        <option value="priceLowToHigh">Price: Low to High</option>
                        <option value="priceHighToLow">Price: High to Low</option>
                        <option value="newestFirst">Date Added: Newest First</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sortedProducts.map(product => (
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

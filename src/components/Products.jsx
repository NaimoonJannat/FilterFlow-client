import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import ProductCard from "./ProductCard";

const Products = () => {
    const initialProducts = useLoaderData();
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOption, setSortOption] = useState("");
    const [selectedBrand, setSelectedBrand] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [priceRange, setPriceRange] = useState([0, Infinity]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6; 

    // brand names and categories from products
    const brandNames = [...new Set(initialProducts.map(product => product.band))];
    const categoryNames = [...new Set(initialProducts.map(product => product.category))];

    //  filters
    const filteredProducts = initialProducts
        .filter(product =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .filter(product =>
            selectedBrand ? product.band === selectedBrand : true
        )
        .filter(product =>
            selectedCategory ? product.category === selectedCategory : true
        )
        .filter(product =>
            product.price >= priceRange[0] && product.price <= priceRange[1]
        );

    // sorting
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

    // Pagination
    const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedProducts = sortedProducts.slice(startIndex, startIndex + itemsPerPage);

    const handlePriceRangeChange = (e) => {
        const value = e.target.value.split('-');
        setPriceRange([parseFloat(value[0]), parseFloat(value[1])]);
        setCurrentPage(1); // Reset to first page when filter is applied
    };

    // Reset to first page when filters or sorting changes
    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery, sortOption, selectedBrand, selectedCategory]);

    const handlePreviousPage = () => {
        setCurrentPage(prev => (prev > 1 ? prev - 1 : prev));
    };

    const handleNextPage = () => {
        setCurrentPage(prev => (prev < totalPages ? prev + 1 : prev));
    };

    return (
        <div className="text-center space-y-4">
            <div className="flex flex-wrap justify-center gap-5 mb-4 space-y-2 lg:space-y-0 md:space-x-4 w-full mx-auto px-2 md:px-0">
                {/* Search Bar */}
                <div className="relative w-full lg:w-1/4">
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="input input-bordered w-full pl-10"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <FaSearch className="absolute right-3 top-4 text-gray-500" />
                </div>

                {/* Sort By */}
                <div className="relative w-full md:w-1/4">
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

                {/* Filter By Brand */}
                <div className="relative w-full md:w-1/4">
                    <select
                        className="select select-bordered w-full"
                        value={selectedBrand}
                        onChange={(e) => setSelectedBrand(e.target.value)}
                    >
                        <option value="">Filter by Brand</option>
                        {brandNames.map(brand => (
                            <option key={brand} value={brand}>{brand}</option>
                        ))}
                    </select>
                </div>

                {/* Filter By Category */}
                <div className="relative w-full md:w-1/4">
                    <select
                        className="select select-bordered w-full"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option value="">Filter by Category</option>
                        {categoryNames.map(category => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                </div>

                {/* Filter By Price Range */}
                <div className="relative w-full md:w-1/4">
                    <select
                        className="select select-bordered w-full"
                        value={`${priceRange[0]}-${priceRange[1]}`}
                        onChange={handlePriceRangeChange}
                    >
                        <option value="0-Infinity">Filter by Price Range</option>
                        <option value="0-50">0 - 50</option>
                        <option value="50-100">50 - 100</option>
                        <option value="100-200">100 - 200</option>
                        <option value="200-Infinity">200+</option>
                    </select>
                </div>
            </div>

            {/* Products */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2 lg:px-0">
                {paginatedProducts.map(product => (
                    <ProductCard
                        key={product._id}
                        product={product}
                    />
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center space-x-4 mt-4">
                <button
                    className="btn btn-outline"
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <div>
                    Page {currentPage} of {totalPages}
                </div>
                <button
                    className="btn btn-outline"
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Products;

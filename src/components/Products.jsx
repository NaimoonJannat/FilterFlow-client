import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";

const Products = () => {
    const initialProducts = useLoaderData();
    return (
        <div className="text-center space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    initialProducts.map(product =>
                        <ProductCard
                            key={product._id}
                            product={product}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default Products;
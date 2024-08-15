

const ProductCard = ({product}) => {
    const {name, _id, image, creationDate, creationTime, category, price, description, rating} = product;
    return (
        <div className="text-left border-2 border-[#F50000] p-3 shadow-2xl shadow-[#F50000] rounded-lg">
        <div className="flex justify-between pb-4 border-bottom">
            <div className="flex items-center">
                <div className="mb-0 capitalize">Created on {creationDate}</div>
            </div>
        </div>
        <div className="space-y-2">
            <div>
                <img src={image} alt="" className=" object-cover object-center w-1/2 rounded-lg" />
            </div>
            <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{name}</h3>
                    <h2>Price: ${price}</h2>
                    <h2>Category:{category}</h2>
                    <h2> {description}</h2>
                <div className="btn border-1 border-[#F50000] bg-[#f3a9a944]">
                    {rating}
                </div>
            </div>     
        </div>
    
    </div>
    );
};

export default ProductCard;
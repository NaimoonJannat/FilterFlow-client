import { FaDollarSign, FaStar } from "react-icons/fa";


const ProductCard = ({product}) => {
    const {name, _id, image, creationDate, creationTime, category, price, description, ratings} = product;
    return (
        <div className="text-center border-2 border-blue-950 p-3 shadow-2xl shadow-[#74707018] rounded-lg">
        <div className="flex justify-between pb-4 border-bottom">
            <div className="flex items-center">
                <div className="mb-0 capitalize">Created on {creationDate}</div>
            </div>
        </div>
        <div className="space-y-2">
            <div className="text-center">
                <img src={image} alt="" className=" h-60 object-center w-4/5 rounded-lg" />
            </div>
            <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{name}</h3>
                    <h2>Category:{category}</h2>
                    <h2> {description}</h2>

                    <div className="flex justify-around">
                    <div className="justify-center text-lg font-semibold flex flex-row items-center">
                    <div className="text-blue-900 "> 
                    <FaDollarSign />
                    </div>
                    <h2> {price}</h2>
                    </div>

                <div className="flex flex-row gap-2 text-lg font-semibold justify-center items-center">
                    <div className="text-orange-400"><FaStar /></div>
                    {ratings}
                </div>
                    </div>
            </div>     
        </div>
    
    </div>
    );
};

export default ProductCard;
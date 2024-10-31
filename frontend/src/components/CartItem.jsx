import { Minus, Plus, Trash } from "lucide-react";
import { useCartStore } from "../stores/useCartStore";

const CartItem = ({ item }) => {
	const { removeFromCart, updateQuantity } = useCartStore();

	return (
		<div className="relative rounded-lg border border-gray-700 bg-gradient-to-r from-gray-800
		 via-gray-900 to-gray-950 p-6 shadow-md">
			<div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 
			md:space-y-0">
				
				{/* Image Container */}
				<div className="w-full md:w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden bg-gray-700">
					<img
						className="w-full h-full object-cover transition-transform duration-300"
						src={item.image}
						alt={item.name}
					/>
				</div>
				
				{/* Item Details */}
				<div className="flex-1 space-y-6 md:pl-4 text-center md:text-left">
					<h3 className="text-lg font-semibold text-white transition-colors 
					duration-300 hover:text-red-500">
						{item.name}
					</h3>
					<p className="text-gray-400 text-sm">{item.description}</p>

					<div className="mt-4 flex items-center justify-center md:justify-start gap-2">
						<button
							className="text-red-400 hover:text-red-300 transition-colors
							 duration-300 flex items-center gap-1"
							onClick={() => removeFromCart(item._id)}
						>
							<Trash className="w-5 h-5" />
							<span className="text-sm">Remove</span>
						</button>
					</div>
				</div>

				{/* Quantity Controls and Price */}
				<div className="flex flex-col items-center md:items-end space-y-4">
					<div className="flex items-center space-x-2">
						<button
							className="p-2 rounded-full border border-gray-600 bg-gray-700
							 text-gray-300 hover:bg-gray-600 hover:text-white transition-all 
							 duration-300 focus:ring-2 focus:ring-red-500"
							onClick={() => updateQuantity(item._id, item.quantity - 1)}
						>
							<Minus />
						</button>
						<span className="text-lg font-semibold text-white">{item.quantity}</span>
						<button
							className="p-2 rounded-full border border-gray-600 bg-gray-700 text-gray-300
							 hover:bg-gray-600 hover:text-white transition-all duration-300 focus:ring-2 
							 focus:ring-red-500"
							onClick={() => updateQuantity(item._id, item.quantity + 1)}
						>
							<Plus />
						</button>
					</div>

					
					<p className="text-red-400 text-lg font-bold mt-2">${item.price.toFixed(2)}</p>
				</div>
			</div>
		</div>
	);
};

export default CartItem;


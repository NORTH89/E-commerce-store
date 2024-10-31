import { Link } from "react-router-dom";

const CategoryItem = ({ category }) => {
	return (
		<div className="relative h-96 w-full overflow-hidden rounded-lg group shadow-lg transform transition-transform duration-500 hover:scale-105">
			<Link to={"/category" + category.href}>
				{/* Image with Overlay */}
				<div className="w-full h-full relative">
					<img
						src={category.imageUrl}
						alt={category.name}
						className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
						loading="lazy"
					/>
					{/* Dark Gradient Overlay */}
					<div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/70 z-10" />

					{/* Centered Transparent Explore Button */}
					<div className="absolute inset-0 flex items-center justify-center z-20">
						<button
							className="border border-white text-white text-base font-semibold px-5 py-2 rounded-full
							 transition-all duration-300 hover:bg-white/20 hover:border-red-500
							  hover:text-red-500"
						>
							Explore
						</button>
					</div>

					{/* Bottom Category Label */}
					<div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-75 text-white text-center py-2 font-semibold z-30">
						{category.name}
					</div>
				</div>
			</Link>
		</div>
	);
};

export default CategoryItem;

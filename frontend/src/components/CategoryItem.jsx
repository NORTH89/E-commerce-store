import { Link } from "react-router-dom";

const CategoryItem = ({ category }) => {
	return (
		<div className="relative w-full h-full overflow-hidden rounded-xl group shadow-lg transition-transform duration-500 transform hover:scale-105">
			<Link to={"/category" + category.href}>
				{/* Full-cover Image with Gradient Overlay */}
				<div className="w-full h-full relative cursor-pointer rounded-xl overflow-hidden">
					<img
						src={category.imageUrl}
						alt={category.name}
						className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
						loading="lazy"
					/>
					<div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80 opacity-80 z-10" />

					{/* Centered Explore Button with Shadow */}
					<div className="absolute inset-0 flex items-center justify-center z-20">
						<button className="bg-white/20 backdrop-blur-md border border-white text-white px-6 
						py-3 rounded-full font-semibold text-lg transition-transform transform
						 hover:bg-emerald-400 hover:text-black hover:scale-105 shadow-lg">
							Explore
						</button>
					</div>

					{/* Bottom Label with Frosted Glass Effect */}
					<div className="absolute bottom-0 left-0 right-0 bg-white/20 backdrop-blur-md
					 text-white text-center py-4 font-semibold text-lg rounded-b-xl z-30 shadow-md">
						{category.name}
					</div>
				</div>
			</Link>
		</div>
	);
};

export default CategoryItem;

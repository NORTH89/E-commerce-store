import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";
import { motion } from "framer-motion";
const categories = [
	{ href: "/jeans", name: "Jeans", imageUrl: "/jeans.png" },
	{ href: "/t-shirts", name: "T-shirts", imageUrl: "/tshirts.jpg" },
	{ href: "/shoes", name: "Shoes", imageUrl: "/shoes.jpg" },
	{ href: "/glasses", name: "Glasses", imageUrl: "/glasses.png" },
	{ href: "/jackets", name: "Jackets", imageUrl: "/jackets.png" },
	{ href: "/suits", name: "Suits", imageUrl: "/suits.png" },
	{ href: "/bags", name: "Bags", imageUrl: "/bags.png" },
];

const HomePage = () => {
	const { fetchFeaturedProducts, products, isLoading } = useProductStore();

	useEffect(() => {
		fetchFeaturedProducts();
	}, [fetchFeaturedProducts]);

	return (
		<motion.div
			className='relative min-h-screen text-white overflow-hidden'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
		>
			<motion.div
				className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
				initial={{ y: 20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.2 }}
			>
				<motion.h1
					className="text-center text-5xl sm:text-6xl font-extrabold text-emerald-300 mb-6"
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.4 }}
				>
					Explore Our Categories
				</motion.h1>
				<motion.p
					className="text-center text-xl sm:text-2xl text-gray-300 
					max-w-3xl mx-auto leading-relaxed mb-12"
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.6 }}
				>
					Discover the latest trends in eco-friendly fashion
				</motion.p>
				<motion.div
					className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-8"
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.8 }}
				>
					{categories.map((category) => (
						<motion.div
							key={category.name}
							className="relative overflow-hidden rounded-lg h-90" // Add a fixed height here
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.5, delay: 1 }}
						>
							<CategoryItem category={category} />
						</motion.div>
					))}
				</motion.div>

				{!isLoading && products.length > 0 && (
					<FeaturedProducts featuredProducts={products} />
				)}
			</motion.div>
		</motion.div>
	);
};
export default HomePage;

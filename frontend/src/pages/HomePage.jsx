import { useEffect } from "react";
import { motion } from "framer-motion";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";

// Category data
const categories = [
	{ href: "/jeans", name: "Jeans", imageUrl: "/jeans.png" },
	{ href: "/t-shirts", name: "T-shirts", imageUrl: "/tshirts.jpg" },
	{ href: "/shoes", name: "Shoes", imageUrl: "/shoes.jpg" },
	{ href: "/accessories", name: "Accessories", imageUrl: "/accessories.jpg" },
	{ href: "/jackets", name: "Jackets", imageUrl: "/jackets.png" },
	{ href: "/suits", name: "Suits", imageUrl: "/suits.png" },
	{ href: "/bags", name: "Bags", imageUrl: "/bags.png" },
];

const HomePage = () => {
	const { fetchFeaturedProducts, products, isLoading } = useProductStore();

	useEffect(() => {
		fetchFeaturedProducts();
	}, [fetchFeaturedProducts]);

	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				staggerChildren: 0.2,
				ease: "easeOut",
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.4, ease: "easeOut" },
		},
	};

	return (
		<div className="relative min-h-screen text-white overflow-hidden">
			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<motion.h1
					initial={{ opacity: 0, y: -30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className="text-center text-5xl sm:text-6xl font-bold text-red-500 mb-4"
				>
					Explore Our Categories
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
					className="text-center text-xl text-gray-300 mb-12"
				>
					Discover the latest trends in fashion
				</motion.p>

				{/* Category items with animation */}
				<motion.div
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
					variants={containerVariants}
					initial="hidden"
					animate="visible"
				>
					{categories.map((category) => (
						<motion.div key={category.name} variants={itemVariants}>
							<CategoryItem category={category} />
						</motion.div>
					))}
				</motion.div>

				{/* Featured Products */}
				{!isLoading && products.length > 0 && (
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
					>
						<FeaturedProducts featuredProducts={products} />
					</motion.div>
				)}
			</div>
		</div>
	);
};

export default HomePage;

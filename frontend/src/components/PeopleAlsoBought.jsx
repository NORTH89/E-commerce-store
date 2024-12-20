import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "../lib/axios";
import toast from "react-hot-toast";
import LoadingSpinner from "./LoadingSpinner";

const PeopleAlsoBought = () => {
	const [recommendations, setRecommendations] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchRecommendations = async () => {
			try {
				const res = await axios.get("/products/recommendations");
				setRecommendations(res.data);
			} catch (error) {
				toast.error(error.response.data.message || "An error occurred while fetching recommendations");
			} finally {
				setIsLoading(false);
			}
		};

		fetchRecommendations();
	}, []);

	if (isLoading) return <LoadingSpinner />;

	return (
		<div className="mt-12 px-4">
			<h3 className="text-3xl font-bold text-white mb-6 text-center sm:text-left">People also bought</h3>
			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{recommendations.map((product) => (
					<div 
						key={product._id} 
						className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-950">
						<ProductCard product={product} />
					</div>
				))}
			</div>
		</div>
	);
}
export default PeopleAlsoBought;

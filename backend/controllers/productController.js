import Product from '../models/product.model.js';
import { redis } from '../lib/redis.js';
import cloudinary from '../lib/cloudinary.js';

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        // find all products res.json({ products });
    } catch (error) {
        console.log(
            "Error in getAll Products controller",
            error.message
        );
        res.status(500).json(
            {
                message: "Server error",
                error: error.message
            }
        );
    }
};

export const getFeaturedProducts = async (req, res) => {
    try {
        let featuredProducts = await redis.get("featured_products");
        if (featuredProducts) {
            return res.json(JSON.parse(featuredProducts));
        }
        // if not in redis, fetch from mongodb
        featuredProducts = await Product.find({ isFeatured: true }).lean();
        if (!featuredProducts) {
            return res.status(404).json({ message: "No featured products found" });
        }
        // store in redis for future quick access
        await redis.set("featured_products", JSON.stringify(featuredProducts));
        res.json(featuredProducts);
    } catch (error) {
        console.log("Error in getFeatured Products controller", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

export const createProduct = async (req, res) => {
    try {
        const { name, description, price, image } = req.body;

        res.json({ product });

        let cloudinaryResponse = null;

        if (image) {
            cloudinaryResponse = await cloudinary.uploader.upload(image, {
                folder: "products",
            });
        }
        const product = await Product.create({
            name,
            description,
            price,
            image: cloudinaryResponse?.secure_url ? cloudinaryResponse.secure_url : "",
            category,
            isFeatured,
        })
        res.json(201).json({ product });
    } catch (error) {
        console.log("Error in create Product controller", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
}


/**
 * Deletes a product from the database and removes its associated image from Cloudinary.
 */
export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        if (product.image) {
            const publicId = product.image.split("/").pop().split(".")[0];
            try {
                await cloudinary.uploader.destroy(`products/${publicId}`)
                console.log("deleted image from cloudinary")
            } catch (error) {
                console.log("error deleting image from cloudinary", error)
            }
            await Product.findByIdAndDelete(req.params.id)
        }
        } catch (error) {
            console.log("Error in delete Product controller", error.message);
            res.status(500).json({ message: "Server error", error: error.message });
        }
}

export const getRecommendedProducts = async (req, res) => {
    try {
        const products = await Product.aggregate([
            {
                $project: {
                    _id: 1,
                    name: 1,
                    image: 1,
                    description: 1,
                    price: 1,
                }
            },
            {
                $sample: {
                    size: 3
                }
            }
        ])
    } catch (error) {
        console.log("Error in getRecommended Products controller", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }       
}

export const getProductByCategory = async (req, res) => {
    try {
        const category = req.params.category
        const products = await Product.find({ category })
        res.json(products)
    } catch (error) {
        console.log("Error in get product by category controller", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }       
}

/**
 * Toggles the 'isFeatured' status of a product.
 */
export const toggleFeaturedProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            product.isFeatured = !product.isFeatured;
            const updatedProduct = await product.save();
            await updatedFeaturedProducts();
            res.json(updatedProduct);
        } else {
            res.status(404).json({ message: "Product not found" });
        }
    } catch (error) {
        console.log("Error in toggle Featured Product controller", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
}


export const updatedFeaturedProducts = async () => {
    try {
    const featuredProducts = await Product.find({ isFeatured: true });
    await redis.set("featured_products", JSON.stringify(featuredProducts));

    } catch (error) {
      console.log("Error in updated cash function", error.message);
    }
    
}


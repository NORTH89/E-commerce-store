import Coupon from "../models/coupon.model";

export const getCoupon = async (req, res) => {
    try {
        const coupon = await Coupon.findOne({ userId: req.user._id, isActive: true });

        res.json(coupons || null);
    } catch (error) {
        console.log("Error in getCoupons controller", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
}

export const validateCoupon = async (req, res) => {
    try {
        const { code } = req.body;
        const coupon = await Coupon.findOne({ code: code, userId: req.user._id, isActive: true });

        if (!coupon) {
            return res.status(404).json({ message: "Coupon not found" });
        }

        if (coupon.expiryDate < new Date()) {
            coupon.isActive = false;
            return res.status(400).json({ message: "Coupon expired" });

        }
        res.json({
            discountPercentage: coupon.discountPercentage,
            message: "Coupon applied successfully",
            code: coupon.code,
        });


    } catch (error) {
        console.log("Error in validateCoupon controller", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
}

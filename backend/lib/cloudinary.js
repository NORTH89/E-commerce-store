import {v2 as cloudinary} from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})
export default cloudinary


/*************  ✨ Codeium Command ⭐  *************/
git commit -m "added cloudinary lib"
/******  50b97888-20f3-46aa-bc6a-1d6bcebc5283  *******/
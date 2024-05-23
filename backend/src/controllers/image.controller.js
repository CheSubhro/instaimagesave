

import { asyncHandler } from '../utils/AsyncHandler.js'
import { ApiError } from '../utils/ApiError.js'
import HttpStatus from '../utils/HttpStatus.js'
import { ApiResponse } from '../utils/ApiResponse.js'
import { Image }  from '../models/image.model.js'
import axios from 'axios';


const getImageUrl = asyncHandler ( async (req,res) =>{

    // TODO:
    // get URl from request Body
    // Use Axios
    // Extract image Url 

    const { url } = req.body;

    if (!url) {
        throw new ApiError('URL is required', HttpStatus.BAD_REQUEST);
    }

    try {
        const response = await axios.get(url);
        const imageUrl = extractImageUrl(response.data);
    
        if (!imageUrl) {
          throw new ApiError('Could not extract image URL', HttpStatus.NOT_FOUND);
        }
    
        const decodedImageUrl = decodeHtmlEntities(imageUrl);
    
        res.status(HttpStatus.OK).json({
          statusCode: HttpStatus.OK,
          message: 'Success',
          success: true,
          data: { imageUrl: decodedImageUrl }
        });
    } catch (error) {
        throw new ApiError(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }

})

const extractImageUrl = (html) => {
    const regex = /<meta property="og:image" content="(.*?)"/;
    const match = html.match(regex);
    return match ? match[1] : null;
};

const decodeHtmlEntities = (text) => {
    return text.replace(/&amp;/g, '&')
               .replace(/&lt;/g, '<')
               .replace(/&gt;/g, '>')
               .replace(/&quot;/g, '"')
               .replace(/&#39;/g, "'");
};

export {
    getImageUrl
}







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
    const imageUrls = extractImageUrls(response.data);

    if (!imageUrls.length) {
      throw new ApiError('Could not extract image URLs', HttpStatus.NOT_FOUND);
    }

    const decodedImageUrls = imageUrls.map(decodeHtmlEntities);

    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: 'Success',
      success: true,
      data: { imageUrls: decodedImageUrls }
    });
  } catch (error) {
    throw new ApiError(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
  }

})

const extractImageUrls = (html) => {
    // Extract images from <meta> tags
    const metaRegex = /<meta property="og:image" content="(.*?)"/g;
    const metaMatches = [...html.matchAll(metaRegex)];
    const metaImageUrls = metaMatches.map(match => match[1]);
  
    // Extract images from carousel items
    const carouselRegex = /<img[^>]+srcset="([^"]+)"[^>]+class="[^"]*FFVAD[^"]*"[^>]*>/g;
    const carouselMatches = [...html.matchAll(carouselRegex)];
    const carouselImageUrls = carouselMatches.map(match => {
      const srcset = match[1];
      // Take the first URL in srcset which is typically the highest quality
      return srcset.split(',')[0].split(' ')[0];
    });
  
    return [...metaImageUrls, ...carouselImageUrls];
  };

const decodeHtmlEntities = (text) => {
    return text.replace(/&amp;/g, '&')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&quot;/g, '"')
            .replace(/&#39;/g, "'");
}

export {
    getImageUrl
}





import { asyncHandler } from '../utils/AsyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import HttpStatus from '../utils/HttpStatus.js';
import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const downloadReelsVideo = asyncHandler(async (req, res, next) => {
  const { url } = req.body;

  if (!url) {
    return next(new ApiError('URL is required', HttpStatus.BAD_REQUEST));
  }

  try {
    const videoUrl = await getReelsVideoUrl(url);
    if (!videoUrl) {
      return next(new ApiError('Video URL not found in the HTML', HttpStatus.BAD_REQUEST));
    }

    const videoPath = path.join(__dirname, 'video.mp4');
    const writer = fs.createWriteStream(videoPath);

    const response = await axios({
      url: videoUrl,
      method: 'GET',
      responseType: 'stream'
    });

    response.data.pipe(writer);

    writer.on('finish', () => {
      res.download(videoPath, 'reel.mp4', (err) => {
        if (err) {
          console.error('Error in download response:', err);
          return next(new ApiError('Error downloading the video', HttpStatus.INTERNAL_SERVER_ERROR));
        }
        fs.unlinkSync(videoPath); // Clean up the video file after download
      });
    });

    writer.on('error', (err) => {
      console.error('Error writing the video file:', err);
      return next(new ApiError('Error downloading the video', HttpStatus.INTERNAL_SERVER_ERROR));
    });

  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error occurred:', error.toJSON());
      return next(new ApiError('Error fetching the video', HttpStatus.INTERNAL_SERVER_ERROR));
    } else {
      console.error('Unexpected error occurred:', error);
      return next(new ApiError('Unexpected error', HttpStatus.INTERNAL_SERVER_ERROR));
    }
  }
});

const getReelsVideoUrl = asyncHandler(async (url) => {
  try {
    const response = await axios.get(url);
    const html = response.data;

    // Log full HTML for debugging
    console.log('Fetched HTML:', html);

    // Extract video URL from HTML
    const regex = /"video_url":"(.*?)"/;
    const matches = html.match(regex);

    if (matches && matches[1]) {
      const videoUrl = matches[1].replace(/\\u0026/g, '&');
      console.log('Extracted video URL:', videoUrl);
      return videoUrl;
    } else {
      console.error('Video URL not found in the HTML');
      throw new ApiError('Video URL not found in the HTML', HttpStatus.BAD_REQUEST);
    }

  } catch (error) {
    console.error('Error fetching the Instagram page:', error);
    throw new ApiError('Error fetching the Instagram page', HttpStatus.INTERNAL_SERVER_ERROR);
  }
});

export {
  downloadReelsVideo
};

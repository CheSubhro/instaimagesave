import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Grid, Paper } from '@mui/material';
import axios from 'axios';

const Home = () => {
    const [url, setUrl] = useState('');
    const [imageUrls, setImageUrls] = useState([]);

    const handleUrlChange = async (event) => {
        const newUrl = event.target.value;
        setUrl(newUrl);

        if (newUrl) {
            try {
                const response = await axios.post('http://localhost:8000/api/v1/image/download', { url: newUrl });
                setImageUrls(response.data.data.imageUrls);
            } catch (error) {
                console.error('Error fetching the images:', error);
                setImageUrls([]);
            }
        } else {
            setImageUrls([]);
        }
    };

    const handleDownloadSingle = async (imageUrl) => {
        try {
            const response = await axios.get(imageUrl, {
                responseType: 'blob',
            });
            const blob = new Blob([response.data], { type: response.headers['content-type'] });
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = `image_${new Date().getTime()}.jpg`;  // Generate a unique filename
            link.click();
            window.URL.revokeObjectURL(link.href);
        } catch (error) {
            console.error('Error downloading the image:', error);
        }
    };

    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h3" gutterBottom align="center">
                Instagram Photo Downloader
            </Typography>
            <Typography variant="h6" gutterBottom align="center">
                Download Instagram Photo in an easy and faster way with instastorysave.com Instagram Photo Downloader tool for free.
            </Typography>
            <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                <TextField
                    label="Instagram Photo URL"
                    variant="outlined"
                    value={url}
                    onChange={handleUrlChange}
                    fullWidth
                    sx={{ mb: 2, maxWidth: 800 }}
                />
            </Box>
                {imageUrls.length > 0 && (
                <Grid container spacing={2} justifyContent="center" sx={{ mt: 4 }}>
                    {imageUrls.map((imageUrl, index) => (
                        <Grid item key={index} xs={12} sm={6} md={4}>
                            <Paper elevation={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
                                <img src={imageUrl} alt={`Instagram ${index}`} style={{ width: '100%', height: 'auto', maxWidth: '300px' }} />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => handleDownloadSingle(imageUrl)}
                                    sx={{ mt: 2 }}
                                >
                                    Download
                                </Button>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
                )}
                <Grid container spacing={2} sx={{ mt: 4 }} justifyContent="center">
                    <Grid item xs={12} md={8}>
                        <Paper elevation={3} sx={{ padding: 2 }}>
                            <Typography variant="body1" align="center">
                                Since Instagram launched, it comes with option where you can share or publish photos to your page. And currently people love to upload reels than photos, but still there are millions of users who only posts photos. And sometimes users want to download some photos from Instagram, but they can't as there are no official features available for downloading image. Instead, people take screenshot so that they can save those picture to their device, though it's not a good option to do. However, you can find here a photo download tool for Instagram which can bring you the favorite photo of yours from Instagram with just link in very high quality without using extension. All you have to copy the photo link from Instagram and paste here in this tool and get the photo.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Paper elevation={3} sx={{ padding: 2 }}>
                            <Typography variant="h4" gutterBottom>
                                What we're going to look at
                            </Typography>
                            <Box component="ul" style={{ paddingLeft: '20px' }}>
                                <li><Typography variant="body1">How You Can Download Photo?</Typography></li>
                                <li><Typography variant="body1">Features of Instagram Photo Downloader</Typography></li>
                                <li><Typography variant="body1">What is Instagram Photo?</Typography></li>
                                <li><Typography variant="body1">Why Photo Downloader Helpful</Typography></li>
                                <li><Typography variant="body1">FAQs of Photo Downloader</Typography></li>
                                <li><Typography variant="body1">Wrapping Up</Typography></li>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Paper elevation={3} sx={{ padding: 2 }}>
                            <Typography variant="h4" gutterBottom>
                                How You Can Download Photo?
                            </Typography>
                            <Typography variant="body1" align="center">
                            Downloading photos from Instagram there are so many ways available just like you can take screenshot, but it can decrease the image quality. Then you can use an application which allow you to download content from Insta, but it might ask for sing up or others permission. So instead of all of these process, you should consider using an online tool just like this one. As this tool just need the image URL to save the photo in original quality.
                            </Typography>
                            <Box component="ul" style={{ paddingLeft: '20px' }}>
                                <li><Typography variant="body1">Firstly log in to your Instagram profile using app or browser, and open the image from which one you want to download.</Typography></li>
                                <li><Typography variant="body1">Then click to the share button below of the photo, now click to the copy link button and copy the link to your clipboard.</Typography></li>
                                <li><Typography variant="body1">Visit here with your device browser and paste the copied link in the search box, then click the download button.</Typography></li>
                                <li><Typography variant="body1">So here will be the downloading has started and the image quality will very high in original quality.</Typography></li>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Paper elevation={3} sx={{ padding: 2 }}>
                            <Typography variant="h4" gutterBottom>
                                Features of Instagram Photo Downloader
                            </Typography>
                            <Typography variant="body1" align="center">
                                Talking about features of this insta image download tool, then it's very simple and compatible to use for any device. As it doesn't require any other things except browser and this is one of the reason people use online tool instead of downloader application. And the most important thing about this tool is it's completely free to use for anyone.
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <Paper elevation={3} sx={{ padding: 2 }}>
                                        <Typography variant="h6">Unlimited Download</Typography>
                                        <Typography variant="body1">As it's completely free to use tool, so users might have thought that it has limited uses, but no it's an absolutely unlimited using tool. You can download photos anytime from Instagram and for unlimited time there are no limits for use.</Typography>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Paper elevation={3} sx={{ padding: 2 }}>
                                        <Typography variant="h6">No Sign Up</Typography>
                                        <Typography variant="body1">Using downloader software for downloading Instagram content, sometimes it asks for sign up with your ID to use the app. But in this tool there are no required for sign up as it's an open source available tool which is accessible for anyone.</Typography>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Paper elevation={3} sx={{ padding: 2 }}>
                                        <Typography variant="h6">Compatible</Typography>
                                        <Typography variant="body1">Tool are meant to be for everyone and that's why user can use this tool for downloading insta photo using any device as it's compatible for any device. No matter whether you are using IOS or Android and Windows or Mac it can run in any device.</Typography>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Paper elevation={3} sx={{ padding: 2 }}>
                                        <Typography variant="h6">No Extension</Typography>
                                        <Typography variant="body1">Use this insta photo saver tool without using any extension to your browser as it's not like other tool which may ask for using an extension. It's a completely one step downloading tool for insta users.</Typography>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <Paper elevation={3} sx={{ padding: 2 }}>
                            <Typography variant="h4" gutterBottom>
                                What is Instagram Photo?
                            </Typography>
                            <Typography variant="body1" align="center">
                            On Instagram people daily uploads millions of videos, igtv, reels and photos also. So those who upload posts of photos that is Instagram photo where they add a caption also they can tag people on their photos. Anyone can upload their photos on Insta as a post so that you can get more followers and reach to your insta profile.
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <Paper elevation={3} sx={{ padding: 2 }}>
                            <Typography variant="h4" gutterBottom>
                                Others method you can follow to Save Photo
                            </Typography>
                            <Typography variant="body1" align="center">
                            The basic methods users usually used to save insta photos is they take screenshot. And it's a most easiest way to save to photos. All you have to do is open the photo and simply take a screenshot, and it will save to your device.

                            Note: Use this photo download tool for getting the image in original quality, otherwise taking screenshot is not good option if it's about using the photo for some edits.
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <Paper elevation={3} sx={{ padding: 2 }}>
                            <Typography variant="h4" gutterBottom>
                                Why Photo Downloader Helpful
                            </Typography>
                            <Typography variant="body1" align="center">
                            People who don't use photo downloader tool for insta usually they take screenshot for saving any photo. And it's fact that taking screenshot will decrease the photo quality, so if you want to use the photo for some amazing edits, then you can't do it with low quality photo. So that's why insta photo downloader tool is always helpful as it's offer high quality photo in original quality.
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <Paper elevation={3} sx={{ padding: 2 }}>
                            <Typography variant="h4" gutterBottom>
                                Wrapping Up
                            </Typography>
                            <Typography variant="body1" align="center">
                            Download Instagram photos in original quality in just few steps with this photo saver tool, for completely free. So say by to taking screenshot so that you photo always be in high quality. Bring the insta posts link here in this tool and get the photo in just few clicks. As it doesn't need extension to use, and it's available for all device no matter it's phone or pc, it works anywhere with just your device browser.
                            </Typography>
                        </Paper>
                    </Grid>

                </Grid>
            
        </Container>
    );
};

export default Home;

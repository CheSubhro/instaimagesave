
import React, { useState } from 'react';
import { Container, Accordion,AccordionSummary,AccordionDetails,Typography, TextField, Button, Box, Grid, Paper } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from 'axios';

const Reels = () => {

    const [url, setUrl] = useState('');
    const [reelUrls, setreelUrls] = useState([]);

    const handleUrlChange = async (event) => {
        const newUrl = event.target.value;
        setUrl(newUrl);

        if (newUrl) {
            try {
                const response = await axios.post('http://localhost:8000/api/v1/image/download', { url: newUrl });
                setreelUrls(response.data.data.reelUrls);
            } catch (error) {
                console.error('Error fetching the reels:', error);
                setreelUrls([]);
            }
        } else {
            setreelUrls([]);
        }
    };

    const handleDownloadSingle = async (reelUrl) => {
        try {
            const response = await axios.get(reelUrl, {
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
        <>
            <Container maxWidth="lg" sx={{ mt: 4 }}>
            <Typography variant="h3" gutterBottom align="center">
                Instagram Reels Downloader
            </Typography>
            <Typography variant="h6" gutterBottom align="center">
                A New generation innovative Instagram Reels Downloader tool that gives you a super faster Reel Video save experience for free.
            </Typography>
            <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                <TextField
                    label="Instagram Reels URL"
                    variant="outlined"
                    value={url}
                    onChange={handleUrlChange}
                    fullWidth
                    sx={{ mb: 2, width: '100%', maxWidth: 1000 }} 
                />
            </Box>
                {reelUrls.length > 0 && (
                <Grid container spacing={2} justifyContent="center" sx={{ mt: 4, width: '100%', maxWidth: 1000 }}>
                    {reelUrls.map((reelUrl, index) => (
                        <Grid item key={index} xs={12} sm={6} md={4}>
                            <Paper elevation={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
                                <img src={reelUrl} alt={`Instagram ${index}`} style={{ width: '100%', height: 'auto', maxWidth: '300px' }} />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => handleDownloadSingle(reelUrl)}
                                    sx={{ mt: 2 }}
                                >
                                    Download
                                </Button>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
                )}
                <Grid container spacing={2} sx={{ mt: 4, width: '100%', maxWidth: 5000 }} justifyContent="center">
                    <Grid item xs={12} md={8}>
                        <Paper elevation={3} sx={{ padding: 2 }}>
                            <Typography variant="body1" align="left" style={{ whiteSpace: 'pre-line' }}>
                            World's most active social media is now Instagram because of the reels feature. In short term, reels is a short video format which is inspired by TikTok. Well, after getting banned the china origin TikTok social platform from different countries, Instagram Reels got the boost of popularity. And that's why Instagram is now one of the most popular social media platform by Meta Platforms, Inc. Before Instagram Reels feature, it was just another social platform where peoples can follow each others and their favorite celebrities. Now everyone can become a popular person and earn money with collaborate with brands as well by sharing amazing reels short videos. And using this Instagram Reels feature, a regular users can also become a popular celebrity as like Khabane Lame.

                            And sometimes we want to download reels video to make a remix or entertainment purpose, and this site will help to save or download an Instagram Reels video with high quality for free. Instagram do have inbuilt reels save feature, but it's available for every reels video.
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <Paper elevation={3} sx={{ padding: 2 }}>
                            <Typography variant="h4" gutterBottom style={{ color: 'black', fontWeight: 'bold' }}>
                                What we're going to look at
                            </Typography>
                            <Box component="ul" style={{ paddingLeft: '20px' }}>
                                <li><Typography variant="body1">How You Can Download Reels?</Typography></li>
                                <li><Typography variant="body1">Features of Instagram Reels Downloader</Typography></li>
                                <li><Typography variant="body1">How Reels Downloader Work?</Typography></li>
                                <li><Typography variant="body1">Others method you can follow to Save Reels</Typography></li>
                            </Box>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <Paper elevation={3} sx={{ padding: 2 }}>
                            <Typography variant="h4" gutterBottom style={{ color: 'black', fontWeight: 'bold' }}>
                                How You Can Download Reels?   
                            </Typography>
                            <Typography variant="body1" align="left" style={{ whiteSpace: 'pre-line' }}>
                                So you'll need to use a reels saver tool to download an Instagram Reels video with music. And you can use this amazing web app tool which will help you download any reels by its URL with high quality. The best part of this site is you don't need to download any app or browser extension to save reels offline. Even it can convert your reels URL to audio mp3 format just a click. Well, you can follow the showing steps below to download a reel by its URL.
                                
                            </Typography>
                            <Box component="ul" style={{ paddingLeft: '20px' }}>
                                <li>
                                    <Typography variant="body1">
                                        Open your Instagram using application or web browser, and click on the Reels part.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant="body1">
                                        In reels video, you'll see a 3 dot or more option, so click on it and copy the reels link.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant="body1">
                                        Now visit on Reels Saver page by Instastorysave.com and paste the URL.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant="body1">
                                        After paste the link, hit on start, the process will take a moment, and then you can download the reels video with high quality. Even we do have more features, read below to know.
                                    </Typography>
                                </li>
                            </Box>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <Paper elevation={3} sx={{ padding: 2 }}>
                            <Typography variant="h4" gutterBottom style={{ color: 'black', fontWeight: 'bold' }}>
                                Features of Instagram Reels Downloader
                            </Typography>
                            <Typography variant="body1" align="left" style={{ whiteSpace: 'pre-line' }}>
                                We have built this tool with some extra features after consuming the user's requirement. And hope we'll make our users happy by providing such features for free. Even our developer team constantly work on it to provide the best users experience on Instastorysave.com, so let's know features of reels downloader.
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <Paper elevation={3} sx={{ padding: 2 }}>
                                        <Typography variant="h6" style={{ color: 'black', fontWeight: 'normal' }}>High Quality</Typography>
                                        <Typography variant="body1">Providing a reels video by its URL, it's not easy method and as you know there are many tools for reels download. But we only clam that using this one you can get the high quality video because we don't optimize the video quality for faster loading. Instead, we provide the original quality of the reels video with faster download experience.</Typography>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Paper elevation={3} sx={{ padding: 2 }}>
                                        <Typography variant="h6" style={{ color: 'black', fontWeight: 'normal' }}>Unlimited Usage</Typography>
                                        <Typography variant="body1">We are really happy to tell you that using this tool is free with unlimited times. It don't have any usages limit for every user. So you can also download reels as much you can without any restriction.One you can get the high quality video because we don't optimize the video quality reels download But we only clam that using this one you </Typography>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Paper elevation={3} sx={{ padding: 2 }}>
                                        <Typography variant="h6" style={{ color: 'black', fontWeight: 'normal' }}>Secure Privacy</Typography>
                                        <Typography variant="body1">In this technology internet age, users privacy is our main priority because it's priceless. And you'll be happy to know that we don't collect your personal data or share with others.One you can get the high quality video because we don't optimize the video quality reels download But we only clam that using this one you. But we may do use Google Analytics, which you have to consider with it to use this site, read our privacy policy page to know more.</Typography>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Paper elevation={3} sx={{ padding: 2 }}>
                                        <Typography variant="h6" style={{ color: 'black', fontWeight: 'normal' }}>Completely Free Service</Typography>
                                        <Typography variant="body1">This is a tool which is built for people's for free of cost, and you can One you can get the high quality video because we don't optimize the video quality reels download But we only clam that using this one you.One you can get the high quality video because we don't optimize the video quality reels download But we only clam that using this one youuse it as much you can without any additional charges. But we may display some ads to maintain this tool.</Typography>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Paper elevation={3} sx={{ padding: 2 }}>
                                        <Typography variant="h6" style={{ color: 'black', fontWeight: 'normal' }}>Faster Process & Saver</Typography>
                                        <Typography variant="body1">This website is built with modern technology framework which will make this reels downloader process faster with high speed download feature. To make your reels downloading experience faster, you should use this web app, which is completely for free.</Typography>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Paper elevation={3} sx={{ padding: 2 }}>
                                        <Typography variant="h6" style={{ color: 'black', fontWeight: 'normal' }}>No Account Needed</Typography>
                                        <Typography variant="body1">To use this tool, you don't need to register with us, just visit and paste the link and get the video. Making an account for saving just a reel, it's not making any sense. And that's why you don't need to make an account to use this tool, which will save your time as well.</Typography>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <Paper elevation={3} sx={{ padding: 2 }}>
                            <Typography variant="h4" gutterBottom style={{ color: 'black', fontWeight: 'bold' }}>
                                How Reels Downloader Work?
                            </Typography>
                            <Typography variant="body1" align="left" style={{ whiteSpace: 'pre-line' }}>
                            And if you are talking about how this reels downloader work, which helping you to get the video on your device offline. So let me tell you in short, Instagram allowed to download its reels or others video for specific developers for testing and education purpose only. And we are using the developer's API, with our unique designed framework theme.
                            <br/>
                            <br/>
                            So whatever you are downloading, it's direct from Instagram or Meta CDN server. We don't host or store any Instagram content in our server. So you should take care of Instagram copyright guidelines before downloading any content using our tool.
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <Paper elevation={3} sx={{ padding: 2 }}>
                            <Typography variant="h4" gutterBottom style={{ color: 'black', fontWeight: 'bold' }}>
                                Why Reels Downloader Helpful
                            </Typography>
                            <Typography variant="body1" align="left" style={{ whiteSpace: 'pre-line' }}>
                            An Instagram Reels downloader can be helpful for different reason like remix content, collaborate, reaction or review, using its music, information share with others, etc. But you should not to download a creator reels video for re-upload or share with others platform, it's against the Instagram copyright low.

                            <h4>Remix Content:</h4> Instagram, allow making someone's remix video with others creator video, but with terms and conditions. Like, you can't remix or edit the video for your own business promotion without the original creator permission, etc.
                            <h4>Save for Offline Watch:</h4> Instagram, allow making someone's remix video with others creator video, but with terms and conditions. Like, you can't remix or edit the video for your own business promotion without the original creator permission, etc.
                            <h4>Reaction or Review Video:</h4> Instagram, allow making someone's remix video with others creator video, but with terms and conditions. Like, you can't remix or edit the video for your own business promotion without the original creator permission, etc.
                            <h4>Use The Audio:</h4> Instagram, allow making someone's remix video with others creator video, but with terms and conditions. Like, you can't remix or edit the video for your own business promotion without the original creator permission, etc.
                            <h4>Collect Information:</h4> Instagram, allow making someone's remix video with others creator video, but with terms and conditions. Like, you can't remix or edit the video for your own business promotion without the original creator permission, etc.
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <Paper elevation={3} sx={{ padding: 2 }}>
                            <Typography variant="h4" gutterBottom style={{ color: 'black', fontWeight: 'bold' }}>
                                Others method you can follow to Save Reels
                            </Typography>
                            <Typography variant="body1" align="left" style={{ whiteSpace: 'pre-line' }}>
                            <h4>Instagram Default Reels Save:</h4> Did you know, Instagram has its built in reels save option, but it's not available for every reel. So you can use Instagram Reels save feature to make it faster and without using any websites or tool. Just click on the reels 3 dot button and down below you'll see the save feature.
                            <h4>Screen Recording:</h4> If you are not interested to use a web tool to save an Instagram Reels, then you can also use this method to screen record the reels video. And you can screen record the reels, but it will be the low quality with huge file size. Most devices OS comes with their default screen recording feature which you can use.
                            </Typography>
                        </Paper>
                    </Grid>

                    
                    <Grid item xs={12} md={8}>
                        <Paper elevation={3} sx={{ padding: 2 }}>
                            <Typography variant="h4" gutterBottom style={{ color: 'black', fontWeight: 'bold' }}>
                                FAQs of Reels Downloader
                            </Typography>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant="h6">What is reels downloader online?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Reels saver or downloader is a website which help users to save the reels in offline as a mp4 video format which we can watch offline. The reels downloader can be a software as well, but when it's online it's mean it's a web app or website.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant="h6">Is it legal to download reels using web app?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    The legality of downloading reels from Instagram depends on several factors. You just make sure that you can't re-upload on Instagram same as before and do not use it for your own business purpose. Also, don't share the video with others platform like YouTube, Facebook without the video owner permission.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant="h6">How to download a reel with high quality?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    There are many reels downloader tool has available in web but if you want to download the reels video with high quality you can visit on instastorysave.com for batter video regulation.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant="h6">Can I use this reels downloader on my iPhone?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Yes, you can use this web app with your iPhone and others iOS devices as well. Not only iPhone, this tool supported by varies web browser like Chrome, Mozilla, Breve, and others with Android, Mac, Windows, as well.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant="h6">What is the best method to save a reels offline?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    The best method is for downloading a reel is using website, which make the process faster and quicker as well. With this website, you just have to paste the reels link and click on download and your reels video will be save on your local device storage.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant="h6">Where the reels will save after download using this tool?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    It's depend on your device browser download location. So look at where you have set your download folder, and you'll see the reels video as a mp4 format.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant="h6">Can I copy the reels caption?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Yes, we do provide the reels caption as well the reels video, which is an extra feature which don't have in others websites. Just click on the caption copy button, and then you can also able to copy the reels title or caption as well.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant="h6">How to save a reels video with music?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    It's already providing the reels video with its music. So just paste the reels link and download the video as a mp4 format with audio. But if you want to download the reels audio only as a mp3 format, then you should visit on our audio downloader page
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <Paper elevation={3} sx={{ padding: 2 }}>
                            <Typography variant="h4" gutterBottom style={{ color: 'black', fontWeight: 'bold' }}>
                                Last Words
                            </Typography>
                            <Typography variant="body1" align="left" style={{ whiteSpace: 'pre-line' }}>
                                As you read in this page, we have discussed all about Instagram Reels from the begging to now with how to download a reel video as well. Even we have guided you what to do and what not to do for downloading an Instagram Reels, because we do respect the Instagram terms and conditions with the original video creator as well.
                            </Typography>
                        </Paper>
                    </Grid>

                </Grid>
            
            </Container>
        </>
    )
}

export default Reels
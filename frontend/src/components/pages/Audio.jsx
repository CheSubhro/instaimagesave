
import React, { useState } from 'react';
import { Container, Accordion,AccordionSummary,AccordionDetails,Typography, TextField, Button, Box, Grid, Paper } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from 'axios';

const Audio = () => {

    const [url, setUrl] = useState('');
    const [audioUrls, setaudioUrls] = useState([]);

    const handleUrlChange = async (event) => {
        const newUrl = event.target.value;
        setUrl(newUrl);

        if (newUrl) {
            try {
                const response = await axios.post('http://localhost:8000/api/v1/image/download', { url: newUrl });
                setaudioUrls(response.data.data.audioUrls);
            } catch (error) {
                console.error('Error fetching the Audio:', error);
                setaudioUrls([]);
            }
        } else {
            setaudioUrls([]);
        }
    };

    const handleDownloadSingle = async (audioUrl) => {
        try {
            const response = await axios.get(audioUrl, {
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
                Instagram Reels Audio Downloaders
            </Typography>
            <Typography variant="h6" gutterBottom align="center">
                With this tool, users can convert Instagram Reels into MP3 completely free. Paste the reel URL and download the audio only within a second.
            </Typography>
            <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                <TextField
                    label="Instagram Audio URL"
                    variant="outlined"
                    value={url}
                    onChange={handleUrlChange}
                    fullWidth
                    sx={{ mb: 2, width: '100%', maxWidth: 1000 }} 
                />
            </Box>
                {audioUrls.length > 0 && (
                <Grid container spacing={2} justifyContent="center" sx={{ mt: 4, width: '100%', maxWidth: 1000 }}>
                    {audioUrls.map((audioUrl, index) => (
                        <Grid item key={index} xs={12} sm={6} md={4}>
                            <Paper elevation={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
                                <img src={audioUrl} alt={`Instagram ${index}`} style={{ width: '100%', height: 'auto', maxWidth: '300px' }} />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => handleDownloadSingle(audioUrl)}
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
                            Since Meta has launched the Instagram Reels, it has becoming very popular across the world with billions of users. According to Meta, there are close to 200 billions reels plays daily in Facebook and Instagram from all over the world. And that's where Instagram audio downloader stands, as it's an audio saver tool for Instagram, so you can save any of your favorite reels' audio to your device. This tool doesn't require a single browser extension to use, all it's need your device browser to use. For saving any Instagram Reels with this tool, all you have to bring the reels link here and paste to the search box and get the audio instantly in very high quality. It's very easy and convenient way to extract audio from reels, igtv, videos of Instagram in just few clicks.
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <Paper elevation={3} sx={{ padding: 2 }}>
                            <Typography variant="h4" gutterBottom style={{ color: 'black', fontWeight: 'bold' }}>
                                What we're going to look at
                            </Typography>
                            <Box component="ul" style={{ paddingLeft: '20px' }}>
                                <li><Typography variant="body1">How You Can Download Reels Audio?</Typography></li>
                                <li><Typography variant="body1">Features of Instagram Audio Downloader</Typography></li>
                                <li><Typography variant="body1">What is Instagram Reels Audio?</Typography></li>
                                <li><Typography variant="body1">Why Reels Audio Downloader Helpful</Typography></li>
                            </Box>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <Paper elevation={3} sx={{ padding: 2 }}>
                            <Typography variant="h4" gutterBottom style={{ color: 'black', fontWeight: 'bold' }}>
                                How You Can Download Reels Audio?
                            </Typography>
                            <Typography variant="body1" align="left" style={{ whiteSpace: 'pre-line' }}>
                            From the day Instagram reels has launched, it has no official feature to convert reels to audio, but to make the latest reels users need the trending audio from reels. So people usually download the reels and extract audio from some software and tools. And there are this reels to audio extractor tool which only needs the reels link to save to audio at few clicks.
                                
                            </Typography>
                            <Box component="ul" style={{ paddingLeft: '20px' }}>
                                <li><Typography variant="body1">Login to your Instagram profile using app or browser, then open the reels from where you want to convert into audio.</Typography></li>
                                <li><Typography variant="body1">Then in the below right corner of the reels find a share button click on that, now click the copy link button.</Typography></li>
                                <li><Typography variant="body1">Now visit her in this reels' convertor tool here and paste the copied link in the search box from your device clipboard.</Typography></li>
                                <li><Typography variant="body1">So lastly, you have to click on the download button, and it will start converting the audio from the reels and save to your device.</Typography></li>
                            </Box>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <Paper elevation={3} sx={{ padding: 2 }}>
                            <Typography variant="h4" gutterBottom style={{ color: 'black', fontWeight: 'bold' }}>
                                Features of Instagram Audio Downloader
                            </Typography>
                            <Typography variant="body1" align="left" style={{ whiteSpace: 'pre-line' }}>
                                Although it's a single use reels audio extractor tool, still it has some interesting features that you may find useful. Those people use this tool to convert Instagram Reels, videos, igtv into mp3 they know that it's very high quality audio to save.
                            </Typography>
                            <Grid container spacing={2} sx={{ display: 'flex', flexWrap: 'wrap' }}>
                                <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
                                    <Paper elevation={3} sx={{ padding: 2, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                        <Typography variant="h6" style={{ color: 'black', fontWeight: 'normal' }}>No Sing Up</Typography>
                                        <Typography variant="body1">Converting reels audio by using application, some of the app may need to sing up before using. And that's where this tool is most useful, as it doesn't require for any sing up to use, all it's need your device browser to access it.</Typography>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
                                    <Paper elevation={3} sx={{ padding: 2, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                        <Typography variant="h6" style={{ color: 'black', fontWeight: 'normal' }}>Unlimited Uses</Typography>
                                        <Typography variant="body1">It's not like some paid software and tool which may offer only limited use, as it's available for unlimited use. Whenever you think you need to extract audio from any Instagram Reels or videos you can use this tool, there are no limits for use it's completely for unlimited use.</Typography>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
                                    <Paper elevation={3} sx={{ padding: 2, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                        <Typography variant="h6" style={{ color: 'black', fontWeight: 'normal' }}>Compatible</Typography>
                                        <Typography variant="body1">The best thing about this audio convertor tool is its very user-friendly tool which only ask for your device browser to use. And it's compatible for all the device, whether it's IOS or Android and Windows or Mac. Also, it doesn't have any specific browser to require using, it can run on any browser your device have.</Typography>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
                                    <Paper elevation={3} sx={{ padding: 2, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                        <Typography variant="h6" style={{ color: 'black', fontWeight: 'normal' }}>No Extension</Typography>
                                        <Typography variant="body1">Using online tools, sometimes it needs kinds of extension to use, and that's a very extra process to do so. But with this reels to mp3 tool it doesn't require any browser extension, it's just needed any existing browser to us</Typography>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
                                    <Paper elevation={3} sx={{ padding: 2, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                        <Typography variant="h6" style={{ color: 'black', fontWeight: 'normal' }}>High Quality</Typography>
                                        <Typography variant="body1">The only thing users love when they use this reels convertor tor for getting reels audio is its offer very high quality audio to save. You can save any reels mp3 with 320kbps & 192kbps high-quality files.</Typography>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
                                    <Paper elevation={3} sx={{ padding: 2, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                        <Typography variant="h6" style={{ color: 'black', fontWeight: 'normal' }}>Fast Download</Typography>
                                        <Typography variant="body1">With this app, you can download your Mp3 Instagram Reels audio faster with secure way. It's build with CDN download server feature which will give extra fast download then others.</Typography>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <Paper elevation={3} sx={{ padding: 2 }}>
                            <Typography variant="h4" gutterBottom style={{ color: 'black', fontWeight: 'bold' }}>
                                What is Instagram Reels Audio?
                            </Typography>
                            <Typography variant="body1" align="left" style={{ whiteSpace: 'pre-line' }}>
                            Instagram Reels is a replacement of long form content which is videos of maximum 1 min where it comes with an audio. Whether it's voiceover videos or music reels, it comes with the own sound, and users also can make reels using a music which also has so many reels. So people pick popular music from Instagram reels and make their own reel
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <Paper elevation={3} sx={{ padding: 2 }}>
                            <Typography variant="h4" gutterBottom style={{ color: 'black', fontWeight: 'bold' }}>
                                Why Reels Audio Downloader Helpful
                            </Typography>
                            <Typography variant="body1" align="left" style={{ whiteSpace: 'pre-line' }}>
                            Instagram has features to select any reels' music to make a new reel directly from Instagram. But the thing is whenever a user want to make a reels with high quality editing and transition they need to make shot the video first then adding sound while edit in the editing software. So that's why this reels convertor tool is very useful and impotent. So you can get the audio from reels and create your own creativity and sync the reels perfectly with audio for a perfect reels.
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <Paper elevation={3} sx={{ padding: 2 }}>
                            <Typography variant="h4" gutterBottom style={{ color: 'black', fontWeight: 'bold' }}>
                                Others method you can follow to save reels audio
                            </Typography>
                            <Typography variant="body1" align="left" style={{ whiteSpace: 'pre-line' }}>
                            Saving The Reels and Extract The Audio: This one of the method to download any Instagram Reels audio, where you have to first download or save the reels to your device then you can upload to an audio extractor software or tool where that extract the reels' audio.

                            <h4>Note:</h4> It clouds be complicated and time taking process, instead you can use this web app to convert any reels to Mp3 by using its URL only
                            </Typography>
                        </Paper>
                    </Grid>
                    
                    <Grid item xs={12} md={8}>
                        <Paper elevation={3} sx={{ padding: 2 }}>
                            <Typography variant="h4" gutterBottom style={{ color: 'black', fontWeight: 'bold' }}>
                                FAQs of Reels Audio Downloader
                            </Typography>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant="h6"> Can I use this tool on my iPhone?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                Yes of course you can use this reels audio extractor tool in your iPhone as it's a very compatible tool for any device no matter it's IOS or Android. It just needed your device browser to access, and you are able to use this.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant="h6">Can we use this audio anywhere on the internet?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                As every music comes with music which are copyrighted under labels, so everyone not has permission to use their audio anywhere. But if you extract some audios which are not made by any music labels ten you can use that anywhere, but only for fun purpose not for commercial use.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant="h6">How to Grow Your Instagram Reels?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                There are no official ways to growth your Instagram reels, but posting consistent reels can give you so much reach to your page. However, keep in touch with the trend on reels which are very popular at the moment for making viral reels. And know about the Instagram algorithm to make your Reels ranked.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant="h6">Is this tool available for free?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                Yes of course this tool is for free to use which anybody can use in their device browser. You can use anytime for extracting reels, video, igtv into audio from Instagram.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant="h6">Where these downloaded audio goes on my device?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                If you can't find the file which you have download from here then go to download section of your browser then locate the location of download file, which you can also change. So you can save your download audio in any file of your device file manager.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant="h6">How to find trending audio from Instagram?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                The only way to find trending audio from Instagram is to keep your self updated with what's going on in Instagram trending feed.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <Paper elevation={3} sx={{ padding: 2 }}>
                            <Typography variant="h4" gutterBottom style={{ color: 'black', fontWeight: 'bold' }}>
                                Wrapping Up
                            </Typography>
                            <Typography variant="body1" align="left" style={{ whiteSpace: 'pre-line' }}>
                            Making best reels with best editing you need to extract audio from reels, so for converting mp3 from reels this reels convertor tool will be the best option for you. It doesn't need any kinds of extension or sing up to use. And the best thing about this tool is it's a very easy and convenient to use, in the other hand using app for this process which need more things. So avoid using app for getting reels audio and use this reels audio extractor tool.
                            </Typography>
                        </Paper>
                    </Grid>

                </Grid>
            
            </Container>
        </>
    )
}

export default Audio
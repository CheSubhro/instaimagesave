
import React, { useState } from 'react';
import { Container, Accordion,AccordionSummary,AccordionDetails,Typography, TextField, Button, Box, Grid, Paper } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from 'axios';

const Story = () => {

    const [url, setUrl] = useState('');
    const [storyUrls, setstoryUrls] = useState([]);

    const handleUrlChange = async (event) => {
        const newUrl = event.target.value;
        setUrl(newUrl);

        if (newUrl) {
            try {
                const response = await axios.post('http://localhost:8000/api/v1/image/download', { url: newUrl });
                setstoryUrls(response.data.data.storyUrls);
            } catch (error) {
                console.error('Error fetching the story:', error);
                setstoryUrls([]);
            }
        } else {
            setstoryUrls([]);
        }
    };

    const handleDownloadSingle = async (storyUrl) => {
        try {
            const response = await axios.get(storyUrl, {
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
                Instagram Story Saver
            </Typography>
            <Typography variant="h6" gutterBottom align="center">
                #1 Faster Instagram Story Saver anonymously with download story with music in full HD. A new generation innovative stories downloader without sign-up.
            </Typography>
            <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                <TextField
                    label="Instagram Story URL"
                    variant="outlined"
                    value={url}
                    onChange={handleUrlChange}
                    fullWidth
                    sx={{ mb: 2, width: '100%', maxWidth: 1000 }} 
                />
            </Box>
                {storyUrls.length > 0 && (
                <Grid container spacing={2} justifyContent="center" sx={{ mt: 4, width: '100%', maxWidth: 1000 }}>
                    {storyUrls.map((storyUrl, index) => (
                        <Grid item key={index} xs={12} sm={6} md={4}>
                            <Paper elevation={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
                                <img src={storyUrl} alt={`Instagram ${index}`} style={{ width: '100%', height: 'auto', maxWidth: '300px' }} />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => handleDownloadSingle(storyUrl)}
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
                            Instagram is a world largest social media platform where peoples can spend their daily free time with sharing activity, and it was build for it. But with this revolutionary generation it's become also one of the most human active platform in social media category. With the regular users join most popular celebrities and brands in Instagram platform. And it was a short storyline of Instagram platform. Well, if you are an old user of Instagram then you'll know with the time Instagram changed and added its features, and Instagram story feature was added in August 2016. Which was mainly added for showing of a user's daily lifestyle and users activity which get removed after 24 hours. And no doubt it was a successful feature for Instagram and till date this story features has available and peoples also make money thought story feature. And Instagram doesn't have features to save or download a story its self, so you have to use a tool like this to save an Instagram story for free!
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <Paper elevation={3} sx={{ padding: 2 }}>
                            <Typography variant="h4" gutterBottom style={{ color: 'black', fontWeight: 'bold' }}>
                                What we're going to look at
                            </Typography>
                            <Box component="ul" style={{ paddingLeft: '20px' }}>
                                <li><Typography variant="body1">What is Instagram Story Saver?</Typography></li>
                                <li><Typography variant="body1">Why Instagram Story Saver helpful?</Typography></li>
                                <li><Typography variant="body1">Best Method to Save Story</Typography></li>
                                <li><Typography variant="body1">Features That We Have</Typography></li>
                            </Box>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <Paper elevation={3} sx={{ padding: 2 }}>
                            <Typography variant="h4" gutterBottom style={{ color: 'black', fontWeight: 'bold' }}>
                                What is Instagram Story Saver?  
                            </Typography>
                            <Typography variant="body1" align="left" style={{ whiteSpace: 'pre-line' }}>
                                The premise of Instagram Story Saver is quite simple. A tool or app which help users to save or download an Instagram story by using its URL or the story owner profile ID. But most of the tool sites and app change or cost to save an Instagram story but, if you're using this tool then don't worry we don't cost for it, you can use as much you can, it will be always free. The good news is we have built with different unique elements and codes which make it's users friendly and easy to use for everyone.
                                
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <Paper elevation={3} sx={{ padding: 2 }}>
                            <Typography variant="h4" gutterBottom style={{ color: 'black', fontWeight: 'bold' }}>
                                Why Instagram Story Saver helpful?  
                            </Typography>
                            <Typography variant="body1" align="left" style={{ whiteSpace: 'pre-line' }}>
                            Well, if you think, why a story saver tool? Then let me tell you Instagram don't have built-in feature such saving a user story direct. So you must have to use a tool to save an insta story. As you know, Instagram story got removed after 24 hours automatically, and if you think one of your celebrities have uploaded their story and you want to save it offline then you can use this tool to save it instantly.
                            <br/><br/>    
                            Even, there are many reasons can be to use a story saver tool, and there are also many fake sites those are in non-working and not mentioned, so always choose a right platform to save Insta story for free.
                                
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <Paper elevation={3} sx={{ padding: 2 }}>
                            <Typography variant="h4" gutterBottom style={{ color: 'black', fontWeight: 'bold' }}>
                                Best Method to Save Instagram Story and Highlights  
                            </Typography>
                            <Typography variant="body1" align="left" style={{ whiteSpace: 'pre-line' }}>
                            As I have already told, Instagram don't have its built-in feature to save an Insta story for others users or viewers. But many peoples want to save a Instagram story for varies uses or information purpose. And if you are also one of theme then using a web tool or web app will be the perfect platform for you which take less site faster download and easy to use as well. And as you know screen recording also not a good idea due to quality of the video so follow the steps below to save story using web app.
                                
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <Paper elevation={3} sx={{ padding: 2 }}>
                            <Typography variant="h4" gutterBottom style={{ color: 'black', fontWeight: 'bold' }}>
                                Guide: Instagram Story Download
                            </Typography>
                            <Typography variant="body1" align="left" style={{ whiteSpace: 'pre-line' }}>
                            It's pretty easy to download an Instagram story using this web app, where you don't need to singup or create an account and the best part is there is not using limitation. You just have to paste the sotry link on the search box and click on the start button. Well, to understand the process, let's guide you steps by steps with images.
                                
                            </Typography>
                            <Box component="ul" style={{ paddingLeft: '20px' }}>
                                <li><Typography variant="body1">Login your Instagram with your own login details and visit the profile who's you want to save the story.</Typography></li>
                                <li><Typography variant="body1">Now click on the story, and you'll see the share button below the story.</Typography></li>
                                <li><Typography variant="body1">So click on the share button and copy the story link, now visit InstaStorySave.com and paste the story link on Instagram Story Saver and start.</Typography></li>
                                <li><Typography variant="body1">The story saving process will take some time, and then you can download the story video or photos by clicking the download button. That's it, now the story content will be save to your local device storage.</Typography></li>
                            </Box>
                            <Typography variant="body1" align="left" style={{ whiteSpace: 'pre-line' }}>
                            <h4>Note:</h4> Instagram story is a temporary content sharing feature, which is available for followers for 24 hours by default. And after 24 hours it's got deleted automatically. So please make sure your pasted story link still available for all followers.  
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <Paper elevation={3} sx={{ padding: 2 }}>
                            <Typography variant="h4" gutterBottom style={{ color: 'black', fontWeight: 'bold' }}>
                                Guide: Instagram Highlight Download
                            </Typography>
                            <Typography variant="body1" align="left" style={{ whiteSpace: 'pre-line' }}>
                            As same as story downloading feature, we have also added the highlight downloading option and the process will be same as the story one. But make sure the profile is not locked, and it's available for public view. Follow the steps below to download any Instagram highlight for free.
                            </Typography>
                            <Box component="ul" style={{ paddingLeft: '20px' }}>
                                <li><Typography variant="body1">Visit the Instagram app and click on the user profile whose highlight you want to save.</Typography></li>
                                <li><Typography variant="body1">And you'll see the highlight list below the user profile, so open it and copy the link.</Typography></li>
                                <li><Typography variant="body1">After copy the highlight link, visit on InstaStorySave.com (Instagram Highlight Saver) and paste the link and click on start.</Typography></li>
                                <li><Typography variant="body1">Now wait a moment and the highlight videos and photos will be available to save offline.</Typography></li>
                            </Box>
                            <Typography variant="body1" align="left" style={{ whiteSpace: 'pre-line' }}>
                            <h4>Note:</h4> As you know, highlight is an Instagram feature which users use to feature their profile some achievement and memorizable moment which they want to show permanent timeline. So make sure your paste highlight is still available on Instagram for all public view.  
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <Paper elevation={3} sx={{ padding: 2 }}>
                            <Typography variant="h4" gutterBottom style={{ color: 'black', fontWeight: 'bold' }}>
                                Features That Only Have in instaimageSave.com
                            </Typography>
                            <Typography variant="body1" align="left" style={{ whiteSpace: 'pre-line' }}>
                                We clam that we have some extra feature which you'll see ones in a thousand of web app. And we will be happy to explain what we have and why it's actually make special from others. So read below to know more in details.
                            </Typography>
                            <Grid container spacing={2} sx={{ display: 'flex', flexWrap: 'wrap' }}>
                                <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
                                    <Paper elevation={3} sx={{ padding: 2, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                        <Typography variant="h6" style={{ color: 'black', fontWeight: 'normal' }}>Easiest Method</Typography>
                                        <Typography variant="body1">As you know, Instagram don't have its built-in feature to save a story by default. And before a tool was invented, peoples wire used the screen recording feature, which was a complicated process and time-consuming way. But now it's become very easy and simple to save someone's story using its URL for the original video quality and without any annoying watermark. With our this web app, you just have to paste the story link, and you'll get the original quality video and photo.</Typography>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
                                    <Paper elevation={3} sx={{ padding: 2, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                        <Typography variant="h6" style={{ color: 'black', fontWeight: 'normal' }}>Short Time Process</Typography>
                                        <Typography variant="body1">We have built this web app using latest modern code language like Next.js which make this web app faster and short time process. And it only takes a moment to convert any Instagram story and highlight using the URL. Also, the downloading speed will be also faster because we have added direct CDN downloading feature.</Typography>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
                                    <Paper elevation={3} sx={{ padding: 2, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                        <Typography variant="h6" style={{ color: 'black', fontWeight: 'normal' }}>Support Every Browser</Typography>
                                        <Typography variant="body1">It will be support almost every web browser like Firefox, Safari, or Chrome, Breve, etc. So don't worry about your web browser, it will work everywhere. Even you can use this web app using any OS devices like Windows, Mac, Android, etc.</Typography>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
                                    <Paper elevation={3} sx={{ padding: 2, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                        <Typography variant="h6" style={{ color: 'black', fontWeight: 'normal' }}>Secure and Fast Downloads</Typography>
                                        <Typography variant="body1">We do respect our users or visitors privacy which we're considering as a priceless so don't worry about it. We do not store or share your personal data and information, to know more about it please read our privacy policy page. But before using this web app you need to know whatever you're downloading it comes from direct Instagram or Meta CDN, and we have also added the process which make the download process faster..</Typography>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
                                    <Paper elevation={3} sx={{ padding: 2, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                        <Typography variant="h6" style={{ color: 'black', fontWeight: 'normal' }}>No Use Limitation</Typography>
                                        <Typography variant="body1">Our main motive is to build this web app for the people requirement, and we are happy to share this service without any limitation. And any users can save Instagram story as much as they want, which will be always for free..</Typography>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
                                    <Paper elevation={3} sx={{ padding: 2, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                        <Typography variant="h6" style={{ color: 'black', fontWeight: 'normal' }}>No Need to Signup</Typography>
                                        <Typography variant="body1">To make the process faster and user-friendly, we don't use a signup option. So you can use this tool as anonymous, for free. The best part is, we also don't collect your activity logs, but we do use bot fight firewall to reduce the spam or bot users.</Typography>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <Paper elevation={3} sx={{ padding: 2 }}>
                            <Typography variant="h4" gutterBottom style={{ color: 'black', fontWeight: 'bold' }}>
                                Others Method to Save an Insta Story
                            </Typography>
                            <Typography variant="body1" align="left" style={{ whiteSpace: 'pre-line' }}>
                            Well, as you have read, this is the only simple and faster method you can use to save any Instagram story and highlight for free. But still you don't want to use this method, then you can also use the classic and old story saving method which is screen recording. Follow the steps below for best quality.
                            </Typography>
                            <Box component="ul" style={{ paddingLeft: '20px' }}>
                                <li><Typography variant="body1">Visit your device app store and get a screen recording app which will be for free, Android, iOS, Windows, and Mac.</Typography></li>
                                <li><Typography variant="body1">Now open Instagram app with enable the screen recording app and open the story and click on the start.</Typography></li>
                                <li><Typography variant="body1">That's it ones you'll done just stop the recording.</Typography></li>
                            </Box>
                        </Paper>
                    </Grid>
                    
                    <Grid item xs={12} md={8}>
                        <Paper elevation={3} sx={{ padding: 2 }}>
                            <Typography variant="h4" gutterBottom style={{ color: 'black', fontWeight: 'bold' }}>
                                FAQs Related To Instagram Story Saver
                            </Typography>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant="h6">How to download an Instagram story using link?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                Yes, you can download a Instagram story using the URL or link only with this web app. Just visit on your Instagram app and copy the story URL and paste here and then you can download the videos and phots all story in one process.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant="h6">What is the best method to save Instagram story?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                As per the time, one of the best and faster Instagram story downloading method is to use a web app like Instastorysave.com, which is best for saving story quickly. Where you don't need to download any app and install as well.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant="h6">How can I save Instagram highlight using link?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                Saving a highlight is simple as the story downloading in instastorysave.com just copy the highlight link and paste on the same search box and click on the start then you can download theme easily.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant="h6">Can I save the story using username?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                Yes, it's possible to get the user's story by using the username, and it's only available on instastorysave.com where you can paste or write the username and click on the start. Then you can download the story video and photo easily.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant="h6">Can I save a private story using this tool?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                No, we don't allow saving or download an Instagram private user private story because it's against the Instagram user guidelines.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant="h6">How can I download the story music?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                We do have a feature to convert the story video to mp3 audio, where you just have to paste the story link on audio page.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant="h6">How to download Instagram Stories on iPhone?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                
                                This web app is available for almost every web browser and OS devices like Android, iOS, Mac, Linux, etc. So visit your device web browser and visit on instastorysave.com and then you can use this tool for your all Instagram download.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant="h6">Can I save a story using a PC?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                
                                Yes, you can also save the story using PC or desktop devices as well. Just visit your referace web browser and copy the story link and page on serach box of Instastorysave.com and get the story.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <Paper elevation={3} sx={{ padding: 2 }}>
                            <Typography variant="h4" gutterBottom style={{ color: 'black', fontWeight: 'bold' }}>
                                Conclusion
                            </Typography>
                            <Typography variant="body1" align="left" style={{ whiteSpace: 'pre-line' }}>
                            So stop using screen recroing for saving a Instgaram story which is look like anoying and complecation process. And make this process short and easy with get the original video and photo you should use web app like this by Instagram Story Saver Inststorysave.com for free. Using this method you don't need to install a extra applectaion on your device and make the process long. So use this Stories downloader web app to download any story faster.
                            </Typography>
                        </Paper>
                    </Grid>

                </Grid>
            
            </Container>
        </>
    )
}

export default Story
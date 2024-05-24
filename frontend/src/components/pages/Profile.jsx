
import React, { useState } from 'react';
import { Container, Accordion,AccordionSummary,AccordionDetails,Typography, TextField, Button, Box, Grid, Paper } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from 'axios';

const Profile = () => {

    const [url, setUrl] = useState('');
    const [profileUrls, setprofileUrls] = useState([]);

    const handleUrlChange = async (event) => {

        const newUrl = event.target.value;
        setUrl(newUrl);

        if (newUrl) {
            try {
                const response = await axios.post('http://localhost:8000/api/v1/image/download', { url: newUrl });
                setprofileUrls(response.data.data.profileUrls);
            } catch (error) {
                console.error('Error fetching the Profile:', error);
                setprofileUrls([]);
            }
        } else {
            setprofileUrls([]);
        }
    };

    const handleDownloadSingle = async (profileUrl) => {
        try {
            const response = await axios.get(profileUrl, {
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
                Instagram Profile Downloader
            </Typography>
            <Typography variant="h6" gutterBottom align="center">
                #1 Download Instagram Profile Picture and Insta DP with full-size high quality known as InstaZoom. Also, View someones profile pic anonymously for free.
            </Typography>
            <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                <TextField
                    label="Instagram Profile URL"
                    variant="outlined"
                    value={url}
                    onChange={handleUrlChange}
                    fullWidth
                    sx={{ mb: 2, width: '100%', maxWidth: 1000 }} 
                />
            </Box>
                {profileUrls.length > 0 && (
                <Grid container spacing={2} justifyContent="center" sx={{ mt: 4, width: '100%', maxWidth: 1000 }}>
                    {profileUrls.map((reelUrl, index) => (
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
                            There is no doubt that Instagram is currently the biggest social media platform in all over the world. On Instagram, there are multi-billions of active users monthly where users share their daily life, professional life and also content that people really love to consume. So each of the account of Insta comes with a DP which may have their own photo or other things. And users from Instagram want to download those DP from popular profile. There are no features to download profile directly from Instagram. That's where this Instagram DP downloader stands, with this tool you can download Insta profile picture in very high quality. You just have to put the Insta username in the search box, and you are able to download the profile picture in high quality.
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <Paper elevation={3} sx={{ padding: 2 }}>
                            <Typography variant="h4" gutterBottom style={{ color: 'black', fontWeight: 'bold' }}>
                                What we're going to look at
                            </Typography>
                            <Box component="ul" style={{ paddingLeft: '20px' }}>
                                <li><Typography variant="body1">How You Can Download Profile?</Typography></li>
                                <li><Typography variant="body1">Features of Instagram Profile Downloader</Typography></li>
                                <li><Typography variant="body1">What is an Instagram Profile?</Typography></li>
                                <li><Typography variant="body1">Others method you can follow to Save Profile</Typography></li>
                            </Box>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <Paper elevation={3} sx={{ padding: 2 }}>
                            <Typography variant="h4" gutterBottom style={{ color: 'black', fontWeight: 'bold' }}>
                                How You Can Download Profile?  
                            </Typography>
                            <Typography variant="body1" align="left" style={{ whiteSpace: 'pre-line' }}>
                                There are so many ways to save Instagram profile picture to your device such as taking screenshot is the easiest way which you can do. But taking screenshot of DP can decrease the quality of the picture, so screenshot is not a good idea. Best way is to use this tool which can bring you the DP in original quality in just few clicks. This dp downloader tool you can access with your device browser no matter you whether you are using phone or PC. All you have to put the profile username or URL to search box for saving the picture.
                                
                            </Typography>
                            <Box component="ul" style={{ paddingLeft: '20px' }}>
                                <li>
                                    <Typography variant="body1">
                                        First login to your Instagram profile and open the profile from where you want to download the picture.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant="body1">
                                        Now click to the three dot option in the top of the right and click to copy profile link button, or remember the username.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant="body1">
                                        Then visit here in this Insta dp downloader tool and paste the URL or type the username in the search box.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant="body1">
                                        So here you just have to click the download button, and it will start to download the profile picture in just few seconds.
                                    </Typography>
                                </li>
                            </Box>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={8}>
                    <Paper elevation={3} sx={{ padding: 2 }}>
                        <Typography variant="h4" gutterBottom style={{ color: 'black', fontWeight: 'bold' }}>
                            Features of Instagram Profile Downloader
                        </Typography>
                        <Typography variant="body1" align="left" style={{ whiteSpace: 'pre-line' }}>
                            It comes with features that made your insta dp downloading process easy and high quality. The first thing it doesn't require any extension to use while downloading, all its need a browser where you can access easily. It's compatible with each of the device, no matter its phone or PC.
                        </Typography>
                        <Grid container spacing={2} sx={{ display: 'flex', flexWrap: 'wrap' }}>
                            <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
                                <Paper elevation={3} sx={{ padding: 2, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                    <Typography variant="h6" style={{ color: 'black', fontWeight: 'normal' }}>High Quality</Typography>
                                    <Typography variant="body1">Usually people take a screenshot for an Instagram profile, but it's not a good option because take will decrease your image quality. And using this tool for saving any Insta dp will give you the original quality..</Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
                                <Paper elevation={3} sx={{ padding: 2, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                    <Typography variant="h6" style={{ color: 'black', fontWeight: 'normal' }}>No Sing Up</Typography>
                                    <Typography variant="body1">People use some app to save insta dp where they have to sing up for using the app. And that's where this tool steps in because it don't need any sing up to use, just visit here and put the username to search box and get the profile picture </Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
                                <Paper elevation={3} sx={{ padding: 2, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                    <Typography variant="h6" style={{ color: 'black', fontWeight: 'normal' }}>Compatible</Typography>
                                    <Typography variant="body1">Having an online tool, you might have thought that is it compatible with my device. But no worries as this tool is useable for any device with just only browser. You can use this with your PC or Mac or whether it's IOS or Android, it can run in any device no matter what.</Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
                                <Paper elevation={3} sx={{ padding: 2, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                    <Typography variant="h6" style={{ color: 'black', fontWeight: 'normal' }}>No Extension</Typography>
                                    <Typography variant="body1">Using some online tool it might require a browser extension, but with this dp downloader it doesn't. Just open your browser and visit here to download any instagram dp in just few clicks with using extension.</Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
                                <Paper elevation={3} sx={{ padding: 2, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                    <Typography variant="h6" style={{ color: 'black', fontWeight: 'normal' }}>Limitless Use</Typography>
                                    <Typography variant="body1">As it's free to use tool for everyone, so might have thought that is there any limit of use. But not it's available for unlimited use no matter how many times you have used for saving any Insta dp. You can use this as many times as you need to save dp from insta.</Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
                                <Paper elevation={3} sx={{ padding: 2, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                    <Typography variant="h6" style={{ color: 'black', fontWeight: 'normal' }}>Copy Bio Text</Typography>
                                    <Typography variant="body1">Not only view or save the profile, we have also implemented the copy bio text. Just write or pate the profile username and after the process you can copy the bio as well with view the number of following and followers. So use this web app and get the bio details as well with the profile.</Typography>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Paper>
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <Paper elevation={3} sx={{ padding: 2 }}>
                            <Typography variant="h4" gutterBottom style={{ color: 'black', fontWeight: 'bold' }}>
                                What is an Instagram Profile?
                            </Typography>
                            <Typography variant="body1" align="left" style={{ whiteSpace: 'pre-line' }}>
                                Your Instagram profile is your insta account where you can share stuff like photo reels igtv from your id. And every profile comes with a profile picture where you can put any of your favorite photo. On Instagram profile you can add your bio, highlight, and other social media links. In short, your Insta profile is your official page
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <Paper elevation={3} sx={{ padding: 2 }}>
                            <Typography variant="h4" gutterBottom style={{ color: 'black', fontWeight: 'bold' }}>
                                Why Profile Downloader Helpful
                            </Typography>
                            <Typography variant="body1" align="left" style={{ whiteSpace: 'pre-line' }}>
                            After you use this tool for downloading any insta profile picture, you might have thought why this tool is helpful and why you should use this instead of taking screenshot. So the simple conclusion is taking screenshot will decrease the image quality and with this tool you will get the image in original quality. And getting an insta profile picture in original quality using this free tool will always be helpful for you.
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <Paper elevation={3} sx={{ padding: 2 }}>
                            <Typography variant="h4" gutterBottom style={{ color: 'black', fontWeight: 'bold' }}>
                                Others method you can follow to Save Profile
                            </Typography>
                            <Typography variant="body1" align="left" style={{ whiteSpace: 'pre-line' }}>
                            One of the other method for saving Instagram profile picture is you can take screenshot. As Instagram added feature to zoom in, anyone insta profile with one tap. So you can open the profile from where you want to save the dp and click to the profile photo, and it will zoom in, and then you can take a screenshot.
                            <h4>Note:</h4> Remember, taking screenshot can decrease the image quality to very low. So for that reason, use this insta profile downloader tool instead of taking screenshot for getting the image in original quality.
                            </Typography>
                        </Paper>
                    </Grid>

                    
                    <Grid item xs={12} md={8}>
                        <Paper elevation={3} sx={{ padding: 2 }}>
                            <Typography variant="h4" gutterBottom style={{ color: 'black', fontWeight: 'bold' }}>
                                FAQs of Profile Downloader
                            </Typography>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant="h6">How to download Instagram dp of private account?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                Downloading privet profile photo from Instagram is also the same process as downloading with regular profile, Just put the username here in this tool and get the picture instantly
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant="h6">Can I use this tool on my iPhone?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                
                                Since day one this available it's compatible for any device whether it's IOS or Android, So yes you can use this tool in your iPhone for saving Insta profile.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant="h6">Where I can find these image on my file manager?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                These image will be saved on that file where your browser has located, But you can change the location for saving file. Visit download section of your browser and change the location.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant="h6">Can I use the downloaded DP anywhere on the internet?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                No, you can't use the saved profile picture anywhere on the internet as it can be any brand's image which are under their labels, You can use those picture for share with your friends and for fun purpose
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant="h6">Is this dp downloader tool is for free?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                Yes of course this tool is available for anyone free using, so anyone can access this tool with their device browser to download anyone's insta dp.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant="h6">How to protect your Instagram account?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                There are several ways to protect your Instagram account, just like always use very strong password which should be mixed of numbers and letters with special characters. Here are some Tips for Protecting Your Instagram Accounts
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
                                Say by to taking screenshot and do use this tool for saving anyone's Instagram profile picture. This insta profile download tool is the only very easy, convenient way to save do from Instagram. You don't need to download any other application or extension, it is just accessible on your device browser. In short, downloading any Instagram dp in original high quality this is the only possible way available.
                            </Typography>
                        </Paper>
                    </Grid>

                </Grid>
            
            </Container>
        </>
    )
}

export default Profile
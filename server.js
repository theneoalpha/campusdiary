const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

const accessToken = 'EAAGESZChSZCuwBO3cYQjNBs7RxsCxSF3X0EcX5RMRPwEI2whuMnxF3lnpyf8ZCZCk61QxBU7kZCBkPZC3c9Mp6RrfcE6lGGZBdOpJjE2GQYoqs5xh6rpI9ZBmsBF50ZAAZCgQZC91O2kjPEbVB6aeabmynFToAhoTjqYw0ULnx3PaXjuCfC3wAhxHEIZAHjQaLZB6yqMp7ojhRwSn11Hg3D6G0DsZD';

async function getInstagramProfilePicture(accessToken) {
    const url = `https://graph.instagram.com/me?fields=id,theneoalpha,profile_picture_url&access_token=${accessToken}`;

    try {
        const response = await axios.get(url);
        return response.data.profile_picture_url;
    } catch (error) {
        console.error('Error fetching profile picture:', error);
        return null;
    }
}

app.get('/profile-picture', async (req, res) => {
    const profilePictureUrl = await getInstagramProfilePicture(accessToken);
    if (profilePictureUrl) {
        res.send(`<img src="${profilePictureUrl}" alt="Profile Picture" />`);
    } else {
        res.send('Error fetching profile picture.');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

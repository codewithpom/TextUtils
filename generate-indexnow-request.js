const links = require('./links');
const fetch = require('node-fetch');

const generateIndexNowRequest = async () => {
    const data = {
        host: "www.txtutils.net",
        key: "9be76769cd7b480585b4f1bb1a0e7d2d",
        keyLocation: "https://www.txtutils.net/9be76769cd7b480585b4f1bb1a0e7d2d.txt",
        urlList: links.pages.map(page => `https://www.txtutils.net${page.link}`)
    };

    try {
        const response = await fetch('https://api.indexnow.org/indexnow', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Host': 'api.indexnow.org'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            console.log('IndexNow request successful');
        } else {
            console.error('IndexNow request failed', response.statusText);
        }
    } catch (error) {
        console.error('Error making IndexNow request', error);
    }
};

generateIndexNowRequest();

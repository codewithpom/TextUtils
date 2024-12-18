const links = require('./links');
const fetch = require('node-fetch');

const generateIndexNowRequest = async () => {
    const data = {
        host: "www.txtutils.net",
        key: "ehyxaz76t1jep3r2aj6be5bfpegbkysr",
        keyLocation: "https://www.txtutils.net/ehyxaz76t1jep3r2aj6be5bfpegbkysr.txt",
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

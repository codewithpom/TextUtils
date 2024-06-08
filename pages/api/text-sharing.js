const GITHUB_GIST_API_KEY = process.env['GITHUB_GIST']
console.log(GITHUB_GIST_API_KEY)
const GITHUB_GIST_API_URL = 'https://api.github.com/gists'

function createGist(file_name, text) {
    const expirationDate = new Date()
    expirationDate.setMonth(expirationDate.getMonth() + 3)

    return fetch(GITHUB_GIST_API_URL, {
        method: 'POST',
        headers: {
            Authorization: `token ${GITHUB_GIST_API_KEY}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            public: false,
            files: {
                // 
                [file_name]: {
                    content: text,
                },
            },
        }),
    }).then((res) => res.json())

}

export default async function handler(req, res) {
    if (req.method === 'POST') {
        console.log(req.body)
        const { text } = req.body
        const { file_name } = req.body
        const gist = await createGist(file_name, text)
        res.status(200).json({ gist })
    } else {
        res.status(405).end()
    }
}

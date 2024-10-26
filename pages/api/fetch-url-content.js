export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { url } = req.body;

        try {
            const response = await fetch(url);
            const data = await response.text();
            res.status(200).json({ content: data });
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch content from URL' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
